import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import ChoosingPage from './component/choosingpage';
import MyItems from './component/Myitem';
import Mapping from'./component/mapping';
import Mybill from './component/mybill';
import Orders from './component/order';
import Map from './component/showmap';
import PaymentMethod from './component/selectpayment';
import Welcome from './component/welcomepage';
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choosing" element={<ChoosingPage />} />
                <Route path="/myitem" element={<MyItems />} />
                <Route path="/mapping" element={<Mapping />} />
                <Route path='/map' element={<Map/>}/>
                <Route path='/mybill' element={<Mybill/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/paymentmethod' element={<PaymentMethod/>}/>
                <Route path='/welcome' element={<Welcome/>}/>

            </Routes>
        </Router>
    );
};

export default App;