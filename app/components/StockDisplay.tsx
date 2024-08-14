interface StockDisplayProps {
    price: number | null;
    error: string | null;
  }
  
  const StockDisplay: React.FC<StockDisplayProps> = ({ price, error }) => {
    return (
      <div>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>Current Price: {price !== null ? `$${price.toFixed(2)}` : 'N/A'}</p>
        )}
      </div>
    );
  };
  
  export default StockDisplay;
  