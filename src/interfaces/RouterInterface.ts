import { Router as RouterType } from "express-serve-static-core";

export default interface Router {
  path: string;
  router: RouterType;
}
