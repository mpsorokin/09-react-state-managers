import { create } from 'zustand';
import { fetchPosts } from "../../../features/posts/api/postsApi.ts";

interface Post {
    id: number;
    title: string;
    content: string;
}

interface ZustandReactQueryState {
    posts: Post[];
    loading: boolean;
    error: string | null;
    fetchPostsData: () => Promise<void>;
}

const useZustandReactQueryStore = create<ZustandReactQueryState>((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPostsData: async () => {
        set({ loading: true, error: null });
        try {
            const data = await fetchPosts();
            set({ posts: data, loading: false });
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("An unknown error occurred");
            }
        }
    },
}));

export default useZustandReactQueryStore;