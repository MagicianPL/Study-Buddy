import React from "react";
import styled from "styled-components";
import { LogoStyled } from "../../Atoms/Logo/LogoStyled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Nav = styled.nav`
  align-self: stretch;
  width: 150px;
  max-width: 100%;
  border-right: 1px solid #dfe2e8;
  background-color: #e5e5e5;

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
          <StyledLink to="/">Dashboard</StyledLink>
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
