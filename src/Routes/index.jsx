import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from '../Pages/Register';
import { Home } from '../Pages/Home';
import { Dashboard } from '../Pages/Dashboard';

export const RouteApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </Router>
    );
};
