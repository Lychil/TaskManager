import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/common/components/header/Header';
import Navbar from '@/common/components/navbar/Navbar';

export default function MainLayout() {
    return (
        <Container>
            <Header />
            <Navbar />
            <Main>
                <Outlet />
            </Main>
        </Container>
    )
}

const Container = styled('div')`
display: flex;
flex-direction: column;
row-gap: 10px;
max-width: 1140px;
padding: 20px;
margin: 0 auto;
`;

const Main = styled('main')``;
