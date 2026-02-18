import styled from "@emotion/styled";
import { adaptive } from "@toss/tds-colors";
import { Button, ListRow, TextField, Top } from "@toss/tds-mobile";
import { useState } from "react";

export default function ParticipantsInfoForm() {
  const [participants] = useState<{ ratio: number }[]>([
    { ratio: 20 },
    { ratio: 30 },
    { ratio: 50 },
  ]);

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            {"게임에 참여할\n인원 수와 정산 비율을 정해요"}
          </Top.TitleParagraph>
        }
      />
      {participants.map((participant, index) => (
        <ListRow
          left={
            <ListRow.Texts
              type="1RowTypeC"
              top={`${index + 1}등`}
              topProps={{ color: adaptive.grey700 }}
            />
          }
          contents={
            <RatioInputContainer>
              <TextField
                variant="line"
                placeholder="비율"
                value={participant.ratio}
                suffix="%"
              />
            </RatioInputContainer>
          }
          right={
            index + 1 >= 3 && (
              <Button color="danger" variant="weak" size="small">
                삭제
              </Button>
            )
          }
          verticalPadding="large"
        />
      ))}
      <ListRow
        left={
          <ListRow.AssetIcon
            shape="original"
            name="icon-plus-grey-fill"
            variant="fill"
          />
        }
        contents={
          <ListRow.Texts
            type="1RowTypeA"
            top="추가하기"
            topProps={{ color: adaptive.grey700 }}
            aria-label="게임 인원 추가 버튼"
          />
        }
        verticalPadding="large"
      />
    </>
  );
}

const RatioInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  height: 32px;
`;
