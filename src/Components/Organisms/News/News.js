import React from "react";
import styled from "styled-components";
import { Button } from "../../Atoms/Button/Button.styled";
import { OneNews } from "../../Molecules/OneNews/OneNews.styled";
import {news} from "../../../Data/NewsArray";

const NewsSection = styled.div`
  grid-column: 3/3;
  grid-row: 1/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 45px;

  & > h1 {
    color: ${({ theme }) => theme.colors.darkGrey};
    weight: 700;
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const News = () => {
  return (
    <NewsSection>
      <h1>University news feed</h1>
      <OneNews>
        <h1>New computers for all lecturers</h1>
        <h2>Staff news</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
          amet lectus sodales, vulputate quam non, elementum mauris. Proin
          consectetur aliquam purus, facilisis fringilla erat iaculis id.
          Aliquam erat volutpat. Aenean auctor sapien laoreet risus.
        </p>
        <Button>Read more</Button>
      </OneNews>
      {news.map(({title, category, content, image})=> (
        <OneNews>
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>
          {content}
        </p>
        <Button>Read more</Button>
      </OneNews>
      ))}
    </NewsSection>
  );
};

export default News;
