import React, { useState, useEffect } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import Footer from "./components/Footer/Footer";

function App() {
  const [quotes, setQuotes] = useState(undefined);
  const [quote, setQuote] = useState(undefined);

  // Fetch quotes and update quotes variable
	const getQuotes = async () => {
		try {
			const response = await fetch("https://type.fit/api/quotes");
			const data = await response.json();

			// Set quote author to Unknown if it's null or undefined
			data.forEach((quote) => {
				if (quote.author === null || quote.author === undefined) {
					quote.author = "Unknown";
				}
			});

      setQuotes(data);
    } catch (err) {
      console.error(err);
    }
	};

	const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
	};

	useEffect(() => {
    getQuotes();
  }, []);
  
  // If quotes variable updates, call getRandomQuote function to set a new random quote
  useEffect(() => {
    if (quotes) {
      getRandomQuote();
    }
  }, [quotes]);

	return (
		<div className="App">
			<Header />
			{quote && (
				<QuoteBox quote={quote} getRandomQuote={getRandomQuote} />
			)}
			<Footer />
		</div>
	);
}

export default App;
