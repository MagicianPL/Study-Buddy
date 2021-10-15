import React from "react";
import styled from "styled-components";
import { LogoStyled } from "../../Atoms/Logo/LogoStyled";

const Nav = styled.nav`
  height: 100%;
  max-width: 110px;
  border-right: 1px solid #dfe2e8;
  background-color: #e5e5e5;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 24px 0 15px;
    font-weight: bold;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  li {
    margin-bottom: 20px;
    color: #737c8e;
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
        <li>Home</li>
        <li>Add Student</li>
      </ul>
    </Nav>
  );
};

export default Navigation;
