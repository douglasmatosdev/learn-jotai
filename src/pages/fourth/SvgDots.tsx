import { atom, useAtom } from 'jotai'

import { Point } from '@/types'

import { addShapeAtom } from './SvgShape'

const dotsAtom = atom<Point[]>([])

export const addDotAtom = atom(null, (_get, set, update: Point) => {
    set(dotsAtom, (prev: Point[]) => [...prev, update])
})

export const commitDotsAtom = atom(null, (get, set) => {
    set(addShapeAtom, get(dotsAtom))
    set(dotsAtom, [])
})

const SvgDots = (): JSX.Element => {
    const [dots] = useAtom(dotsAtom)

    return (
        <g>
            {dots.map(([x, y]: Point, index: number) => (
                <circle key={`${index}__${index * 2}__${index * y}`} cx={x} cy={y} r="2" fill="#aaa" />
            ))}
        </g>
    )
}

export default SvgDots
