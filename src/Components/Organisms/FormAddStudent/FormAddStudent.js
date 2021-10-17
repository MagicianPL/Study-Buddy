import React, { useContext, useReducer } from "react";
import { Wrapper } from "../../Organisms/UsersList/UsersList.styles";
import FormField from "../../Molecules/FormField/FormField";
import { Button } from "../../Atoms/Button/Button.styled";
import { UsersContext } from "../../../Providers/UsersProvider";

const FormAddStudent = () => {
  const context = useContext(UsersContext);

  const initialState = {
    name: "",
    attendance: "",
    average: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUTCHANGE":
        return { ...state, [action.name]: action.value };

      case "CLEARVALUES":
        return initialState;

      default:
        return state;
    }
  };

  const [formStates, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: "INPUTCHANGE",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    //from context i'm getting function which will add user - it takes argument (values from inputs)
    context.handleAddUser(formStates);
    //clear all inputs
    dispatch({ type: "CLEARVALUES" });
  };

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
      <Button type="submit" onClick={handleSubmitUser}>
        ADD
      </Button>
    </Wrapper>
  );
};

export default FormAddStudent;
