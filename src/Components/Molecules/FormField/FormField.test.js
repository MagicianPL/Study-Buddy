import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormField from "../FormField/FormField";
import RenderWithThemeProvider from "../../../helpers/RenderWithThemeProvider";




describe("FormField", () => {
  it("renders the component", () => {
    RenderWithThemeProvider(<FormField />);
   
  });

  });
