'use client';
import React, { useState } from 'react';
import axios from 'axios';

interface StockSearchProps {
  onSearch: (symbol: string) => void;
}

const StockSearch: React.FC<StockSearchProps> = ({ onSearch }) => {
  const [symbol, setSymbol] = useState('');
  
  const handleSearch = () => {
    if (symbol.trim()) {
      onSearch(symbol.trim().toUpperCase());
    }
  };  

  return (
    <div className='flex items-center bg-slate-200 p-3 rounded-lg gap-4'>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Enter stock symbol"
        className='w-full bg-transparent outline-none'
      />
      <button onClick={handleSearch}>Search</button>
      
    </div>
  );
};

export default StockSearch;
