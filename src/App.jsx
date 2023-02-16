import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import Dashboard from './pages/UserDashboard/Dashboard';
import BankTransfer from './pages/UserDashboard/BankTransfer';
import CashOut from './pages/UserDashboard/CashOut';

// Import pages

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/send-money" element={<Dashboard />} />
        <Route exact path="/bank-transfer" element={<BankTransfer />} />
        <Route exact path="/cash-out" element={<CashOut />} />
      </Routes>
    </>
  );
}

export default App;
