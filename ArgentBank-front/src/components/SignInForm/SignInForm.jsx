// import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '@redux/loginSlice';
import Button from '@components/Button/Button';
import '@components/SignInForm/SignInForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token, loading, error } = useSelector((state) => state.login);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchToken({ email, password }));
    };

    useEffect(() => {
        if (token) {
            if (rememberMe) {
                localStorage.setItem('token', token); // Store token in localStorage
            }
            navigate('/User');
        }
    }, [token, rememberMe, navigate]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            navigate('/User');
        }
    }, [navigate]);

    return (
        <section className="sign-in__content">
            <FontAwesomeIcon
                icon={faUserCircle} className="sign-in__content--icon"
            />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                        type="email"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>

                <Button
                    className={"sign-in__button"}
                    btnTxt={loading ? "Loading..." : "Sign In"}
                    onClick={handleSubmit}
                />

                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error.message}</p>}

            </form>
        </section>
    );
};


export default SignInForm;