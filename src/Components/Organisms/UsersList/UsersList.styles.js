import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  grid-column: 2/3;
  grid-row: 2/2;
  align-self: start;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
