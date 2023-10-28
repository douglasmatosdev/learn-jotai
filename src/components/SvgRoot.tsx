import { atom, useAtom } from "jotai";
import { Point } from "@/types";
import { SvgShape } from "./SvgShape";
import { addDotAtom, SvgDots, commitDotsAtom } from "./SvgDots";

const drawingAtom = atom(false);

const handleMouseDownAtom = atom(null, (get, set) => {
  set(drawingAtom, true);
});

const handleMouseUpAtom = atom(null, (get, set) => {
  set(drawingAtom, false);
  set(commitDotsAtom, null);
});

const handleMouseMoveAtom = atom(null, (get, set, update: Point) => {
  if (get(drawingAtom)) {
    set(addDotAtom, update);
  }
});

export const SvgRoot = () => {
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
      <SvgShape />
      <SvgDots />
    </svg>
  );
};
