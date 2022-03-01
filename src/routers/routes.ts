import Router from "../interfaces/RouterInterface";
import homeRouter from "./homeRouter";
import usersRouter from "./api/usersRouter";

const routers: Router[] = [homeRouter, usersRouter];

export default routers;
