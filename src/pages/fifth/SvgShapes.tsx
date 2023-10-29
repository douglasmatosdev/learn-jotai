import { atom, useAtom } from 'jotai'

import { Point, ShapeAtom } from '@/types'
import SvgShape, { createShapeAtom } from './SvgShape'

const shapeAtomsAtom = atom<ShapeAtom[]>([])

export const addShapeAtom = atom(null, (_get, set, update: Point[]) => {
    const shapeAtom = createShapeAtom(update)
    set(shapeAtomsAtom, prev => [...prev, shapeAtom])
})

const SvgShapes = (): JSX.Element => {
    const [shapeAtoms] = useAtom(shapeAtomsAtom)

    return (
        <g>
            {shapeAtoms.map((shapeAtom, index) => (
                <SvgShape key={`svg-shape__${index}`} shapeAtom={shapeAtom} />
            ))}
        </g>
    )
}

export default SvgShapes
