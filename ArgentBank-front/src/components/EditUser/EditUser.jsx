import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfile } from '@redux/profileSlice'; // Assurez-vous que ce chemin est correct
import Button from '@components/Button/Button';
import '@components/EditUser/EditUser.scss';

const EditUser = () => {
    const dispatch = useDispatch();
    const { userName, firstName, lastName } = useSelector((state) => state.profile);
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(userName);

    const openEditUserForm = () => {
        setIsEditing(true);
    };

    const handleSave = (event) => {
        event.preventDefault();
        dispatch(editUserProfile({ userName: newUserName }));
        setIsEditing(false);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="edit-user">
            {isEditing ? (
                <section className="edit-user-form">
                    <h1>Edit user info</h1>
                    <form onSubmit={handleSave}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                readOnly
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                readOnly
                            />
                        </div>

                        <Button
                            className={"sign-in__button"}
                            btnTxt={"Save"}
                            type="submit"
                        />

                        <Button
                            className={"sign-in__button"}
                            btnTxt={"Cancel"}
                            onClick={handleCancel}
                            type="button"
                        />
                    </form>
                </section>
            ) : (
                <div>
                    <h1>Welcome back<br />{firstName} {lastName}!
                    </h1>
                    <Button
                        onClick={openEditUserForm}
                        className={"edit-button"}
                        btnTxt={"Edit Name"}
                    />
                </div>
            )}
        </div>
    );
};

export default EditUser;
