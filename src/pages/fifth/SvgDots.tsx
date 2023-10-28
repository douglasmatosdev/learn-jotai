import { atom, useAtom } from 'jotai'

import { Point } from '@/types'

import { addShapeAtom } from './SvgShapes'

const dotsAtom = atom<Point[]>([])

export const addDotAtom = atom(null, (_get, set, update: Point): void => {
    set(dotsAtom, (prev: Point[]) => [...prev, update])
})

export const commitDotsAtom = atom(null, (get, set): void => {
    set(addShapeAtom, get(dotsAtom))
    set(dotsAtom, [])
})

export const SvgDots = (): JSX.Element => {
    const [dots] = useAtom(dotsAtom)

    return (
        <g>
            {dots.map(([x, y]: Point, index: number) => (
                <circle key={`svg-dots__${index}_${index}_${index}`} cx={x} cy={y} r="2" fill="#aaa" />
            ))}
        </g>
    )
}
