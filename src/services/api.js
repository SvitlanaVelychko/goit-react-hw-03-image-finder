import axios from "axios";
import { toast } from 'react-toastify';

const API_KEY = '28337578-4a6faed3a9785284bd8e8ad21';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
    try {
        const searchParams = new URLSearchParams({
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 12,
        });

        const response = await axios.get(`?${searchParams}`);

        if (response.data.totalHits === 0 || query === '') {
            toast.error('Sorry, there are no images matching your search query. Please try again.');
        } else if (response.data.hits.length % 12 !== 0 && response.data.totalHits > 0) {
            toast.error("We're sorry, but you've reached the end of search results.");
        } else {
            return response.data;
        }
        
    } catch (error) {
        console.log(error);
    }
};