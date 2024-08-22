// import React from "react";
import Button from '@components/Button/Button';
import '@components/EditUserForm/EditUserForm.scss';

const EditUserForm = () => {
    return (
        <div className="user-form">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            
            <Button
                className={"edit-button"}
                btnTxt={"Edit Name"}
            />
        </div>
            
    );
};


export default EditUserForm;