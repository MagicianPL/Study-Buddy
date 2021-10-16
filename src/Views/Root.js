import React, { useState } from "react";
import { users } from "../Data/Users";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";
import Navigation from "../Components/Organisms/Navigation/Navigation.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./DashboardView";
import AddNewUserView from "./AddNewUserView";

export const UsersContext = React.createContext();

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Navigation />
          <UsersContext.Provider
            value={{
              usersList,
              deleteUser,
              handleAddUser,
            }}
          >
            <Switch>
              <Route path="/" exact>
                <DashboardView />
              </Route>
              <Route path="/add-user">
                <AddNewUserView />
              </Route>
            </Switch>
          </UsersContext.Provider>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
