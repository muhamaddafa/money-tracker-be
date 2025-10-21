import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { api } from "./modules/api";

const app = new Elysia()
  .use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }))
  .use(api);

// Export for Vercel serverless
export default app.fetch;