import { z } from "zod";

export const createRoomSchema = z
  .object({
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
      })
      .transform((value) => (value ? value.replace(/-/g, "") : undefined)),
    bankName: z.string().optional(),

    // 게임 관련 정보
    totalRounds: z.number().min(1).max(10),
    useCamera: z.boolean(),
    useMic: z.boolean(),

    // 등수 별 비율 정보
    ratios: z
      .array(
        z.object({
          ratio: z.number(),
        }),
      )
      .transform((ratios) => ratios.map((item) => item.ratio)),
  })
  .transform((data) => {
    if (!data.accountNumber) {
      return {
        ...data,
        bankName: undefined,
      };
    }
    return data;
  });

export type RoomFormValues = z.input<typeof createRoomSchema>;
export type RoomSubmitValues = z.output<typeof createRoomSchema>;
