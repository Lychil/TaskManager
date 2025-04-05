import styled from "styled-components";
import { INavList } from "@/common/components/navbar/types";
import { NavLink, useMatch } from "react-router-dom";
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants";
import homeImg from "@/common/images/svg/home.svg";
import tasksImg from "@/common/images/svg/tasks.svg";

const navList: INavList[] = [
    {
        title: "Главная",
        to: '/home',
        icon: homeImg
    },
    {
        title: "День",
        to: '/tasks/day',
        icon: tasksImg
    },
    {
        title: "Задачи",
        to: '/tasks/shedule',
        icon: tasksImg
    }
]

export default function Navbar() {
    return (
        <Wrapper>
            <NavPanel>
                <NavMenu>
                    {
                        navList.map(({ to, title, icon }, i) => (
                            <NavItem key={i} $isActive={!!useMatch(to)}>
                                <NavItemLink to={to}>
                                    <NavItemIcon title={title} src={icon} alt={title} />
                                    <NavItemTitle>{title}</NavItemTitle>
                                </NavItemLink>
                            </NavItem>
                        ))
                    }
                </NavMenu>
            </NavPanel>
        </Wrapper>
    )
}

const Wrapper = styled('div')`
padding: 5px;
`;

const NavPanel = styled('nav')``;

const NavMenu = styled('ul')`
display: flex;
column-gap: 20px;
`;

const NavItem = styled('li')<{ $isActive: boolean }>`
padding: 5px;
width: 60px;
aspect-ratio: 1;
text-align: center;
border-radius: ${borders.radius.medium};
background-color: ${props => props.$isActive && colors.lightGray};
transition: ${transitions.mediumTransition};

&:hover {
    background-color: ${colors.lightGray};
}
`;

const NavItemLink = styled(NavLink)``;

const NavItemIcon = styled('img')`
margin: 0 auto 4px;
width: 20px;
aspect-ratio: 1;
`;

const NavItemTitle = styled('p')`
font-size: ${fonts.sizes.small};
`;
