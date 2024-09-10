
import { fetchItemsFromAPI } from './apiClient';

export const getItems = async () => {
  try {
    const items = await fetchItemsFromAPI();
    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error; 
  }
};
