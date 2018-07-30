import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`

const MenuItems = styled.span`
  color: red;
  font-weight: bold;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`

const UserNav = () => {
  return (
    <NavContainer>
      <li>
        <StyledNavLink to="#">
          <MenuItems>Logo</MenuItems>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="#">
          <MenuItems>About</MenuItems>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="#">
          <MenuItems>Get Started</MenuItems>
        </StyledNavLink>
      </li>
    </NavContainer>
  )
}

export default UserNav
