import express, { Application } from "express";
import mongoose from "mongoose";
import config from "config";
import log from "./utils/logger";
import errorMiddleware from "./middlewares/errorMiddleware";

export default class App {
  public app: Application;

  constructor(routers: Function[]) {
    log.info(`Initializing app...`);
    this.app = express();

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRouters(routers);
    this.initializeErrorHandling();
  }

  private async connectToDatabase() {
    const dbName = config.get<string>("dbName");
    const dbUri = config.get<string>("dbUri");

    try {
      log.info(`Connecting to DB: ${dbName}...`);

      await mongoose.connect(dbUri);
      mongoose.Promise = global.Promise;

      log.info("Connected to DB");
    } catch (error) {
      log.error(`Could not connect to ${dbName}`);
      process.exit(1);
    }
  }

  private initializeMiddlewares() {
    log.info(`Initializing middlewares...`);

    this.app.use(express.json());
  }

  private initializeRouters(routers: Function[]) {
    log.info(`Initializing routers...`);

    routers.forEach((router) => {
      router(this.app);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      log.info(`App running at http://localhost:${port}`);
    });
  }
}
