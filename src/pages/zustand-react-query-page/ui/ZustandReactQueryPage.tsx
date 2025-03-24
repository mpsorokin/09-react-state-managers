import React, { useEffect } from 'react';
import useZustandReactQueryStore from '../model/store';
import ErrorMessage from "../../../shared/ui/ErrorMessage.tsx";
import LoadingIndicator from "../../../shared/ui/LoadingIndicator.tsx";

const ZustandReactQueryPage: React.FC = () => {
    const { posts, loading, error, fetchPostsData } = useZustandReactQueryStore();

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
            <h2>Zustand (React Query) Example</h2>
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

export default ZustandReactQueryPage;