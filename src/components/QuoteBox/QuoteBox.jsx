import React from "react";
import "./QuoteBox.scss";
import signature from "./../../signature.png";

const QuoteBox = ({ quote, getRandomQuote }) => {
  return (
		<div className="wrapper">
			<p className="description">
				We all need to be motivated sometimes – click the button below to
				generate a random motivational quote. Hopefully it will help brighten your day! With love,
			</p>
			<img src={signature} className="signature" alt="Matilda"></img>
			{quote ? (
				<div className="quote">
					<p className="quote__text">{quote.text}</p>
          <p className="quote__author">– {quote.author}</p>
          <button className="quote__btn" onClick={getRandomQuote}>Motivate me!</button>
				</div>
      ) : (
          <div className="quote">
            <p className="quote__loading">Loading...</p>
          </div>
      )}
		</div>
	);
};

export default QuoteBox;
