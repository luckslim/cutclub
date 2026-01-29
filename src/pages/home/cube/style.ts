import styled, { keyframes } from "styled-components";

const SIZE = 300;
const HALF = SIZE / 2;
const DEPTH = SIZE / 4;

const spin = keyframes`
  0% {
    transform: rotateX(-20deg) rotateY(20deg);
  }
  100% {
    transform: rotateX(-20deg) rotateY(380deg);
  }
`;

export const CubeContainer = styled.div`
  position: absolute;
  width: ${SIZE}px;
  height: ${SIZE}px;

  top: 50%;
  left: 50%;
  margin-left: -${HALF}px;
  margin-top: -${HALF}px;

  transform-style: preserve-3d;
  animation: ${spin} 6s linear infinite;
`;

export const Face = styled.div`
  position: absolute;
  width: ${SIZE}px;
  height: ${SIZE}px;

  border: 1px solid ${props=>props.theme["blue-500"]};
  background-color: #181818;

  text-align: center;
  line-height: ${SIZE}px;
  font-size: 42px;

  mix-blend-mode: contrast;

  &.top {
    transform: rotateX(90deg);
    margin-top: -${DEPTH}px;
  }

  &.right {
    transform: rotateY(90deg);
    margin-left: ${DEPTH}px;
  }

  &.bottom {
    transform: rotateX(-90deg);
    margin-top: ${DEPTH}px;
  }

  &.left {
    transform: rotateY(-90deg);
    margin-left: -${DEPTH}px;
  }

  &.front {
    transform: translateZ(${DEPTH}px);
  }

  &.back {
    transform: translateZ(-${DEPTH}px) rotateX(180deg);
  }
`;
