import express, { Application } from "express";
import mongoose from "mongoose";
import config from "config";
import log from "./utils/logger";
import errorMiddleware from "./middlewares/errorMiddleware";
import Router from "./interfaces/RouterInterface";
import logger from "./utils/logger";

export default class App {
  public app: Application;

  constructor(routers: Router[]) {
    log.info(`Initializing app...`);
    this.app = express();

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routers);
    this.initializeErrorHandling();
  }

  private async connectToDatabase() {
    log.info(`Connecting to DB...`);
    const dbUri = config.get<string>("dbUri");
    try {
      await mongoose.connect(dbUri);
      log.info("Connected to DB");
    } catch (error) {
      log.error("Could not connect to DB");
      process.exit(1);
    }
  }

  private initializeMiddlewares() {
    log.info(`Initializing middlewares...`);

    this.app.use(express.json());
  }

  private initializeRoutes(routers: Router[]) {
    log.info(`Initializing routes...`);

    routers.forEach(({ path, router }) => {
      this.app.use(path, router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      log.info(`app running at http://localhost:${port}`);
    });
  }
}
