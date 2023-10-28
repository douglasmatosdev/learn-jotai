import { ActiveLink } from "@/common/ActiveLink";
import { SvgRoot } from "./SvgRoot";
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