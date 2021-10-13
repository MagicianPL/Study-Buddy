import React from "react";
import UsersList from "../Components/Organisms/UsersList/UsersList";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7f8fa;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Root = () => (
  <Wrapper>
    <UsersList />
  </Wrapper>
);

export default Root;
