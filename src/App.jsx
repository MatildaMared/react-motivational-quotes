import React, { useState } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import Footer from "./components/Footer/Footer";

function App() {
	const [count, setCount] = useState(0);

  return <div className="App">
    <Header />
    <QuoteBox />
    <Footer />
  </div>;
}

export default App;
