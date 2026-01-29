import { ArrowRightIcon } from "@phosphor-icons/react";
import Cube from "../cube";
import { Container, Content, Section, Wave, WaveSpan } from "./style";

export default function Wavy() {
  return (
    <Section>
      <Wave>
        <WaveSpan $variant={1} />
        <WaveSpan $variant={2} />
        <WaveSpan $variant={3} />
      </Wave>

      <Container>
        <a href="">Serviços</a>
        <a href="">Assinatura</a>
        <a href="">
          Acessar
          <ArrowRightIcon size={15} />
        </a>
      </Container>
      <Cube />
      <Content>
        <h2>Agendamento simples e rápido.</h2>
        <p>
          Com poucos toques, o usuário encontra serviços, escolhe horários
          disponíveis e realiza agendamentos de forma rápida e organizada,
          enquanto profissionais e lojas gerenciam sua rotina com eficiência,
          controle e praticidade.
        </p>
        <button>Saiba Mais</button>
      </Content>
    </Section>
  );
}
