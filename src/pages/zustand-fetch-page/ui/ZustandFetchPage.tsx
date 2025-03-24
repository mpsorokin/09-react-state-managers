import React, { useEffect } from 'react';
import useZustandFetchStore from '../model/store';
import ErrorMessage from "../../../shared/ui/ErrorMessage.tsx";
import LoadingIndicator from "../../../shared/ui/LoadingIndicator.tsx";

const ZustandFetchPage: React.FC = () => {
    const { posts, loading, error, fetchPostsData } = useZustandFetchStore();

    useEffect(() => {
        fetchPostsData();
    }, [fetchPostsData]);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div>
            <h2>Zustand (Fetch API) Example</h2>
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

export default ZustandFetchPage;