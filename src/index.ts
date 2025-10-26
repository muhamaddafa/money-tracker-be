import { Elysia } from "elysia";
import { api } from "./modules/api";

const app = new Elysia()
  .use(api)
  .listen(8080, () => console.log("Server running on http://localhost:8080"));

export default app;