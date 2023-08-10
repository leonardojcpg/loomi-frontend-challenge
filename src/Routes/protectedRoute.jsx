// Rotas protegidas
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../AuthProvider/UseAuth';
import PropTypes from 'prop-types'


const ProtectedRoute = ({ isPrivate = false, component: Component, ...rest }) => {
    const {token} = useAuth()

    return(
        <Route 
        {...rest} 
        render={() => {
            return isPrivate === !!token? (
                <Component/>
            ) : (
                <Redirect to={isPrivate ? "/" : "/dashboard"}/>
            )
        }}
        />
    )
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.elementType.isRequired,
}