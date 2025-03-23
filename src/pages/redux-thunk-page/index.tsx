import React from 'react';
import { Provider } from 'react-redux';
import ReduxThunkPageUI from './ui/ReduxThunkPage';
import reduxThunkStore from './model/store';
import postsReducer from './model/reducers';

// Define RootState type for useSelector
export type RootState = ReturnType<typeof postsReducer>;

const ReduxThunkPage: React.FC = () => {
    return (
        <Provider store={reduxThunkStore}>
            <ReduxThunkPageUI />
        </Provider>
    );
};

export default ReduxThunkPage;