import React from "react";
import UserItemList from "../../Molecules/UserItemList/UserItemList";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = ({ usersList = [] }) => {
  return (
    <Wrapper>
      <h1>Students List</h1>
      <StyledList>
        {usersList.length
          ? usersList.map((userData, index) => (
              <UserItemList userData={userData} key={userData.name} />
            ))
          : null}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
