'use client';
import { useState } from 'react';
import { getStockPrice } from './api/stock';
import StockSearch from './components/StockSearch';
import StockDisplay from './components/StockDisplay';

const Home: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (symbol: string) => {
    setError(null);
    setPrice(null);
    try {
      const data = await getStockPrice(symbol);
      if (data && data.c) {
        setPrice(data.c);
      } else {
        setError('Stock symbol not found');
      }
    } catch (err) {
      setError('Failed to fetch stock price');
    }
  };

  return (
      <main  className="flex min-h-screen flex-col items-center justify-between p-24" >
        <h1>Stock Price App</h1>
        <StockSearch onSearch={handleSearch} />
        <StockDisplay price={price} error={error} />
      </main>
  );
};

export default Home;
