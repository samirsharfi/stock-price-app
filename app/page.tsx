'use client';
import { useState } from 'react';
import { getStockPrice } from './api/stock';
import StockSearch from './components/StockSearch';
import StockDisplay from './components/StockDisplay';

const Home: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (symbol: string) => {
    setError(null);
    setPrice(null);
    setLoading(true);
    try {
      const data = await getStockPrice(symbol);
      if (data && data.c) {
        setPrice(data.c);
      } else {
        setError('Stock symbol not found');
      }
    } catch (err) {
      setError('Failed to fetch stock price');
    } finally {
      setLoading(false);
    }
  };

  return (
      <main  className="flex min-h-screen flex-col items-center justify-between p-24" >
        <div className='flex flex-col items-center gap-16 border border-slate-200 rounded-lg p-4 h-[350px]'>
        <h1>Stock Price App</h1>
        <div>
        <StockSearch onSearch={handleSearch} />
        <StockDisplay price={price} error={error} loading={loading} />
        </div >
        </div>
      </main>
  );
};

export default Home;
