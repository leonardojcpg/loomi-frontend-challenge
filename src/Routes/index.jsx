import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from '../Pages/Register';
import { Home } from '../Pages/Home';
import { Dashboard } from '../Pages/Dashboard';
import ProtectedRoute from './protectedRoute';

export const RouteApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute path="/" element={<Dashboard />} />} 
                />
            </Routes>
        </Router>
    );
};
