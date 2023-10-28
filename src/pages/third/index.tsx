// https://egghead.io/lessons/react-prevent-rerenders-and-add-functionality-with-jotai-write-only-atoms
import { useEffect, useRef } from "react";
import { atom, useAtom } from "jotai";
import { ActiveLink } from "@/components/ActiveLink";
import styled from "styled-components";

type Point = [number, number];

const dotsAtom = atom<Point[]>([]);

const drawingAtom = atom(false);

const handleMouseDownAtom = atom(null, (get, set) => {
  set(drawingAtom, true);
});

const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
});

const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtom)) {
    set(dotsAtom, (prev) => [...prev, update]);
  }
});

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

const useCommitCount = () => {
  const commitCountRef = useRef(0);
  useEffect(() => {
    commitCountRef.current += 1;
  });

  return commitCountRef.current;
};

const SvgRoot = () => {
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
  const [, handleMouseDown] = useAtom(handleMouseDownAtom);
  const [, handleMouseUp] = useAtom(handleMouseUpAtom);

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={(e) => {
        handleMouseMove([e.clientX, e.clientY]);
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <text x="3" y="12" font-size="12px">
        Commits: {useCommitCount()}
      </text>
      <SvgDots />
    </svg>
  );
};

export default function Third() {
  return (
    <Container>
      <ActiveLink href="/">
        HOME
      </ActiveLink>
      <div>
        <SvgRoot />
      </div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
