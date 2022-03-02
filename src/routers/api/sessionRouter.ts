import { Application, Router } from "express";
import { createSessionHandler } from "../../controllers/sessionController";
import validateResource from "../../middlewares/validateResource";
import { createSessionSchema } from "../../schemas/sessionSchema";

const route = "/api/sessions";
const sessionRouter = Router();

sessionRouter
  .route("/")
  .post(validateResource(createSessionSchema), createSessionHandler);

export default (app: Application) => app.use(route, sessionRouter);
