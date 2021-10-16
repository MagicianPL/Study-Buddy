import React, { useState } from "react";
import { users } from "../Data/Users";

export const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [usersList, setUsersList] = useState(users);

  const deleteUser = (userName) => {
    const filteredArr = usersList.filter((user) => user.name !== userName);
    console.log(filteredArr);
    setUsersList(filteredArr);
  };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsersList([newUser, ...usersList]);
  };

  return (
    <UsersContext.Provider
      value={{
        usersList,
        deleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
