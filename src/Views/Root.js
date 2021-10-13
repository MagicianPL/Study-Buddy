import React from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import styled from "styled-components";
import { GlobalStyles } from "../Assets/styles/GlobalStyles";

const Wrapper = styled.div`
  background-color: #f7f8fa;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Root = () => (
  <>
    <GlobalStyles />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </>
);

export default Root;
