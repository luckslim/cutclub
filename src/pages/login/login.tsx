import {
  Bubble,
  BUBBLES_TOTAL,
  createBubbleAnimation,
  Credits,
  Main
} from "./style";

const Bubbles = () => {
  const bubbles = Array.from({ length: BUBBLES_TOTAL }).map((_, i) => {
    const animation = createBubbleAnimation();
    const duration = 30 + i * 0.02;

    return (
      <Bubble
        key={i}
        $opacity={Math.random()}
        $left={Math.random() * 100}
        $top={Math.random() * 100}
        $scale={Math.random() * 1.5 + 0.5}
        animation={animation}
        duration={duration}
      />
    );
  });

  return (
    <Main>
      {bubbles}
      <Credits>
        <a href="https://codepen.io/marko-zub/" target="_blank">
          My other codepens
        </a>
      </Credits>
    </Main>
  );
};

export default Bubbles;
