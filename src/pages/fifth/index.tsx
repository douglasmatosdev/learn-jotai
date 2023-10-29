import SvgRoot from './SvgRoot'
import styled from 'styled-components'
import Link from 'next/link'

export default function Fourth(): JSX.Element {
    return (
        <Container>
            <Link href="/">HOME</Link>
            <div>
                <SvgRoot />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
