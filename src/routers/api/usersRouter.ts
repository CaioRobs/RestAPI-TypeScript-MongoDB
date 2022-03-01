import { Router } from "express";
import {
  createUserHandler,
  getAllUsersHandler,
} from "../../controllers/userController";
import validateResource from "../../middlewares/validateResource";
import { createUserSchema } from "../../schemas/userSchema";

const route = "/api/users";
const usersRouter = Router();

usersRouter
  .route("/")
  .get(getAllUsersHandler)
  .post(validateResource(createUserSchema), createUserHandler);

export default { path: route, router: usersRouter };
