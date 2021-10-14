import React from "react";
import { users } from "../../../Data/Users";
import UserItemList from "../../Molecules/UserItemList/UserItemList";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UserItemList userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
