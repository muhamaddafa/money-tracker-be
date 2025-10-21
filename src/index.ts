import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { api } from "./modules/api";

export default new Elysia()
  .use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }))
  .use(api)
  .listen(4000, () => console.log("Server running on http://localhost:4000"));