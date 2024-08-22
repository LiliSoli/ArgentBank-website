import EditUser from '@components/EditUser/EditUser';
import Accounts from '@components/Accounts/Accounts';

const Home = () => {
    return (
        <main className="bg-dark">
            <EditUser />
            <Accounts />
        </main>
    )
}

export default Home