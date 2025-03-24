import React from 'react';
import { useGetPostsQuery } from '../model/postsApi';
import ErrorMessage from "../../../shared/ui/ErrorMessage.tsx";
import LoadingIndicator from "../../../shared/ui/LoadingIndicator.tsx";

const RTKQueryPage: React.FC = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();

    if (isLoading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <ErrorMessage message={'Failed to fetch posts'} />;
    }

    return (
        <div>
            <h2>Redux RTK Query Example</h2>
            <ul>
                {posts?.map((post: any) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RTKQueryPage;