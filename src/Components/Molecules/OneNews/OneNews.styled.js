import styled from "styled-components";

export const OneNews = styled.div`
  padding: 30px 25px;
  background: white;
  border-radius: 10px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 35px;

  h1 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 17px;
    weight: 700;
    margin-bottom: 0;
  }

  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 11px;
    font-weight: normal;
    font-family: Montserrat;
    margin-bottom: 12px;
  }

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 12px;
    font-weight: normal;
    font-family: Montserrat;
    line-height: 17px;
    margin-bottom: 37px;
  }

  button {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 700;
    padding: 6px 30px;
  }
`;
