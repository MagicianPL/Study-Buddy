import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../Atoms/Button/Button.styled";
import { OneNews } from "../../Molecules/OneNews/OneNews.styled";
import axios from "axios";

const API_TOKEN = "61c78433c6bab1c060f9a7e1a491c3";

const NewsSection = styled.div`
  grid-column: 3/4;
  grid-row: 1/4;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 45px;
  display: flex;
  flex-direction: column;

  & > h1 {
    color: ${({ theme }) => theme.colors.darkGrey};
    weight: 700;
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  img {
    max-width: 50%;
    margin-left: 15px;
  }
`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
      {
        allArticles{
          id
          title
          category
          content
          image {
            url
          }
        }
      }
      `,
        },
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
        console.log(data);
      })
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <NewsSection>
      <h1>University news feed</h1>
      {/*<OneNews>
        <h1>New computers for all lecturers</h1>
        <h2>Staff news</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
          amet lectus sodales, vulputate quam non, elementum mauris. Proin
          consectetur aliquam purus, facilisis fringilla erat iaculis id.
          Aliquam erat volutpat. Aenean auctor sapien laoreet risus.
        </p>
        <Button>Read more</Button>
      </OneNews>*/}
      {articles.length > 0
        ? articles.map(({ id, title, category, content, image = null }) => (
            <OneNews key={id}>
              <h1>{title}</h1>
              <h2>{category}</h2>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt="news" /> : null}
              </ContentWrapper>
              <Button>Read more</Button>
            </OneNews>
          ))
        : "Loading..."}
      {error ? error : null}
    </NewsSection>
  );
};

export default News;
