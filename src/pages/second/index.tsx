// https://egghead.io/lessons/react-derive-state-from-a-jotai-atom-in-react

import { ActiveLink } from "@/components/ActiveLink";
import { atom, useAtom } from "jotai";
import styled from "styled-components";

type Point = [number, number];

const dotsAtom = atom<Point[]>([]);
const numberOfDotsAtom = atom((get) => get(dotsAtom).length);

const SvgDots = () => {
  const [dots] = useAtom(dotsAtom);

  return (
    <g>
      {dots.map(([x, y], index) => (
        <circle key={`${index}__${x}__${y}`} cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
};

const SvgRoot = () => {
  const [, setDots] = useAtom(dotsAtom);
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseMove={(e) => {
        const p: Point = [e.clientX, e.clientY];
        setDots((prev) => [...prev, p]);
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <SvgDots />
    </svg>
  );
};

const Stats = () => {
  const [dots] = useAtom(dotsAtom);
  const [numberOfDots] = useAtom(numberOfDotsAtom);
  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
};

export default function Second() {
  return (
    <Container>
      <ActiveLink href="/">
        HOME
      </ActiveLink>
      <SvgRoot />
      <Stats />
    </Container>
  );
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`