import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: system-ui, sans-serif;
  @media screen and (max-width: 700px) {
    overflow: scroll;
  }
`;

export const Box = styled.div`
  background: #0e0e0e;
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
  color: ${(props) => props.theme["slate-950"]};
  border: 1px solid ${(props) => props.theme["slate-950"]};
  padding: 10px 16px;
  border-radius: 12px;
  white-space: nowrap;
`;

export const Arrow = styled.div`
  width: 24px;
  height: 2px;
  background: ${(props) => props.theme["slate-400"]};
  position: relative;
`;
