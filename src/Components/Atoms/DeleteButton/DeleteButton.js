import React from "react";
import { StyledButton } from "./DeleteButton.styled";
import { ReactComponent as DeleteIcon } from "../../../Assets/icons/delete-icon.svg";

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default DeleteButton;
