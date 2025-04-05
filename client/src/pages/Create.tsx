import TaskCreateForm from '@/common/components/tasks/TaskCreateForm';
import { fonts } from '@/common/styles/styleConstants';
import styled from 'styled-components'

export default function Create() {
    return (
        <Wrapper>
            <Title>Создайте задачу</Title>
            <TaskCreateForm />
        </Wrapper>
    )
}

const Wrapper = styled('div')``;

const Title = styled('h2')`
text-align: center;
margin-bottom: 10px;
font-size: ${fonts.sizes.subtitle};
font-weight: ${fonts.weights.semiBold};
`;
