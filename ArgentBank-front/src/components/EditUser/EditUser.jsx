// import React from "react";
import Button from '@components/Button/Button';
import '@components/EditUser/EditUser.scss';

const EditUser = () => {
    return (
        <div className="edit-user">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            
            <Button
                className={"edit-button"}
                btnTxt={"Edit Name"}
            />
        </div>
            
    );
};


export default EditUser;