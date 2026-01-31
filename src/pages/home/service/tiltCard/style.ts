import styled from "styled-components";
import { motion } from "framer-motion";

export const PageWrapper = styled.div`
  display: grid;
  place-content: center;
  padding: 3rem 1rem;
`;

export const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100%;
  /* Removido height fixo para permitir expansão */
  border-radius: 1rem;
  transform-style: preserve-3d;
  cursor: pointer;

  /* Adicionamos padding aqui para substituir o 'inset' do CardInner */
  padding: 1rem;
`;

export const CardInner = styled.div`
  /* Mudamos para relative para que o Card (pai) consiga calcular a altura total */
  position: relative;

  transform-style: preserve-3d;
  transform: translateZ(75px);
`;

export const Container = styled.div`
  /* Removido height fixo */
  width: auto;
  padding: 2px;
  background-color: ${(props) => props.theme["slate-50"]};
  display: grid;
  align-items: center;
  justify-content: center;
  align-content: center;

  border: 1px solid ${(props) => props.theme["slate-950"]};
  border-radius: 4px;

  /* Mantemos o overflow hidden apenas se quiser que o Title 
     não escape das bordas arredondadas do container */
  overflow: hidden;
  box-sizing: border-box;
`;
export const Title = styled.div`
  background-color: ${(props) => props.theme["slate-950"]};
  color: ${(props) => props.theme["slate-50"]};

  padding: 5px;

  font-size: 1rem;
  font-weight: 900;

  width: 100%;
  box-sizing: border-box;
`;

export const Body = styled.div`
  display: grid;
  gap: 8px;
  padding: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: ${(props) => props.theme["slate-600"]};
  width: 100%;
  box-sizing: border-box;
  p {
    display: flex;
    gap: 3px;
  }
  span {
    
    img {
      width: 50px;
      border-radius: 8px;
    }
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px dashed ${(props) => props.theme["slate-400"]};
`;
