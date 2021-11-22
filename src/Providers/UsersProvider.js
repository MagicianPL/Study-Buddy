import React, { useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  //list of students from file
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("/students")
      .then(({ data }) => setUsersList(data.students))
      .catch((err) => console.log(err));
  }, []);

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
