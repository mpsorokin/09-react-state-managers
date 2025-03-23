import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
    return (
        <div>
            <h1>State Management Concepts Demo</h1>
            <ul>
                <li><Link to="/redux-thunk">Redux Thunk</Link></li>
                <li><Link to="/redux-rtk-query">Redux RTK Query</Link></li>
                <li><Link to="/zustand-fetch">Zustand (Fetch API)</Link></li>
                <li><Link to="/zustand-react-query">Zustand (React Query)</Link></li>
            </ul>
        </div>
    );
};

export default MainPage;