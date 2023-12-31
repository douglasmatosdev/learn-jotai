// https://egghead.io/lessons/react-share-state-between-react-components-with-jotai-useatom
// import { useState } from "react";
import { atom, useAtom } from 'jotai'
import Link from 'next/link'
import styled from 'styled-components'

const countAtom = atom(0)
const count2Atom = countAtom

const Counter1 = (): JSX.Element => {
    const [count, setCount] = useAtom(countAtom)

    return (
        <div>
            {count}
            <button onClick={() => setCount(c => c + 1)}>+1</button>
        </div>
    )
}

const Counter2 = (): JSX.Element => {
    const [count, setCount] = useAtom(count2Atom)

    return (
        <div>
            {count}
            <button onClick={() => setCount(c => c + 1)}>+1</button>
        </div>
    )
}

export default function First(): JSX.Element {
    return (
        <Container>
            <Link href="/">HOME</Link>
            <Counter1 />
            <Counter2 />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
