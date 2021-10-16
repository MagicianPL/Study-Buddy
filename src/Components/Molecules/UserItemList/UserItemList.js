import React, {useContext} from "react";
import { Wrapper } from "./UserItemList.styles";
import { StyledAverage } from "../../Atoms/StyledAverage/StyledAverage";
import UserInfo from "../../Atoms/UserInfo/UserInfo";
import Button from "../../Atoms/DeleteButton/DeleteButton";
import { UsersContext } from "../../../Views/Root";

const UserItemList = ({userData: { average, name, attendance }}) => {
  const context = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <UserInfo name={name} attendance={attendance} />
      <Button
        onClick={() => {
          context.deleteUser(name);
        }}
      />
    </Wrapper>
  );
};

export default UserItemList;
