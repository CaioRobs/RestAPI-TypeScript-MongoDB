import express from "express";
import config from "config";
import routes from './routes'
import connect from "./utils/connection";
import log from "./utils/logger";

const PORT = config.get<number>("port");

const app = express();

app.listen(PORT, async () => {
  log.info(`app running at http://localhost:${PORT}`);

  await connect()

  routes(app)
});
