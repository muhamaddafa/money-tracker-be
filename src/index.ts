import { Elysia } from "elysia";
import { api } from "./modules/api";

const app = new Elysia()
	.get("/", () => "Welcome to the Bun Elysia API!")
  .use(api)
  .listen(process.env.PORT ?? 8080);

console.log(`Server running at http://localhost:${app.server?.port}`);

export { app };