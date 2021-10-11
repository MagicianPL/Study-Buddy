import React from "react";
import { users } from "../../Data/Users";
import UserItemList from "../UserItemList/UserItemList";

const UsersList = () => (
  <div>
    <ul>
      {users.map( userData => (
        <UserItemList userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
