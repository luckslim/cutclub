import styled, { keyframes } from "styled-components";
interface BubbleProps {
  $opacity: number;
  $left: number;
  $top: number;
  $scale: number;
  animation: ReturnType<typeof keyframes>;
  duration: number;
}

export const Bubble = styled.div<BubbleProps>`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  width: 40px;
  height: 40px;
  opacity: ${(props) => props.$opacity};
  left: ${(props) => props.$left}vw;
  top: ${(props) => props.$top}vh;
  transform: scale(${(props) => props.$scale});
  animation: ${(props) => props.animation} ${(props) => props.duration}s
    infinite;
`;
// Configurações
export const BUBBLES_TOTAL = 30;

// Função para gerar números aleatórios
export const random = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const createBubbleAnimation = () => {
  const x = random(-100, 100);
  const y = random(-100, 100);
  const scale = random(0.05, 2);

  return keyframes`
    0% {
      transform: translate(0vw, 0vh) scale(1);
    }
    50% {
      transform: translate(${x}vw, ${y}vh) scale(${scale});
    }
    100% {
      transform: translate(0vw, 0vh) scale(1);
    }
  `;
};

// Styled Components
export const Main = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(187, 147, 252, 0.8) 26%,
    rgba(148, 237, 255, 1) 50%
  );
`;

// Tipagem das props do Bubble
interface BubbleProps {
  opacity: number;
  left: number;
  top: number;
  scale: number;
  animation: ReturnType<typeof keyframes>;
  duration: number;
}



export const Credits = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 2px 15px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  z-index: 111;

  a {
    color: #fff;
    font-size: 11px;
    text-decoration: none;
    letter-spacing: 0.05em;
  }
`;
