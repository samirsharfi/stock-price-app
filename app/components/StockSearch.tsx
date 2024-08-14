'use client';
import React, { useState } from 'react';
import { MdClear } from "react-icons/md";

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
    <div className='flex flex-col gap-4'>
    <div className='flex items-center bg-slate-200 p-3 rounded-lg gap-4'>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Enter stock symbol"
        className='w-full bg-transparent outline-none'
      />
      <MdClear size={20} onClick={() => setSymbol('')} className='cursor-pointer'/>
      
    </div>
    <button onClick={handleSearch} className={` bg-blue-400 p-2 rounded-lg  ${symbol.trim() ? 'cursor-pointer hover:bg-blue-500 hover:text-white' : 'cursor-not-allowed'}`}>Search</button>
    </div>
  );
};

export default StockSearch;
