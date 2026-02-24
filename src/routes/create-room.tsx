import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { BottomCTA, CTAButton } from "@toss/tds-mobile";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ParticipantsInfoForm from "../components/create-room/ParticipantsInfoForm";
import {
  createRoomSchema,
  type RoomFormValues,
  type RoomSubmitValues,
} from "../schemas/createRoomSchema";
import { DEFAULT_ROOM_FORM } from "../consts/create-room";
import { PageContainer } from "../styles/global";
import RoomInfoForm from "../components/create-room/RoomInfoForm";
import NextStepButton from "../components/create-room/NextStepButton";

export const Route = createFileRoute("/create-room")({
  component: CreateRoomPage,
});

function CreateRoomPage() {
  const router = useRouter();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);
  const onLeftClick = () => {
    if (step === 1) router.history.back();
    else setStep(1);
  };
  const onRightClick = () => {
    if (step === 1) setStep(2);
    else methods.handleSubmit(onValid)();
  };

  const onValid = (data: RoomSubmitValues) => {
    // todo) API 통신 로직 추가
    alert(JSON.stringify(data));

    navigate({
      to: "/room/$roomId",
      params: { roomId: "abc" },
      replace: true,
    });
  };

  const methods = useForm<RoomFormValues, unknown, RoomSubmitValues>({
    resolver: zodResolver(createRoomSchema),
    mode: "onChange",
    defaultValues: DEFAULT_ROOM_FORM,
  });

  return (
    <PageContainer>
      <FormProvider {...methods}>
        <form>
          {step === 1 && <RoomInfoForm />}
          {step === 2 && <ParticipantsInfoForm />}

          <BottomCTA.Double
            fixed={true}
            leftButton={
              <CTAButton color="dark" variant="weak" onClick={onLeftClick}>
                뒤로
              </CTAButton>
            }
            rightButton={
              <NextStepButton step={step} onRightClick={onRightClick} />
            }
          />
        </form>
      </FormProvider>
    </PageContainer>
  );
}
