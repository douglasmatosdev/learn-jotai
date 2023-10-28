import { ActiveLink } from "@/components/ActiveLink";
import { SvgRoot } from "@/components/SvgRoot";
import styled from "styled-components";

export default function Fourth() {
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