import React, { useState, useEffect } from "react";
import { users } from "../../../Data/Users";
import UserItemList from "../../Molecules/UserItemList/UserItemList";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = () => {
  const [usersList, setUsersList] = useState(users);

  const deleteUser = (userName) => {
    const filteredArr = usersList.filter((user) => user.name !== userName);

    setUsersList(filteredArr);
  };

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
