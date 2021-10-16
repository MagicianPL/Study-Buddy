import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";
import Navigation from "../Components/Organisms/Navigation/Navigation.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./DashboardView";
import AddNewUserView from "./AddNewUserView";
import UsersProvider from "../Providers/UsersProvider";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Navigation />
          <UsersProvider>
            <Switch>
              <Route path="/" exact>
                <DashboardView />
              </Route>
              <Route path="/add-user">
                <AddNewUserView />
              </Route>
            </Switch>
          </UsersProvider>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
