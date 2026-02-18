import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create-game")({
  component: CreateGamePage,
});

function CreateGamePage() {
  return <div>Hello "/create-game"!</div>;
}
