import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { api } from "../src/modules/api";

export default new Elysia()
  .use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }))
  .use(api);