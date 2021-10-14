import React from "react";
import { Wrapper } from "./UserItemList.styles";
import { StyledAverage } from "../../Atoms/StyledAverage/StyledAverage";
import UserInfo from "../../Atoms/UserInfo/UserInfo";
import Button from "../../Atoms/Button/Button";

const UserItemList = ({ deleteUser, userData: { average, name, attendance } }
) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <UserInfo name={name} attendance={attendance} />
    <Button
      onClick={() => {
        deleteUser(name);
      }}
    />
  </Wrapper>
);

export default UserItemList;
