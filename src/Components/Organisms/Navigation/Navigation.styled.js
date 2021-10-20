import React from "react";
import styled from "styled-components";
import { LogoStyled } from "../../Atoms/Logo/LogoStyled";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  position: relative;

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -24px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.active {
    &::after {
      opacity: 1;
    }
  }
`;

const Nav = styled.nav`
  align-self: stretch;
  width: 150px;
  max-width: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  background-color: #e5e5e5;
  grid-row: 1 / 3;
  grid-column: 1 / 2;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 24px 0 30px;
    font-weight: bold;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  li {
    margin-bottom: 20px;
    color: #737c8e;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  li:hover {
    cursor: pointer;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <LogoStyled>
        Study
        <br />
        Buddy
      </LogoStyled>
      <ul>
        <li>
          <StyledLink to="/" exact>
            Dashboard
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/add-user">Add User</StyledLink>
        </li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </Nav>
  );
};

export default Navigation;
