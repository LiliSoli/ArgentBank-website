// import React from "react";
import PropTypes from 'prop-types';
import '@components/Button/Button.scss';

const Button = ({ className, onClick, btnTxt }) => {
    return (
        <button className={className} onClick={onClick}>
            {btnTxt}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    btnTxt: PropTypes.string.isRequired,
};

export default Button;