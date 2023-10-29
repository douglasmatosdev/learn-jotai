'use client'
import Link from 'next/link'
import styled from 'styled-components'

export default function Home(): JSX.Element {
    return (
        <MainStyled>
            <Container>
                <h1>Learn Jotai</h1>
                <UlStyled>
                    <li>
                        <Link href="/first">1. Share State Between React Components with Jotai useAtom</Link>
                    </li>
                    <li>
                        <Link href="/second">2. Derive State from a Jotai Atom in React</Link>
                    </li>
                    <li>
                        <Link href="/third">
                            3. Prevent Rerenders and Add Functionality with Jotai Write-only Atoms
                        </Link>
                    </li>
                    <li>
                        <Link href="/fourth">4. Structure Jotai Atoms and Add Functionality to a React App</Link>
                    </li>
                    <li>
                        <Link href="/fifth">5. Preserve State by Combining Multiple Jotai Atoms into One Atom</Link>
                    </li>
                </UlStyled>
            </Container>
        </MainStyled>
    )
}

const MainStyled = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #111827;
`

const Container = styled.header`
    width: 60vw;
    height: auto;
    padding: 2rem;
    background: #242d3c;
    border-radius: 4px;

    h1 {
        color: white;
        font-family: sans-serif;
        font-weight: 600;
    }
`

const UlStyled = styled.ul`
    margin-top: 2rem;

    li {
        margin-bottom: 1.5rem;
        & > a {
            color: #2563eb;
            font-weight: 500;
            font-size: 2rem;
            font-family: sans-serif;
        }
    }
`
