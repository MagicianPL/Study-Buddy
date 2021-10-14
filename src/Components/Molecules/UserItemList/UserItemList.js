import React from "react";
import styled from "styled-components";

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

const Average = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ average, theme }) =>
    average <= 3 ? theme.colors.error : average < 4 ? theme.colors.warning : theme.colors.success};
  color: white;
`;

const UserItemList = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average average={average}>{average}</Average>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

export default UserItemList;
