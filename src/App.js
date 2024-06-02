// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ReservationPage from './ReservationPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('login');

    const renderPage = () => {
        switch (currentPage) {
            case 'login':
                return <Login setCurrentPage={setCurrentPage} />;
            case 'register':
                return <Register setCurrentPage={setCurrentPage} />;
            case 'reservation':
                return <ReservationPage />;
            default:
                return <Login setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
};

export default App;
