import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api-url';

export const getProducts = async (filters) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details', error);
    throw error;
  }
};
