import {createContext, useState} from 'react'
import PropTypes from "prop-types";
import { Api } from '../../Service';
import {toast} from 'react-toastify'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [data, setData] = useState(() => {

        const token = localStorage.getItem("@loomiChallenge:token");
        const email = localStorage.getItem("@loomiChallenge:email");

        if(token && email){
            return {token, email: JSON.parse(email)}
        }
        return {};
    });
    const login = async (data) => {
        try {
          const response = await Api.post("/login", data);
          const { token, email } = response.data;
      
          localStorage.setItem("@loomiChallenge:token", token);
          localStorage.setItem("@loomiChallenge:email", JSON.stringify(email));
      
          setData({ token, email });
        } catch (error) {
          toast.error("Error logging in:", error);
        }
      };
      

    const logout = () => {
        localStorage.removeItem("@loomiChallenge:token");
        localStorage.removeItem("@loomiChallenge:email");

        setData({});

    }

    const isAuthenticated = () => {
        return !!data.token
    }

    return (
        <AuthContext.Provider value={{ token: data.token, email: data.email, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export default AuthContext;
