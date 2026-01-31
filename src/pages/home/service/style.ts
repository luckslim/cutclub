import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  min-height: 100%;
  gap: 1rem;
  box-sizing: border-box;
  align-items: stretch;
  background-color: #e5e5f7;
  background-image:
    linear-gradient(#444cf7 1px, transparent 1px),
    linear-gradient(to right, #444cf7 1px, #e5e5f7 1px);
  background-size: 30px 30px;
`;
export const ContainerRaw = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
`;
