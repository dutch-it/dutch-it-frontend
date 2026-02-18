import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { BottomCTA, CTAButton } from "@toss/tds-mobile";
import { useState } from "react";
import GameInfoForm from "../components/create-game/GameInfoForm";
import ParticipantsInfoForm from "../components/create-game/ParticipantsInfoForm";

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

  return (
    <main>
      {step === 1 && <GameInfoForm />}
      {step === 2 && <ParticipantsInfoForm />}

      <BottomCTA.Double
        fixed={true}
        leftButton={
          <CTAButton color="dark" variant="weak" onClick={onLeftClick}>
            뒤로
          </CTAButton>
        }
        rightButton={
          <CTAButton onClick={onRightClick}>
            {step === 1 ? "다음으로" : "게임 생성"}
          </CTAButton>
        }
      />
    </main>
  );
}
