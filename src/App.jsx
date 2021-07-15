import React, { useState } from "react";
import "./App.scss";
import QuoteBox from "./components/QuoteBox/QuoteBox";

function App() {
	const [count, setCount] = useState(0);

  return <div className="App">
    <QuoteBox />
  </div>;
}

export default App;
