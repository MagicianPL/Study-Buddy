import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & p {
    color: #737c8e;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
  }

  & p:first-child {
    margin-top: 33px;
    margin-right: 14px;
  }

  & p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: normal;
    margin-bottom: 33px;
  }
`;

const UserInfo = ({ name, attendance }) => (
  <Wrapper>
    <p>{name}</p>
    <p>attendance: {attendance}</p>
  </Wrapper>
);

export default UserInfo;
