import React from 'react';
import { Provider } from 'react-redux';
import RTKQueryPageUI from './ui/RTKQueryPage';
import rtkQueryStore from './model/store';

const RTKQueryPage: React.FC = () => {
    return (
        <Provider store={rtkQueryStore}>
            <RTKQueryPageUI />
        </Provider>
    );
};

export default RTKQueryPage;