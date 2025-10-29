import { Elysia } from "elysia";
import { api } from "./modules/api";

new Elysia()
	.get("/", () => "Welcome to the Bun Elysia API!")
  .use(api)
  .listen(process.env.PORT ?? 8080);