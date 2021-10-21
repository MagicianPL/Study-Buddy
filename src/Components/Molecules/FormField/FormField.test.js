import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormField from "../FormField/FormField";
import {RenderWithProviders} from "../../../helpers/RenderWithThemeProvider";

describe("FormField", () => {
  it("renders the component", () => {
    RenderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
