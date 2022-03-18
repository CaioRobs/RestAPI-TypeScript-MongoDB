import c from "config";
import App from "./App";
import routers from "./routers/routers";

const PORT = c.get<number>("port");

const app = new App(routers);

app.listen(PORT);
