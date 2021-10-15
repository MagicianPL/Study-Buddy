import React, { useState, useEffect } from "react";
import { users } from "../../../Data/Users";
import UserItemList from "../../Molecules/UserItemList/UserItemList";
import { Wrapper, StyledList } from "./UsersList.styles";
import FormField from "../../Molecules/FormField/FormField";
import { Button } from "../../Atoms/Button/Button.styled";

const UsersList = () => {
  const [usersList, setUsersList] = useState(users);
  const [formStates, setFormStates] = useState({
    name: "",
    attendance: "",
    average: "",
  });

  const deleteUser = (userName) => {
    const filteredArr = usersList.filter((user) => user.name !== userName);

    setUsersList(filteredArr);
  };

  const handleInputChange = (e) => {
    setFormStates({
      ...formStates,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Wrapper>
        <h1>Add Student</h1>
        <FormField
          label="Name"
          name="name"
          id="name"
          value={formStates.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Attendance"
          name="attendance"
          id="attendance"
          value={formStates.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Average"
          name="average"
          id="average"
          value={formStates.average}
          onChange={handleInputChange}
        />
        <Button>ADD</Button>
      </Wrapper>
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
    </>
  );
};

export default UsersList;
