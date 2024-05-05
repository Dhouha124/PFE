import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuardAuth = ({ redirectPath }) => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to={redirectPath} replace />;
    }
};

GuardAuth.propTypes = {
    redirectPath: PropTypes.string.isRequired,
};

export default GuardAuth;