import CardTilt from "./tiltCard";
import { Container, ContainerRaw } from "./style";
import AboutCard from "./aboutCard";
import { TimerIcon } from "@phosphor-icons/react";

export default function Service() {
  return (
    <Container>
      <div></div>
      <ContainerRaw>
        <AboutCard />
        <CardTilt
          userName="Lucas SL"
          cardName="Modo usuário"
          content="Fique conectado com seus estabelecimentos favoritos e acompanhe novidades e serviços em um só lugar.
          Veja a disponibilidade dos profissionais em tempo real e agende com praticidade e rapidez. "
          title="Seja bem-vindo!"
          details="Não perca "
          detailStrong="Tempo"
          icon={[{ icon: TimerIcon }]}
        />
      </ContainerRaw>
      <ContainerRaw>
        <AboutCard />
        <CardTilt
          userName="Lucas SL"
          cardName="Modo usuário"
          content="Fique conectado com seus estabelecimentos favoritos e acompanhe novidades e serviços em um só lugar.
          Veja a disponibilidade dos profissionais em tempo real e agende com praticidade e rapidez. "
          title="Seja bem-vindo!"
          details="Não perca "
          detailStrong="Tempo"
          icon={[{ icon: TimerIcon }]}
        />
      </ContainerRaw>
      <ContainerRaw>
        <AboutCard />
        <CardTilt
          userName="Lucas SL"
          cardName="Modo usuário"
          content="Fique conectado com seus estabelecimentos favoritos e acompanhe novidades e serviços em um só lugar.
          Veja a disponibilidade dos profissionais em tempo real e agende com praticidade e rapidez. "
          title="Seja bem-vindo!"
          details="Não perca "
          detailStrong="Tempo"
          icon={[{ icon: TimerIcon }]}
        />
      </ContainerRaw>
    </Container>
  );
}
