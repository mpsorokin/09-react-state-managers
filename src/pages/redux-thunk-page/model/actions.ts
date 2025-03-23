import { Dispatch } from 'redux';
import {fetchPosts} from "../../../features/posts/api/postsApi.ts";

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = (posts: any[]) => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = (error: string) => ({ type: FETCH_POSTS_FAILURE, payload: error });

export const getPostsThunk = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchPostsRequest());
        try {
            const posts = await fetchPosts();
            dispatch(fetchPostsSuccess(posts));
        } catch (error: any) {
            dispatch(fetchPostsFailure(error.message));
        }
    };
};