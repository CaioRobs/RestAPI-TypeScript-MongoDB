import { Application, Router } from "express";
import { errorCheck, healthCheck } from "../controllers/homeController";

const route = "/";
const homeRouter = Router();

homeRouter.route("/").get(healthCheck).post(errorCheck);

export default (app: Application) => app.use(route, homeRouter);
