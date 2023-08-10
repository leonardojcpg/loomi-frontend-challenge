import { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthContext'

export const useAuth = () => {
    return useContext(AuthContext)
};
