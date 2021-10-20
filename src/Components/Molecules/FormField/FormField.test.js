import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        name="Name"
        id="name"
        placeholder="Enter your name"
      />
      <button disabled={!inputValue}>SUBMIT</button>
    </>
  );
};

describe("InputWithButton", () => {
  it("renders the component", () => {
    render(<InputWithButton />);
    screen.getByText("SUBMIT");
  });

  it("properly handles value change", () => {
    render(<InputWithButton />);
    const button = screen.getByText("SUBMIT");
    expect(button).toBeDisabled();
    const input = screen.getByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Roman" } });
    expect(input).toHaveValue("Roman");
    expect(button).not.toBeDisabled();
  });
});
