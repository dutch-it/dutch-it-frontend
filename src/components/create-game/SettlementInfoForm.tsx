import styled from "@emotion/styled";
import { adaptive } from "@toss/tds-colors";
import { BottomSheet, GridList, ListHeader, TextField } from "@toss/tds-mobile";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import type { GameFormValues } from "../../schemas/createGameSchema";
import { BANK_LIST } from "../../consts/create-game";
import { chunkArray } from "../../utils/array";
import { formatAccountNumber, formatNumber } from "../../utils/format";

export default function SettlementInfoForm() {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<GameFormValues>();

  const [isBankSelectionOpen, setIsBankSelectionOpen] = useState(false);

  const chunkedBanks = chunkArray(BANK_LIST, 3);

  const onBankClick = (bankName: string) => {
    setValue("bankName", bankName);
    setIsBankSelectionOpen(false);
  };

  return (
    <>
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

      <SettlementContainer>
        <Controller
          name="totalAmount"
          control={control}
          render={({ field }) => (
            <TextField
              variant="line"
              placeholder="총 정산 금액"
              suffix="원"
              inputMode="numeric"
              value={field.value ? field.value.toLocaleString() : ""}
              help={
                errors.totalAmount
                  ? errors.totalAmount.message
                  : "최대 1,000,000만원까지 설정할 수 있어요"
              }
              hasError={Boolean(errors.totalAmount)}
              onChange={(e) => {
                const formattedNumber = formatNumber(e);
                field.onChange(formattedNumber);
              }}
            />
          )}
        />

        <Controller
          name="accountNumber"
          control={control}
          render={({ field }) => (
            <TextField
              variant="line"
              placeholder="송금 받을 계좌번호 (선택)"
              inputMode="numeric"
              value={field.value ?? ""}
              help={errors.accountNumber ? errors.accountNumber.message : null}
              hasError={Boolean(errors.accountNumber)}
              onChange={(e) => {
                const formattedAccountNumber = formatAccountNumber(e);
                field.onChange(formattedAccountNumber);
              }}
            />
          )}
        />

        <TextField.Button
          variant="line"
          placeholder="은행 선택"
          value={watch("bankName")}
          onClick={() => setIsBankSelectionOpen(true)}
        />
      </SettlementContainer>

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
                      style={{
                        width: "24px",
                        height: "24px",
                      }}
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
