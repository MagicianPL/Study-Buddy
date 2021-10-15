import styled from "styled-components";

export const StyledButton = styled.button`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  margin-top: 33px;

  svg {
    width: 100%;
    height: 100%;
  }
`;