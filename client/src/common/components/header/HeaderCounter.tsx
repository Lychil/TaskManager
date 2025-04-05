import { colors } from '@/common/styles/styleConstants';
import styled from 'styled-components';

const counterList = [
    {
        id: 100,
        title: "Сегодня",
        value: 10
    },
    {
        id: 101,
        title: "Неделя",
        value: 50,
    },
    {
        id: 102,
        title: "Месяц",
        value: 200,
    }
]

export default function HeaderCounter() {
    return (
        <Wrapper>
            <Inner>
                {counterList.map((elem, _) => (
                    <Counter>
                        <CounterTitle>{elem.title}</CounterTitle>
                        <CounterValue>{elem.value}</CounterValue>
                    </Counter>
                ))}
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
padding: 20px;
background-color: ${colors.lightGray};
`;

const Inner = styled('div')`
display: flex;
column-gap: 20px;
`;

const Counter = styled('div')``;

const CounterValue = styled('p')``;

const CounterTitle = styled('p')``;

