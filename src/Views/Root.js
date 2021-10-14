import React from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";
import { theme } from "../Assets/styles/theme";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
