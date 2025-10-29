import { z } from "zod";

export const addTransactionSchema = z.object({
  accountId: z.string(),
  categoryId: z.string(),
  description: z.string(),
  amount: z.number(),
  trxType: z.enum(["income", "expense"])
});

export const getTransactionListQuerySchema = z.object({
  description: z.string().optional(),
  trxType: z.enum(["income", "expense"]).optional(),
  categoryId: z.string().optional(),
  accountId: z.string().optional(),
  pageNumber: z.number().optional().default(1),
  pageSize: z.number().optional().default(10)
});

export const editTransactionSchema = z.object({
  transactionId: z.string(),
  accountId: z.string().optional(),
  categoryId: z.string().optional(),
  description: z.string().optional(),
  amount: z.number().optional(),
  trxType: z.enum(["income", "expense"]).optional()
});

export type AddTransactionRequest = z.infer<typeof addTransactionSchema>;
export type GetTransactionListQuery = z.infer<typeof getTransactionListQuerySchema>;
export type EditTransactionRequest = z.infer<typeof editTransactionSchema>;