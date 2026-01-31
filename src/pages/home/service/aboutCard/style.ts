import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  background-color: ${(props) => props.theme["slate-50"]};
  border: 1px solid ${(props) => props.theme["slate-950"]};
  border-radius: 4px;
  cursor: pointer;

  transform-style: preserve-3d;
`;
export const ContainerColumnLeft = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
  padding: 1rem;
  width: 50%;
  span {
    color: ${(props) => props.theme["slate-500"]};
    display: flex;
    align-items: center;
    gap: 1rem;
    strong {
      background-color: ${(props) => props.theme["slate-950"]};
      color: ${(props) => props.theme["slate-50"]};
      padding: 10px;
      border-bottom-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
  h2 {
    color: ${(props) => props.theme["slate-950"]};
  }
  button {
    background-color: ${(props) => props.theme["slate-950"]};
    color: ${(props) => props.theme["slate-50"]};
    border: none;
    width: 50%;
    border-radius: 4px;
    padding: 1rem;
    font-weight: 800;
    cursor: pointer;
    &:hover {
       background-color: ${props=>props.theme["blue-500"]};
    }
  }
`;
export const ContainerColumnRight = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
  justify-content: start;
  padding: 1rem;
  background-color: #ffffff;
  opacity: 0.4;
  background-size: 9px 9px;
  background-image: repeating-linear-gradient(
    45deg,
    #ababab 0,
    #ababab 0.9px,
    #ffffff 0,
    #ffffff 50%
  );
  h2 {
    color: ${(props) => props.theme["slate-950"]};
    display: flex;
    align-items: center;
  }
  span {
    color: ${(props) => props.theme["slate-950"]};
    display: flex;
    gap: 1rem;
    align-items: center;
  }

`;
