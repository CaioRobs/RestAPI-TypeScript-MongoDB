import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format("DD/MM/YYYY - HH:mm:ss")}"`,
});

export default log
