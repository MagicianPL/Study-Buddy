import React, {useContext} from "react";
import { UsersContext } from "../../../Views/Root";
import UserItemList from "../../Molecules/UserItemList/UserItemList";
import { Wrapper, StyledList } from "./UsersList.styles";

const UsersList = () => {
  const context = useContext(UsersContext);

  return (
    <Wrapper>
      <h1>Students List</h1>
      <StyledList>
        {context.usersList.map((userData, index) => (
          <UserItemList
            userData={userData}
            key={userData.name}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
