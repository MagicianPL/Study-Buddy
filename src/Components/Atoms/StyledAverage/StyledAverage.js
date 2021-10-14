import styled from "styled-components";

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ average, theme }) =>
    average <= 3
      ? theme.colors.error
      : average < 4
      ? theme.colors.warning
      : theme.colors.success};
  color: white;
`;
