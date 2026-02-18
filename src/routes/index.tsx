import { createFileRoute } from "@tanstack/react-router";
import { BottomCTA } from "@toss/tds-mobile";

export const Route = createFileRoute("/")({
  component: IntroPage,
});

function IntroPage() {
  return (
    <main>
      <BottomCTA fixed={true}>시작하기</BottomCTA>
    </main>
  );
}
