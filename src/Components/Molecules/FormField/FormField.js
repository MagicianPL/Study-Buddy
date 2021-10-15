import React from "react";
import styled from "styled-components";
import { Label } from "../../Atoms/Label/Label.styled";
import { Input } from "../../Atoms/Input/Input.styled";

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  label {
    margin: 10px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = "text" }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default FormField;
