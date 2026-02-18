import styled from "@emotion/styled";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { adaptive } from "@toss/tds-colors";
import { Asset, BottomCTA, Stepper, StepperRow, Top } from "@toss/tds-mobile";

export const Route = createFileRoute("/")({
  component: IntroPage,
});

function IntroPage() {
  const navigate = useNavigate();

  const onStartClick = () => {
    navigate({ to: "/create-game" });
  };

  return (
    <main>
      <IntroContainer>
        <Top
          title={
            <Top.TitleParagraph size={22} color={adaptive.grey900}>
              친구들과 게임을 통해 재미있게 돈을 정산해보세요
            </Top.TitleParagraph>
          }
          upper={
            <Top.UpperAssetContent
              content={
                <Asset.Icon
                  frameShape={Asset.frameShape.CleanW60}
                  backgroundColor="transparent"
                  name="icon-game-dark"
                  aria-hidden={true}
                  ratio="1/1"
                />
              }
            />
          }
        />

        <Stepper>
          <StepperRow
            left={<StepperRow.NumberIcon number={1} />}
            center={
              <StepperRow.Texts
                type="A"
                title="총 정산 금액, 인원 수, 순위별 정산 비율을 정해 방을 만들어요"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={2} />}
            center={
              <StepperRow.Texts
                type="A"
                title="방에 친구들을 초대하고 게임을 시작해요"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={3} />}
            center={
              <StepperRow.Texts
                type="A"
                title="다양한 미니게임을 통해 순위를 정해요"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={4} />}
            center={
              <StepperRow.Texts
                type="A"
                title="토스를 통해 즉시 송금할 수 있어요"
                description=""
              />
            }
            hideLine={true}
          />
        </Stepper>
      </IntroContainer>

      <BottomCTA fixed={true} onClick={onStartClick}>
        시작하기
      </BottomCTA>
    </main>
  );
}

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
