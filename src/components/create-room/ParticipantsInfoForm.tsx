import styled from "@emotion/styled";
import { adaptive } from "@toss/tds-colors";
import { Button, ListRow, TextField, Top } from "@toss/tds-mobile";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import type { RoomFormValues } from "../../schemas/createRoomSchema";

export default function ParticipantsInfoForm() {
  const { control } = useFormContext<RoomFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "participants",
  });

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            {"게임에 참여할\n인원 수와 정산 비율을 정해요"}
          </Top.TitleParagraph>
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
            <RatioInputContainer>
              <Controller
                name={`participants.${index}.ratio`}
                control={control}
                render={({ field }) => (
                  <TextField
                    variant="line"
                    suffix="%"
                    inputMode="numeric"
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </RatioInputContainer>
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
        onClick={() => append({ ratio: 30 })}
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
