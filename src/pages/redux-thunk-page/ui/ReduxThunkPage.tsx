import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsThunk } from '../model/actions';
import { RootState } from '../index';
import LoadingIndicator from "../../../shared/ui/LoadingIndicator.tsx";
import ErrorMessage from "../../../shared/ui/ErrorMessage.tsx";


const ReduxThunkPage: React.FC = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state: RootState) => ({
        posts: state.posts,
        loading: state.loading,
        error: state.error,
    }));

    useEffect(() => {
        dispatch(getPostsThunk());
    }, [dispatch]);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div>
            <h2>Redux Thunk Example</h2>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReduxThunkPage;