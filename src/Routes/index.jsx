import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Register} from '../Pages/Register'
import {Login} from '../Pages/Login'
import {Dashboard} from '../Pages/Dashboard'

export const RouteApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </Router>
    )
}