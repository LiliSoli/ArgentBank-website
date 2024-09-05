import EditUser from '@components/EditUser/EditUser';
import accountData from '@data/accounts.json';
import Account from '@components/Account/Account';

const Home = () => {
    return (
        <main className="main bg-dark">
            <EditUser />

            <h2 className="sr-only">Accounts</h2>

            {accountData.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    )
}

export default Home