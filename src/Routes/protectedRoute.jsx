import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider/UseAuth'; 
import PropTypes from 'prop-types';

const ProtectedRoute = ({ path, element }) => {
    const { token } = useAuth(); // Substitua por como você obtém o token do contexto de autenticação

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <Route path={path} element={element} />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
}