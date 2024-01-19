import React, { useEffect, useState } from "react";
import "../Components/Styles.css";

function Generator() {
  const [quotes, setQuotes] = useState(null);
  const [quoteFetch, setQuoteFetch] = useState([]);

  const randomQuotes = (quoteFetch) => {
    return quoteFetch[Math.floor(Math.random() * quoteFetch.length)];
  };

  const generateRandomQuotes = () => {
    setQuotes(randomQuotes(quoteFetch));
  };

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const json = await response.json();
        setQuoteFetch(json);
        setQuotes(json[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, []);

  return (
    <section className="container">
      <div className="subContainer">
        <h1>Generating a <br /> Random Quotes</h1>
        <button onClick={generateRandomQuotes}>Generate Quote</button>
        <h3>"{quotes?.text}"</h3>
        <i> - {quotes?.author}</i>
      </div>
    </section>
  );
}

export default Generator;
