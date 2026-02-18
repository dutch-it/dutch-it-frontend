import styled from "@emotion/styled";
import { adaptive } from "@toss/tds-colors";
import {
  Border,
  Checkbox,
  ListHeader,
  ListRow,
  NumericSpinner,
  TextField,
  Top,
} from "@toss/tds-mobile";

export default function GameInfoForm() {
  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            {"게임을 시작하기 전\n정보를 입력해요"}
          </Top.TitleParagraph>
        }
      />

      <SettlementContainer>
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              fontWeight="bold"
              typography="t4"
              color={adaptive.grey600}
            >
              정산
            </ListHeader.TitleParagraph>
          }
        />
        <TextField variant="line" placeholder="총 정산 금액" suffix="원" />
        <TextField variant="line" placeholder="송금 받을 계좌번호 (선택)" />
      </SettlementContainer>

      <Border variant="height16" />

      <ListHeader
        title={
          <ListHeader.TitleParagraph
            fontWeight="bold"
            typography="t4"
            color={adaptive.grey600}
          >
            게임
          </ListHeader.TitleParagraph>
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="1RowTypeA"
            top="라운드 수"
            topProps={{ color: adaptive.grey700 }}
          />
        }
        right={
          <NumericSpinner
            size="tiny"
            number={1}
            onNumberChange={() => {}}
            defaultNumber={3}
          />
        }
        verticalPadding="large"
      />
      <ListRow
        role="checkbox"
        aria-checked={true}
        contents={
          <ListRow.Texts
            type="1RowTypeA"
            top="카메라 사용 게임 포함"
            topProps={{ color: adaptive.grey700 }}
          />
        }
        right={<Checkbox.Circle size={24} checked={true} />}
        verticalPadding="large"
      />
      <ListRow
        role="checkbox"
        aria-checked={true}
        contents={
          <ListRow.Texts
            type="1RowTypeA"
            top="마이크 사용 게임 포함"
            topProps={{ color: adaptive.grey700 }}
          />
        }
        right={<Checkbox.Circle size={24} checked={true} />}
        verticalPadding="large"
      />
    </>
  );
}

const SettlementContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;
