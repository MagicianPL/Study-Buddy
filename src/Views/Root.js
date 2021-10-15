import React, { useState } from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import { users } from "../Data/Users";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";
import Navigation from "../Components/Organisms/Navigation/Navigation.styled";
import FormAddStudent from "../Components/Organisms/FormAddStudent/FormAddStudent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Root = () => {
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

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formStates.name,
      attendance: formStates.attendance,
      average: formStates.average,
    };

    setUsersList([newUser, ...usersList]);
    setFormStates({
      name: "",
      attendance: "",
      average: "",
    });
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <UsersList usersList={usersList} deleteUser={deleteUser} />
            </Route>
            <Route path="/add-user">
              <FormAddStudent
                formStates={formStates}
                handleInputChange={handleInputChange}
                handleAddUser={handleAddUser}
              />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
