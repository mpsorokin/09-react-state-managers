import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../../../shared/api/apiConfig.ts";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getPosts: builder.query<any[], void>({
            query: () => '/posts',
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;