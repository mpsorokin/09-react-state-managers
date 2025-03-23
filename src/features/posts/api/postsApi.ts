import {BASE_URL} from "../../../shared/api/apiConfig.ts";


export const fetchPosts = async (): Promise<any[]> => {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};