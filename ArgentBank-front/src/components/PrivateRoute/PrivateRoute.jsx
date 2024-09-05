import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element }) => {
    const token = useSelector((state) => state.login.token);

    if (!token) {
        return <Navigate to="/SignIn" />;
    }

    return element;
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired, 
};
export default PrivateRoute;
