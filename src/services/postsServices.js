import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (page = 1, limit = 8) => {
  try {
    const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts.');
  }
};