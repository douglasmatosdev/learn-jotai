import { Atom } from 'jotai'

export type Point = [number, number]

export type ShapeAtom = Atom<{ path: string }>
