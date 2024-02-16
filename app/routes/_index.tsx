import type { MetaFunction } from "@remix-run/node";
import Container from "~/components/layout/container";

export const meta: MetaFunction = () => {
  return [
    { title: "Git Profile" },
    { name: "description", content: "Welcome to Git Profile!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Container>
        <h1>Git Profile</h1>
      </Container>
    </div>
  );
}
