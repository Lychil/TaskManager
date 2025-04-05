import styled from 'styled-components';

export default function TaskList() {
    return (
        <Wrapper>
            <List>
                {[...Array(30)].map((_, i) => (
                    <Item key={i}>Задача {i}</Item>
                ))}
            </List>
        </Wrapper>
    )
}
// ToDo: переделать стили под grid
const Wrapper = styled('div')``;

const List = styled('ul')`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Item = styled('li')``;
