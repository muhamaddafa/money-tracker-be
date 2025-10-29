// api/index.ts (create this new file in the root)
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { transactionsAPI } from "../src/modules/transactions";
import { balanceAPI } from "../src/modules/balance";
import { categoriesAPI } from "../src/modules/categories";
import { accountsAPI } from "../src/modules/accounts";

const app = new Elysia({ prefix: "/api" })
  .use(cors({
    origin: true,
    credentials: true,
  }))
  .use(transactionsAPI)
  .use(balanceAPI)
  .use(categoriesAPI)
  .use(accountsAPI);

// Vercel serverless function handler
export default async function handler(req: Request) {
  return app.handle(req);
}

// For local development
if (import.meta.main) {
  app.listen(8080);
  console.log("🦊 Server running on http://localhost:8080");
}