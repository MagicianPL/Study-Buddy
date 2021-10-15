import React from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";
import Navigation from "../Components/Organisms/Navigation/Navigation.styled";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <Navigation />
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
