import React from "react";
import {Wrapper} from "./UserItemList.styles"
import { StyledAverage } from "../../Atoms/StyledAverage/StyledAverage";
import UserInfo from "../../Atoms/UserInfo/UserInfo";
import Button from "../../Atoms/Button/Button";



const UserItemList = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <UserInfo name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

export default UserItemList;
