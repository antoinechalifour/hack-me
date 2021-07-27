import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25%);
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;

  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;

  p {
    font-weight: bold;
  }
`;

const MenuItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1rem;

  a {
    color: inherit;
  }

  a:not(.active) {
    text-decoration: none;
  }
`;

export const NavBar = () => (
  <Header>
    <Nav>
      <p>Hack Me</p>

      <MenuItems>
        <li>
          <NavLink to="/desks">Desks</NavLink>
        </li>
        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li>
        <li>
          <NavLink to="/calendar">Calendar</NavLink>
        </li>
      </MenuItems>
    </Nav>
  </Header>
);
