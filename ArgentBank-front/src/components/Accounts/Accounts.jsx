// import React from "react";
import accountData from '@data/accounts.json';
import Account from '@components/Accounts/Account/Account';
// import '@components/Accounts/Accounts.scss';

const Accounts = () => {
    return (
        <>
        <h2 className="sr-only">Accounts</h2>

            {accountData.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </>
    );
};

export default Accounts;