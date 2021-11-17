import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FormField from "../FormField/FormField";
import { RenderWithProviders } from "../../../helpers/RenderWithThemeProvider";

describe("FormField", () => {
  it("renders the component", () => {
    RenderWithProviders(<FormField />);
  });
});
