import { createFileRoute } from "@tanstack/react-router";
import { PageContainer } from "../../styles/global";

export const Route = createFileRoute("/room/$roomId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageContainer>Hello "/game/$gameId"!</PageContainer>;
}
