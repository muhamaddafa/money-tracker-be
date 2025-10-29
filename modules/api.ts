import { Elysia } from "elysia";
import { transactionsAPI } from "./transactions";
import { balanceAPI } from "./balance";
import { categoriesAPI } from "./categories";
import { CustomHttpError } from "../libs/ResponseHandler";
import { accountsAPI } from "./accounts";

export default new Elysia({prefix: "/track"})
  .use(transactionsAPI)
  .use(balanceAPI)
  .use(categoriesAPI)
  .use(accountsAPI)
  .all("*", () => CustomHttpError("Endpoint not found", 404));