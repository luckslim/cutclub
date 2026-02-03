import CardTilt from "./tiltCard";
import { Container, ContainerRaw } from "./style";
import AboutCard from "./aboutCard";
import { TimerIcon } from "@phosphor-icons/react";
import userProfiler from "../../../assets/userProfiller.png";
import storeProfiler from "../../../assets/store.png";
import employeeProfile from "../../../assets/employee.png";

export default function Service() {
  return (
    <Container>
      <div></div>
      <ContainerRaw>
        <AboutCard
          plan="grátis"
          leftTitle="Usuários"
          leftContent="Agende com facilidade com nosso algorítimo de busca."
          rightContent={[
            "- Cadastro rápido",
            "- Rápido acesso",
            "- Lojas por região",
            "- Funcionários Disponíveis",
          ]}
          rightTitle="Grátis para clientes"
        />
        <CardTilt
          step={[
            "crie seu usuário",
            "Escolha uma Loja",
            "Escolha um fucionário",
            "Faça o Agendamento",
          ]}
          urlImage={userProfiler}
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
        <AboutCard
          plan="por Assinatura"
          leftTitle="Lojas"
          leftContent="Crie sua loja e receba todos os seus clientes aqui."
          rightContent={[
            "- Gerencie sua loja",
            "- Gerencie funcionários",
            "- Gerencie agendamentos",
            "- Controle tudo com um click",
          ]}
          rightTitle="Assinatura para Lojas"
        />
        <CardTilt
          step={[
            "crie sua Loja",
            "Aceite Pedidos de Trabalho",
            "Gerencie seu Estabelecimento",
          ]}
          urlImage={storeProfiler}
          userName="Big Store"
          cardName="Modo Loja"
          content="Crie sua loja e gerencie todo o seu estabelecimento com facilidade, organize seus agendamentos, acompanhe clientes e tenha controle completo do seu negócio em um só lugar com praticidade."
          title="Seja bem-vindo!"
          details="Não perca "
          detailStrong="Tempo"
          icon={[{ icon: TimerIcon }]}
        />
      </ContainerRaw>
      <ContainerRaw>
        <AboutCard
          plan="grátis"
          leftTitle="Funcionários"
          leftContent="Tenha uma experiência real de agendamento na web."
          rightContent={[
            "- Cadastro rápido",
            "- Rápido acesso",
            "- Lojas por região",
            "- Sistema de candidatura",
          ]}
          rightTitle="Grátis para clientes"
        />
        <CardTilt
          step={[
            "crie seu usuário",
            "Escolha uma Loja",
            "Faça uma candidatura",
            "Trabalhe com a loja",
          ]}
          urlImage={employeeProfile}
          userName="Lucas SL"
          cardName="Modo Funcionário"
          content="Seja funcionário de qualquer estabelecimento, acumule score ao atender clientes, receba avaliações, organize agenda, controle horários e gerencie seus agendamentos com praticidade e autonomia."
          title="Seja bem-vindo!"
          details="Não perca "
          detailStrong="Tempo"
          icon={[{ icon: TimerIcon }]}
        />
      </ContainerRaw>
    </Container>
  );
}
