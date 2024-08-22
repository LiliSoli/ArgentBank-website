// import React from "react";
import Button from '@components/Button/Button';
import '@components/SignInForm/SignInForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInForm = () => {
    return (
        <section className="sign-in__content">
            <FontAwesomeIcon icon={faUserCircle} className="sign-in__content--icon"/>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>
                
                <Button
                    className={"sign-in__button"}
                    btnTxt={"Sign In"}
                />
        </form>
      </section>
    );
};


export default SignInForm;