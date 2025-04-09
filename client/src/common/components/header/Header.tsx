import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export default function Header() {
    return (
        <Wrapper>
            <Banner>
                <Title>TaskManager</Title>
            </Banner>
        </Wrapper>
    )
}

const Wrapper = styled('header')`
border-radius: ${borders.radius.medium};
overflow: hidden;
`;

const Banner = styled('div')`
height: 150px;
padding: 10px;
display: flex;
align-items: end;
background-color: ${colors.lightBlue};
`;

const Title = styled('h1')`
color: ${colors.whiteTotal};
font-size: ${fonts.sizes.title};
font-weight: ${fonts.weights.bold};
`;