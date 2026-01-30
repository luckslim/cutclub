import { LightbulbIcon } from "@phosphor-icons/react";
import CardTilt from "../tiltCard";
import { Container } from "./style";

export default function Service() {
  return (
    <Container>
      <CardTilt
        cardName="User"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus nemo, numquam maxime minima, deserunt neque vitae ex non a impedit, tempore sit aut est? Quis blanditiis voluptatem deserunt earum?"
        title="user"
        details="user is"
        detailStrong="avalible"
        icon={[{ icon: LightbulbIcon }]}
      />
      <CardTilt
        cardName="User"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus nemo, numquam maxime minima, deserunt neque vitae ex non a impedit, tempore sit aut est? Quis blanditiis voluptatem deserunt earum?"
        title="user"
        details="user is"
        detailStrong="avalible"
        icon={[{ icon: LightbulbIcon }]}
      />
      <CardTilt
        cardName="User"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus nemo, numquam maxime minima, deserunt neque vitae ex non a impedit, tempore sit aut est? Quis blanditiis voluptatem deserunt earum?"
        title="user"
        details="user is"
        detailStrong="avalible"
        icon={[{ icon: LightbulbIcon }]}
      />
    </Container>
  );
}
