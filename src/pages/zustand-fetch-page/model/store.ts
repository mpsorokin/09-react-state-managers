import { create } from 'zustand';
import { fetchPosts } from "../../../features/posts/api/postsApi.ts";

interface ZustandFetchState {
    posts: any[];
    loading: boolean;
    error: string | null;
    fetchPostsData: () => Promise<void>;
}

const useZustandFetchStore = create<ZustandFetchState>((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPostsData: async () => {
        set({ loading: true, error: null });
        try {
            const posts = await fetchPosts();
            set({ posts, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useZustandFetchStore;