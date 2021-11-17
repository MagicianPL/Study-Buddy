import "@testing-library/jest-dom";
import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { RenderWithProviders } from "../../../helpers/RenderWithThemeProvider";
import FormAddStudent from "../FormAddStudent/FormAddStudent";

describe("FormAddStudent", () => {
  it("renders the component", () => {
    RenderWithProviders(<FormAddStudent />);
  });

  it("adds new user", () => {
    RenderWithProviders(<FormAddStudent />);
    screen.debug();

    /*console.log(screen.queryByTestId("Name"));*/
  });
});
