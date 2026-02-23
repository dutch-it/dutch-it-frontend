import styled from "@emotion/styled";
import { adaptive } from "@toss/tds-colors";
import { Button, ListRow, TextField, Top } from "@toss/tds-mobile";
import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import type { RoomFormValues } from "../../schemas/createRoomSchema";
import { formatRatio } from "../../utils/format";

export default function ParticipantsInfoForm() {
  const { control } = useFormContext<RoomFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "participants",
  });
  const totalAmount = useWatch({ control, name: "totalAmount" });

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            {"게임에 참여할\n인원 수와 정산 비율을 정해요"}
          </Top.TitleParagraph>
        }
        subtitleBottom={
          <Top.SubtitleParagraph>
            10명까지 참여할 수 있어요
          </Top.SubtitleParagraph>
        }
      />
      {fields.map((item, index) => (
        <ListRow
          key={item.id}
          left={
            <ListRow.Texts
              type="1RowTypeC"
              top={`${index + 1}등`}
              topProps={{ color: adaptive.grey700 }}
            />
          }
          contents={
            <Controller
              name={`participants.${index}.ratio`}
              control={control}
              render={({ field }) => {
                const currentRatio = Number(field.value) || 0;

                const estimatedPrice = Math.floor(
                  totalAmount * (currentRatio / 100),
                );

                return (
                  <ListContentContainer>
                    <RatioInputContainer>
                      <TextField
                        variant="line"
                        suffix="%"
                        inputMode="numeric"
                        placeholder="0"
                        value={field.value || ""}
                        onChange={(e) => {
                          const formattedRatio = formatRatio(e);
                          field.onChange(formattedRatio);
                        }}
                      />
                    </RatioInputContainer>

                    <EstimateAmount style={{ color: adaptive.grey500 }}>
                      {estimatedPrice.toLocaleString()}원
                    </EstimateAmount>
                  </ListContentContainer>
                );
              }}
            />
          }
          right={
            index + 1 >= 3 && (
              <Button
                color="danger"
                variant="weak"
                size="small"
                onClick={() => remove(index)}
              >
                삭제
              </Button>
            )
          }
          verticalPadding="large"
        />
      ))}
      {fields.length < 10 && (
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
          withTouchEffect={true}
          onClick={() => append({ ratio: 0 })}
        />
      )}
    </>
  );
}

const ListContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RatioInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  height: 32px;
`;

const EstimateAmount = styled.span`
  font-size: 13px;
  font-weight: bold;
`;
