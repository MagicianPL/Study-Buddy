import React from "react";
import UserItemList from "../../Molecules/UserItemList/UserItemList";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = ({ usersList, deleteUser }) => {
  return (
    <Wrapper>
      <h1>Students List</h1>
      <StyledList>
        {usersList.map((userData, index) => (
          <UserItemList
            userData={userData}
            deleteUser={deleteUser}
            key={userData.name}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
