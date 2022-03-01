import { Router } from "express";
import {
  errorCheckController,
  healthCheckController,
} from "../controllers/homeController";

const indexRoute = "/";
const homeRouter = Router();

homeRouter.route("/").get(healthCheckController).post(errorCheckController);

export default { path: indexRoute, router: homeRouter };
