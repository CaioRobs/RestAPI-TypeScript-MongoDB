import { Router } from "express";
import { createUserHandler } from "../../controllers/userController";

const route = "/api/users";
const usersRouter = Router();

usersRouter.route("/").post(createUserHandler);

export default { path: route, router: usersRouter };
