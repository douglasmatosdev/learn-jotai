import { atom, useAtom } from 'jotai'

import { Point, ShapeAtom } from '@/types'

const pointsToPath = (points: Point[]): string => {
    let d = ''
    points.forEach(point => {
        if (d) {
            d += ` L ${point[0]} ${point[1]}`
        } else {
            d = ` M ${point[0]} ${point[1]}`
        }
    })

    return d
}

export const createShapeAtom = (points: Point[]): ShapeAtom => atom({ path: pointsToPath(points) })

export const SvgShape = ({ shapeAtom }: { shapeAtom: ShapeAtom }): JSX.Element => {
    const [shape] = useAtom(shapeAtom)

    return (
        <g>
            <path d={shape.path} fill="none" stroke="black" strokeWidth="3" />
        </g>
    )
}
