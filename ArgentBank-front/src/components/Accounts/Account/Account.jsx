// import React from "react";
import PropTypes from 'prop-types';
import Button from '@components/Button/Button'
import '@components/Accounts/Account/Account.scss';

const Account = ({ title, amount, description }) => {
    return (
        <section className="account">
            <div className="account__content">
                <h3 className="account__content--title">{title}</h3>
                <p className="account__content--amount">{amount}</p>
                <p className="account__content--description">{description}</p>
            </div>
            
            <div className="account__content cta">
                <Button
                    className={"transaction-button"}
                    btnTxt={"View transactions"}
                />
            </div>
        </section>
    );
};

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Account;