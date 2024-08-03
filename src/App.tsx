import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import ChoosingPage from './component/choosingpage';
import Listpage from './component/list';
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choosing" element={<ChoosingPage />} />
                <Route path="/list" element={<Listpage />} />
            </Routes>
        </Router>
    );
};

export default App;