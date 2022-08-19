import axios from "axios";

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
        return response.data;

    } catch (error) {
        console.log(error);
    }
};