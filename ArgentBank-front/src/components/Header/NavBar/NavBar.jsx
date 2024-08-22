// import React from "react";
import { NavLink } from "react-router-dom";
import '@components/Header/NavBar/NavBar.scss';
import logo from '@assets/img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
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
                <NavLink className="main-nav__item" to="/SignIn">
                    <i className="fa fa-user-circle"></i>
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
