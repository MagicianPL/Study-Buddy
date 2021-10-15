import React from "react";
import { Label } from "../../Atoms/Label/Label.styled";
import { Input } from "../../Atoms/Input/Input.styled";

const FormField = ({ label, name, id, type = "text" }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} />
    </>
  );
};
