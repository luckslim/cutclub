import React, { useRef } from "react";
import { useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { BookmarksIcon, LockIcon, MapPinIcon, MoneyIcon, NotebookIcon } from "@phosphor-icons/react";

import { Container, ContainerColumnLeft, ContainerColumnRight } from "./style";

const ROTATION_RANGE = 32.5;

export default function AboutCard() {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg) 
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    // Posição do mouse normalizada entre -0.5 e 0.5
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    // Inverte o eixo X para o comportamento natural
    const rX = offsetY * -ROTATION_RANGE;
    const rY = offsetX * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Container
      ref={ref}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ContainerColumnLeft>
        <span>
          use<strong>gratis</strong>
        </span>
        <h2>Usuários</h2>
        <p>
          Faça agendamentos com facilidade e encontre os melhores serviços perto
          de você através do nosso sistema de busca por GPS. Acompanhe os
          trabalhos do seu estabelecimento favorito, como barbearias, spas,
          estúdios de tatuagem e muito mais. Explore perfis, avaliações e
          portfólios para escolher com segurança. Tenha controle dos seus
          horários de forma prática e organizada. E o melhor: para usuários,
          tudo isso é totalmente gratuito.
        </p>
        <button>Começar</button>
      </ContainerColumnLeft>

      <ContainerColumnRight>
        <h2>
          Aproveite gratuitamente{" "}
          <BookmarksIcon weight="fill" color="blue" size={32} />
        </h2>
        <span>
          Cadastro<strong>Seguro</strong> <LockIcon size={32} weight="fill" />{" "}
        </span>
        <span>
          Facil <strong>Agendamento</strong>
          <NotebookIcon size={32} weight="fill" />
        </span>
        <span>
          Encontre <strong>lojas</strong> em sua região <MapPinIcon size={32} weight="fill" />
        </span>
        <span>
          Pagamento <strong>rápido e seguro</strong> <MoneyIcon size={32} weight="fill" />
        </span>
      </ContainerColumnRight>
    </Container>
  );
}
