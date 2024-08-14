import { useState } from "react";

interface StockDisplayProps {
    price: number | null;
    error: string | null;
    loading: boolean;
  }
  
  const StockDisplay: React.FC<StockDisplayProps> = ({ price, error, loading }) => {  
    
    return (
      <div className="mt-8 text-center ">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
            <div className="flex items-center gap-2">
                <p>Current Price: </p>
                <p className="">{loading ? "Loading..." : price !== null ? `$${price.toFixed(2)}` :'N/A'}</p>
            </div>
        )}
      </div>
    );
  };
  
  export default StockDisplay;
  