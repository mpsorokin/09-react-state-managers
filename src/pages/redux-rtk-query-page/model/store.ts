import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './postsApi';

const rtkQueryStore = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof rtkQueryStore.getState>;
export type AppDispatch = typeof rtkQueryStore.dispatch;

export default rtkQueryStore;