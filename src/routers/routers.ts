import homeRouter from "./homeRouter";
import usersRouter from "./api/usersRouter";
import sessionRouter from "./api/sessionRouter";

const routers: Function[] = [homeRouter, usersRouter, sessionRouter];

export default routers;
