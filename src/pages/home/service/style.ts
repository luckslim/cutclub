import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  background-color: #e5e5f7;
  background-image:
    linear-gradient(#444cf7 1px, transparent 1px),
    linear-gradient(to right, #444cf7 1px, #e5e5f7 1px);
  background-size: 30px 30px;

  border-top: 80px solid ${(props) => props.theme["blue-700"]};
  @media screen and (max-width: 700px) {
    display: flex;
    gap: 6rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ContainerRaw = styled.div`
  margin-top: -120px;
  display: flex;
  padding: 1rem;
  align-items: center; /* Força os filhos a terem a mesma altura */
  width: 100%;
  @media screen and (max-width: 700px) {
    display: grid;
  }
`;
