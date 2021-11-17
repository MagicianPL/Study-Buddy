import "@testing-library/jest-dom";
import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { RenderWithProviders } from "../../../helpers/RenderWithThemeProvider";
import FormAddStudent from "../FormAddStudent/FormAddStudent";
import UsersList from "../UsersList/UsersList";

describe("FormAddStudent", () => {
  it("renders the component", () => {
    RenderWithProviders(<FormAddStudent />);
  });

  it("adds new user", () => {
    RenderWithProviders(
      <>
        <UsersList />
        <FormAddStudent />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), {
      target: { value: "Genek" },
    });
    fireEvent.change(screen.getByTestId("Attendance"), {
      target: { value: "60%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "6.0" },
    });

    fireEvent.click(screen.getByText("ADD"));
    screen.getByText("Genek");
  });
});
