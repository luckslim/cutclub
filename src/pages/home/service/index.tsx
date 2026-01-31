import { LightbulbIcon } from "@phosphor-icons/react";
import CardTilt from "./tiltCard";
import { Container, ContainerRaw } from "./style";
import AboutCard from "./aboutCard";

export default function Service() {
  return (
    <Container>
      <ContainerRaw>
        <AboutCard />
        <CardTilt
          cardName="User"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus nemo, numquam maxime minima, deserunt neque vitae "
          title="user"
          details="user is"
          detailStrong="avalible"
          icon={[{ icon: LightbulbIcon }]}
        />
      </ContainerRaw>
      <ContainerRaw>
        <AboutCard />
        <CardTilt
          cardName="User"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus nemo, numquam maxime minima, deserunt neque vitae "
          title="user"
          details="user is"
          detailStrong="avalible"
          icon={[{ icon: LightbulbIcon }]}
        />
      </ContainerRaw>
      <ContainerRaw>
        <AboutCard />
        <CardTilt
          cardName="User"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id minus nemo, numquam maxime minima, deserunt neque vitae "
          title="user"
          details="user is"
          detailStrong="avalible"
          icon={[{ icon: LightbulbIcon }]}
        />
      </ContainerRaw>
    </Container>
  );
}
