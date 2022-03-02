import { NextFunction, Request, Response } from "express";
import c from "config";
import { validatePassword } from "../services/userService";
import { createSession } from "../services/sessionService";
import { CreateSessionInput } from "../schemas/sessionSchema";
import { signJwt } from "../utils/jwtUtils";
import HttpException from "../exceptions/HttpException";
import log from "../utils/logger";

export const createSessionHandler = async (
  req: Request<{}, {}, CreateSessionInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await validatePassword(req.body);

    if (!user) {
      throw new HttpException(401, "Invalid email or password");
    }

    const session = await createSession(user._id, req.get("user-agent") || "");

    const accessToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: c.get("accessTokenTtl") }
    );

    const refreshToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: c.get("accessTokenTtl") }
    );

    return res.status(201).json({ accessToken, refreshToken });
  } catch (error: any) {
    next(error);
  }
};
