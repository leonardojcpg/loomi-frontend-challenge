import {createContext, useState} from 'react'
import PropTypes from "prop-types";
import { Api } from '../../Service';

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
        const response = await Api.post("/login", data)
        const [token, email] = response.data

        localStorage.setItem("@loomiChallange:token", token)
        localStorage.setItem("@loomiChallenge:email", JSON.stringify(email))

        setData({token, email})
    }

    const logout = () => {
        localStorage.removeItem("@loomiChallange:token");
        localStorage.removeItem("@loomiChallange:email");

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