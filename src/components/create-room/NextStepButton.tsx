import { useFormContext, useWatch } from "react-hook-form";
import type { RoomFormValues } from "../../schemas/createRoomSchema";
import { ACCOUNT_REGEX } from "../../consts/create-room";
import { CTAButton } from "@toss/tds-mobile";

export default function NextStepButton({
  step,
  onRightClick,
}: {
  step: 1 | 2;
  onRightClick: () => void;
}) {
  const { control } = useFormContext<RoomFormValues>();

  const totalAmount = useWatch({ control, name: "totalAmount" });
  const accountNumber = useWatch({ control, name: "accountNumber" });

  const isAccountValid = !accountNumber || ACCOUNT_REGEX.test(accountNumber);
  const isStep1Valid = Boolean(totalAmount) && isAccountValid;

  return (
    <CTAButton onClick={onRightClick} disabled={step === 1 && !isStep1Valid}>
      {step === 1 ? "다음으로" : "게임 생성"}
    </CTAButton>
  );
}
