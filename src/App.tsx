import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import ChoosingPage from './component/choosingpage';
import MyItems from './component/Myitem';
import Mapping from'./component/mapping';
import Mybill from './component/mybill';
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choosing" element={<ChoosingPage />} />
                <Route path="/myitem" element={<MyItems />} />
                <Route path="/mapping" element={<Mapping />} />
                <Route path='/mybill' element={<Mybill/>}/>
            </Routes>
        </Router>
    );
};

export default App;