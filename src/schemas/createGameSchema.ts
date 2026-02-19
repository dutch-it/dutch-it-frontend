import { z } from "zod";

export const createGameSchema = z.object({
  // 정산 관련 정보
  totalAmount: z
    .number({ error: "총 정산 금액을 입력해주세요." })
    .min(100, { message: "최소 100원 이상 입력해주세요." })
    .max(1000000, { message: "최대 1,000,000원까지 입력할 수 있어요." }),
  accountNumber: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{3}-\d{4}-\d{6}$/.test(value), {
      message: "계좌번호 형식이 올바르지 않아요.",
    }),
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
