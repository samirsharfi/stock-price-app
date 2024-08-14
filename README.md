This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


# Stock Price App

A Next.js application that allows users to search and retrieve real-time stock prices using the Finnhub API. The app also provides real-time updates via WebSocket for selected stock symbols.

## Features

- **Real-time Stock Search**: Search for stock prices using stock symbols like AAPL, TSLA, etc.
- **WebSocket Integration**: Receive live updates for selected stocks.
- **Error Handling**: Displays appropriate messages for invalid or non-existent stock symbols.
- **Responsive UI**: Built with Material-UI to ensure a smooth user experience.

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above) or yarn

### Steps to Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/stock-price-app.git
   cd stock-price-app


2. **Install dependencies**:

- npm install
- yarn install


3. **Set up environment variables**:

- Create a .env.local file in the root directory of your project.
- Add your Finnhub API key to the environment file:

NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key


4. **Run the development server**:

- npm run dev
- yarn dev 


5. **Open your browser**:

Visit http://localhost:3000 to see the application running.




## Usage

- Search for a Stock: Enter a stock symbol (e.g., AAPL, TSLA) in the search bar and press "Search". The app will display the current stock price.


## Project Structure

- `pages/`: Contains the main page of the app.

- `components/`: Contains reusable React components like StockSearch and StockDisplay.

- `hooks/`: Custom React hooks for handling WebSocket connections.



## API Integration


- The application integrates with the Finnhub API to fetch real-time stock data.



## Contact

For questions or support, please reach out to sharfi.samir@gmail.com



