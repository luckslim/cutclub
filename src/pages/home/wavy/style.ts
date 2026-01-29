import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;


export const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 4rem;
  gap: 2rem;

  z-index: 2;

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme["slate-50"]};
    font-weight: 500;
    text-decoration: none;
    position: relative;

    &:hover {
      opacity: 0.8;
    }
  }
`;


export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
`;

export const Wave = styled.div`
  position: absolute;
  inset: 0;
  background: #4973ff;
  box-shadow: none;
`;

export const WaveSpan = styled.span<{ $variant: number }>`
  position: absolute;
  width: 325vh;
  height: 325vh;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);

  ${({ $variant }) => {
    switch ($variant) {
      case 1:
        return css`
          border-radius: 45%;
          background: rgba(20, 20, 20, 1);
          animation: ${rotate} 5s linear infinite;
        `;

      case 2:
        return css`
          border-radius: 40%;
          background: rgba(20, 20, 20, 0.5);
          animation: ${rotate} 10s linear infinite;
        `;

      case 3:
        return css`
          border-radius: 42.5%;
          background: rgba(20, 20, 20, 0.5);
          animation: ${rotate} 15s linear infinite;
        `;

      default:
        return null;
    }
  }}
`;

export const Content = styled.div`
  display: flex;
  justify-items: center;
  align-items: start;
  flex-direction: column;
  padding: 6rem;
  gap: 1rem;
  position: relative;
  z-index: 1;
  h2 {
    font-size: 3rem;
    color: ${(props) => props.theme["slate-50"]};
  }
  p {
    width: 50%;
    color: ${(props) => props.theme["slate-300"]};
    &:hover {
      color: ${props=>props.theme["slate-50"]};
    }
  }
  button {
    background-color: ${(props) => props.theme["blue-500"]};
    padding: 0.8rem;
    color: ${(props) => props.theme["slate-50"]};
    font-size: 1rem;
    font-weight: 800;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: calc(80%);
    }
  }
`;
