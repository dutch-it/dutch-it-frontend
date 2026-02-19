import { z } from "zod";

export const createGameSchema = z.object({
  // 정산 관련 정보
  totalAmount: z.number().min(100).max(9999999),
  accountNumber: z.string().optional(),
  bankName: z.string().optional(),

  // 게임 관련 정보
  roundCount: z.number().min(1).max(10),
  useCamera: z.boolean(),
  useMic: z.boolean(),

  // 참가자 관련 정보
  participants: z.array(
    z.object({
      ratio: z.number(),
    }),
  ),
});

export type GameFormValues = z.infer<typeof createGameSchema>;
