import dayjs from "dayjs";

const pino = require("pino");
const pretty = require("pino-pretty");
const stream = pretty({
  colorize: true,
});

const logger = pino(
  {
    base: {
      pid: false,
      time: `${dayjs().format("DD/MM/YYYY - HH:mm:ss")}`,
    },
  },
  stream
);

export default logger;
