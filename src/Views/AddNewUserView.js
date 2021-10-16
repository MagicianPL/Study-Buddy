import React from 'react';
import FormAddStudent from '../Components/Organisms/FormAddStudent/FormAddStudent';

const AddNewUserView = ({formStates, handleInputChange, handleAddUser}) => {
 return (
    <FormAddStudent
                formStates={formStates}
                handleInputChange={handleInputChange}
                handleAddUser={handleAddUser}
              />
 )
};

export default AddNewUserView;