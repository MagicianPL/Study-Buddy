import React from "react";
import { Wrapper } from "../../Organisms/UsersList/UsersList.styles";
import FormField from "../../Molecules/FormField/FormField";
import { Button } from "../../Atoms/Button/Button.styled";

const FormAddStudent = ({ formStates, handleInputChange, handleAddUser }) => {
  return (
    <Wrapper as="form">
      <h1>Add Student</h1>
      <FormField
        label="Name"
        name="name"
        id="name"
        value={formStates.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        name="attendance"
        id="attendance"
        value={formStates.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        name="average"
        id="average"
        value={formStates.average}
        onChange={handleInputChange}
      />
      <Button type="submit" onClick={handleAddUser}>
        ADD
      </Button>
    </Wrapper>
  );
};

export default FormAddStudent;
