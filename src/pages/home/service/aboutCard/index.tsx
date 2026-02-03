import React, { useRef } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import { BookmarksIcon } from "@phosphor-icons/react";

import { Container, ContainerColumnLeft, ContainerColumnRight } from "./style";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

type Props = {
  plan: string;
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string[];
};

export default function AboutCard({
  plan,
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
}: Props) {
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

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // 👉 NOVO WRAPPER IGUAL AO CARD DE REFERÊNCIA
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        width: "100%",
      }}
    >
      {/* 👉 NOVA DIV DE PROFUNDIDADE */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(60px)",
        }}
      >
        {/* ⚠️ SEU COMPONENTE ORIGINAL – INTACTO */}
        <Container>
          <ContainerColumnLeft>
            <span>
              use<strong>{plan}</strong>
            </span>

            <h2>{leftTitle}</h2>

            <p>{leftContent}</p>

            <button>Começar</button>
          </ContainerColumnLeft>

          <ContainerColumnRight>
            <h2>
              {rightTitle}
              <BookmarksIcon weight="fill" color="blue" size={22} />
            </h2>
            {rightContent.map((i) => (
              <span>{i}</span>
            ))}
          </ContainerColumnRight>
        </Container>
      </div>
    </motion.div>
  );
}
