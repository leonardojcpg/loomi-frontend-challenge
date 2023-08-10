import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Register} from '../Pages/Register'
import {Home} from '../Pages/Home'
import {Dashboard} from '../Pages/Dashboard'
import ProtectedRoute from './protectedRoute.jsx';


export const RouteApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <ProtectedRoute path="/dashboard" element={<Dashboard />} isPrivate/>
            </Routes>
        </Router>
    )
}