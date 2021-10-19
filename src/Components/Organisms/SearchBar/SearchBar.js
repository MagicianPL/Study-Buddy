import React from "react";
import styled from "styled-components";
import { Input } from "../../Atoms/Input/Input.styled";

const SearchBarSection = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 24px 38px;
  display: flex;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  ${Input} {
    width: 350px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    border: 2px solid ${({ theme }) => theme.colors.darkPurple};
    border: none;
    padding: 0 40px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const WrapperStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 45px;
`;

const SearchBar = () => {
  return (
    <SearchBarSection>
      <WrapperStatus>
        <p>Logged as:</p>
        <p>
          <strong>TEACHER</strong>
        </p>
      </WrapperStatus>
      <Input />
    </SearchBarSection>
  );
};

export default SearchBar;
