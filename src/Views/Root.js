import React, { useState } from "react";
import { users } from "../Data/Users";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";
import Navigation from "../Components/Organisms/Navigation/Navigation.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./DashboardView";
import AddNewUserView from "./AddNewUserView";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  min-height: 100vh;
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
    console.log(filteredArr);
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
              <DashboardView usersList={usersList} deleteUser={deleteUser} />
            </Route>
            <Route path="/add-user">
              <AddNewUserView formStates={formStates} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
