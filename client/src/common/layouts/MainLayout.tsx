import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/common/components/header/Header';

export default function MainLayout() {
    return (
        <Container>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </Container>
    )
}

const Container = styled('div')`
max-width: 1140px;
padding: 20px;
margin: 0 auto;
`;

const Main = styled('main')``;
