// import React from "react";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "@redux/loginSlice";
import { fetchUserProfile, clearProfile } from '@redux/profileSlice';
import '@components/NavBar/NavBar.scss';
import logo from '@assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    const token = useSelector((state) => state.login.token);
    const userName = useSelector((state) => state.profile.userName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile());
        }
    }, [token, dispatch]);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearProfile());
        navigate('/');
    };

    return (
        <nav className="main-nav">
            <NavLink className="main-nav__logo" to="/">
                <img
                    className="main-nav__logo--image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {token ? (
                    <>
                        <NavLink className="main-nav__item" to="/User">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {userName}
                        </NavLink>
                        <NavLink className="main-nav__item" to="/" onClick={handleLogout}>
                            <FontAwesomeIcon icon={faUserCircle} />
                            Sign Out
                        </NavLink>
                    </>
                ) : (
                    <NavLink className="main-nav__item" to="/SignIn">
                        <FontAwesomeIcon icon={faUserCircle} />
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
