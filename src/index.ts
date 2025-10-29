import { Elysia } from "elysia";
import { api } from "./modules/api";

new Elysia()
  .use(api)
  .listen(process.env.PORT ?? 8080);