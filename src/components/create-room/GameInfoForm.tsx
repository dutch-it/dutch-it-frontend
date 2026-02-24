import { adaptive } from "@toss/tds-colors";
import {
  Border,
  Checkbox,
  ListHeader,
  ListRow,
  NumericSpinner,
} from "@toss/tds-mobile";
import { Controller, useFormContext } from "react-hook-form";
import type { RoomFormValues } from "../../schemas/createRoomSchema";

export default function GameInfoForm() {
  const { control } = useFormContext<RoomFormValues>();

  return (
    <>
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
            name="totalRounds"
            control={control}
            render={({ field }) => (
              <NumericSpinner
                size="tiny"
                number={field.value}
                onNumberChange={field.onChange}
                minNumber={1}
                maxNumber={10}
              />
            )}
          />
        }
        verticalPadding="large"
      />

      <ListRow
        verticalPadding="large"
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
      />

      <ListRow
        verticalPadding="large"
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
      />
    </>
  );
}
