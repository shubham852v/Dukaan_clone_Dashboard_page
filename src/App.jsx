
import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard'; // Adjust the path according to your project structure
import Payouts from './component/Payouts';
import TransactionSection from './component/TransactionSection'; 

const App = () => {
  return (
    <RecoilRoot>
    <div className="flex flex-col sm:flex-row w-full">
        {/* Dashboard Component */}
        <div >
            <Dashboard />
        </div>
        {/* Payouts and Transaction Section Components */}
        <div className="flex-grow sm:w-2/3 p-4 flex flex-col">
            <Payouts />
            <TransactionSection />
        </div>
    </div>
    </RecoilRoot>
  );
};

export default App;



