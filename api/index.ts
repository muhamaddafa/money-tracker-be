import { Elysia } from "elysia";
import api from "../src/modules/api";

export default new Elysia()
  .get("/", () => "Welcome to the Bun Elysia API!")
  .use(api)
  .compile();