import React from "react";
import styled from "styled-components";
import { StyledAverage } from "../../Atoms/StyledAverage/StyledAverage";
import UserInfo from "../../Atoms/UserInfo/UserInfo";
import Button from "../../Atoms/Button/Button";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const UserItemList = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <UserInfo name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

export default UserItemList;
