import EditUserForm from '@components/EditUserForm/EditUserForm';
import Accounts from '@components/Accounts/Accounts';

const Home = () => {
    return (
        <main className="bg-dark">
            <EditUserForm />
            <Accounts />
        </main>
    )
}

export default Home