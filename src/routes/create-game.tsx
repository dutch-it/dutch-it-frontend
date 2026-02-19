import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { BottomCTA, CTAButton } from "@toss/tds-mobile";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ParticipantsInfoForm from "../components/create-game/ParticipantsInfoForm";
import {
  createGameSchema,
  type GameFormValues,
} from "../schemas/createGameSchema";
import { DEFAULT_GAME_FORM } from "../consts/create-game";
import { PageContainer } from "../styles/global";
import RoomInfoForm from "../components/create-game/RoomInfoForm";
import NextStepButton from "../components/create-game/NextStepButton";

export const Route = createFileRoute("/create-game")({
  component: CreateGamePage,
});

function CreateGamePage() {
  const router = useRouter();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);
  const onLeftClick = () => {
    if (step === 1) router.history.back();
    else setStep(1);
  };
  const onRightClick = () => {
    if (step === 1) setStep(2);
    // todo) API로 받아온 id로 이동하게 수정 필요
    else
      navigate({
        to: "/game/$gameId",
        params: { gameId: "abc" },
        replace: true,
      });
  };

  const methods = useForm<GameFormValues>({
    resolver: zodResolver(createGameSchema),
    mode: "onChange",
    defaultValues: DEFAULT_GAME_FORM,
  });

  return (
    <PageContainer>
      <FormProvider {...methods}>
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
      </FormProvider>
    </PageContainer>
  );
}
