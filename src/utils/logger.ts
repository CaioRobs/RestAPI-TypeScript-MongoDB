import dayjs from "dayjs";

const pinoLogger = require("pino");
const pretty = require("pino-pretty");
const stream = pretty({
  colorize: true,
});

const log = pinoLogger(
  {
    base: {
      pid: false,
      time: `${dayjs().format("HH:mm:ss")}`,
    },
    level: process.env.NODE_ENV === "production" ? "debug" : "trace",
  },
  stream
);

export default log;
