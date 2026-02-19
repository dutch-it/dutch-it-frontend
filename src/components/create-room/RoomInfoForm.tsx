import { Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import SettlementInfoForm from "./SettlementInfoForm";
import GameInfoForm from "./GameInfoForm";

export default function RoomInfoForm() {
  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            {"게임을 시작하기 전\n정보를 입력해요"}
          </Top.TitleParagraph>
        }
      />

      <SettlementInfoForm />
      <GameInfoForm />
    </>
  );
}
