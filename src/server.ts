import c from "config";
import App from "./App";
import routes from "./routers/routes";

const PORT = c.get<number>("port");

const app = new App(routes);

app.listen(PORT);
