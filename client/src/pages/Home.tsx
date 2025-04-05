import HomeTaskList from '@/common/components/home/HomeTaskList';
import { fonts } from '@/common/styles/styleConstants';
import styled from 'styled-components';

export default function Home() {
    return (
        <Wrapper>
            <Title>Задачи к которым нужно приступить</Title>
            <HomeTaskList />
        </Wrapper>
    )
}

const Wrapper = styled('div')``;

const Title = styled('h2')`
margin-bottom: 10px;
text-align: center;
font-size: ${fonts.sizes.subtitle};
font-weight: ${fonts.weights.bold};
`;