import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";
import Navigation from "../Components/Organisms/Navigation/Navigation.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./DashboardView";
import AddNewUserView from "./AddNewUserView";
import UsersProvider from "../Providers/UsersProvider";

const SearchBar = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const News = styled.div`
  grid-column: 3/3;
  grid-row: 1/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Navigation />
          <SearchBar />
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
          <News><p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          </News>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
