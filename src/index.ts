import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { api } from "./modules/api";

const app = new Elysia()
  .use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }))
  .use(api);

// For production deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`🦊 Server is running on port ${PORT}`);

// Export for Vercel serverless (if you still want Vercel compatibility)
export default app.fetch;