import { NavLink } from "react-router-dom"
import { Outlet, } from "react-router-dom"
import styled from "styled-components"

export default function NavBar() {
    return <nav>
        <List>
            <Item><NavLink to={'/'} >HOME</NavLink></Item>
            <Item><NavLink to={'/editores'} >EDITORES</NavLink></Item>
            <Item><NavLink to={'/posts/criar'} >NOVO POST</NavLink></Item>
        </List>
        <Outlet />
    </nav>
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
`

const Item = styled.li`
    text-transform: lowercase;
    font-size: 18px;
    a{
        text-decoration: none;
        color: #274060;
        
        &.active{
            color: #09f;
    }
}
`