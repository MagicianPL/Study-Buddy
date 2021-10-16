import React from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";

const DashboardView = ({ usersList, deleteUser }) => {
  return <UsersList usersList={usersList} deleteUser={deleteUser} />;
};

export default DashboardView;
