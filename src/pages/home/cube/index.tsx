import { CubeContainer, Face } from "./style";

export default function Cube() {
  return (
    <>
      <CubeContainer>
        <Face className="top" />
        <Face className="right" />
        <Face className="bottom" />
        <Face className="left" />
        <Face className="front" />
        <Face className="back" />
      </CubeContainer>
    </>
  );
}
