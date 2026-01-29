import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["blue-700"]};
  div {
    height: 10vh;
  }
`;

/* Background data */
const BG_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";

const BG_WIDTH = "50px";
const BG_HEIGHT = "50px";

/* Animations */
const bgScrollingReverse = keyframes`
  100% {
    background-position: ${BG_WIDTH} ${BG_HEIGHT};
  }
`;

/* Main container */
export const Background = styled.div`
  min-height: 75vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #999;
  font-family: "Exo", ubuntu, "segoe ui", helvetica, arial, sans-serif;
  text-align: center;

  background: url(${BG_URL}) repeat 0 0;

  animation: ${bgScrollingReverse} 0.92s linear infinite;
`;

/* Text */
export const Title = styled.span`
  font-size: 8rem;
  font-weight: 100;
`;
