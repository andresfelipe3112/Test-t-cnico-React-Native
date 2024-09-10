const API_URL = 'https://yin6yr3h2wi6sgfomq27zdsl3q0zbkkm.lambda-url.us-east-2.on.aws';

export const fetchItemsFromAPI = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
