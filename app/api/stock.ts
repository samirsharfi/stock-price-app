import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1';

export const getStockPrice = async (symbol: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/quote`, {
      params: {
        symbol,
        token: API_KEY,
      },
    });
    
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch stock price');
  }
};
