import React from "react";
import { RenderWithProviders } from "../../../helpers/RenderWithThemeProvider";
import News from "./News";
import { screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);

const query = `{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}`;

describe("News", () => {
  afterEach(() => {
    mock.reset();
  });

  it("checks error message", async () => {
    mock.onPost("https://graphql.datocms.com/", { query }).reply(500);
    RenderWithProviders(<News />);
    await screen.findByText(/Sorry/);
  });
});
