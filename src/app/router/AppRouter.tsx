import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "../../pages/main-page/ui/MainPage.tsx";
import ReduxThunkPage from "../../pages/redux-thunk-page";
import RTKQueryPage from "../../pages/redux-rtk-query-page";
import ZustandFetchPage from "../../pages/zustand-fetch-page";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/redux-thunk" element={<ReduxThunkPage />} />
                <Route path="/redux-rtk-query" element={<RTKQueryPage />} />
                <Route path="/zustand-fetch" element={<ZustandFetchPage />} />
                {/*<Route path="/zustand-react-query" element={<ZustandReactQueryPage />} />*/}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;