import styled from "@emotion/styled";
import { adaptive } from "@toss/tds-colors";
import {
  Border,
  BottomSheet,
  Checkbox,
  GridList,
  ListHeader,
  ListRow,
  NumericSpinner,
  TextField,
  Top,
} from "@toss/tds-mobile";
import { Controller, useFormContext } from "react-hook-form";
import type { GameFormValues } from "../../schemas/createGameSchema";
import { useState } from "react";
import { BANK_LIST } from "../../consts/create-game";
import { chunkArray } from "../../utils/array";

export default function GameInfoForm() {
  const { register, control, setValue, watch } =
    useFormContext<GameFormValues>();
  const [isBankSelectionOpen, setIsBankSelectionOpen] = useState(false);
  const chunkedBanks = chunkArray(BANK_LIST, 3);

  const onBankClick = (bankName: string) => {
    setValue("bankName", bankName);
    setIsBankSelectionOpen(false);
  };

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
        <TextField
          variant="line"
          placeholder="총 정산 금액"
          suffix="원"
          inputMode="numeric"
          pattern="[0-9]*"
          {...register("totalAmount", { valueAsNumber: true })}
        />
        <TextField
          variant="line"
          placeholder="송금 받을 계좌번호 (선택)"
          inputMode="numeric"
          pattern="[0-9]*"
          {...register("accountNumber")}
        />
        <TextField.Button
          variant="line"
          placeholder="은행 선택"
          value={watch("bankName")}
          onClick={() => setIsBankSelectionOpen(true)}
        />
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
          <Controller
            name="roundCount"
            control={control}
            render={({ field }) => (
              <NumericSpinner
                size="tiny"
                number={field.value}
                onNumberChange={field.onChange}
              />
            )}
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
        right={
          <Controller
            name="useCamera"
            control={control}
            render={({ field }) => (
              <Checkbox.Circle
                size={24}
                checked={field.value}
                onChange={field.onChange}
              />
            )}
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
            top="마이크 사용 게임 포함"
            topProps={{ color: adaptive.grey700 }}
          />
        }
        right={
          <Controller
            name="useMic"
            control={control}
            render={({ field }) => (
              <Checkbox.Circle
                size={24}
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        }
        verticalPadding="large"
      />

      <BottomSheet
        open={isBankSelectionOpen}
        onClose={() => setIsBankSelectionOpen(false)}
        header={<BottomSheet.Header>은행을 선택해주세요</BottomSheet.Header>}
        expandBottomSheet
      >
        <div style={{ width: "100%", height: "12px" }} />

        <BankGridContainer>
          {chunkedBanks.map((bankGroup, groupIndex) => (
            <GridList key={`grid-group-${groupIndex}`}>
              {bankGroup.map((bank) => (
                <GridList.Item
                  key={bank.id}
                  image={
                    <img
                      src={bank.iconUrl}
                      alt={`${bank.name} 로고`}
                      style={{ width: "24px", height: "24px" }}
                    />
                  }
                  onClick={() => onBankClick(bank.name)}
                >
                  {bank.fullName}
                </GridList.Item>
              ))}
            </GridList>
          ))}
        </BankGridContainer>
      </BottomSheet>
    </>
  );
}

const SettlementContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const BankGridContainer = styled.div`
  overflow-y: auto;
`;
