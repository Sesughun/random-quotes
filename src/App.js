import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [category, setCategory] = useState("happiness");
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  function getNewQuote(category) {
    axios
      .get("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "mz0iHlUylfC2ByLlOly1Pw==ZZ8NAUebiOBTYA9D" },
        params: {
          category: category,
        },
      })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const { quote: text, author } = res.data[0];
          setQuote({ text, author });
        }
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  }

  useEffect(() => {
    getNewQuote(category);
  }, [category]);

  return (
    <>
      <div className="card" id="entire">
        <div className="card-header">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="happiness">Happiness</option>
            <option value="great">Great</option>
            <option value="life">Life</option>
            <option value="love">Love</option>
            <option value="success">Success</option>
          </select>
        </div>
        <div id="quote-box" className="card-body">
          <p id="text">{quote.text}</p>
          <div id="author">{quote.author}</div>
          <button
            id="new-quote"
            className="btn btn-primary"
            onClick={() => getNewQuote(category)}
          >
            New quote
          </button>
          <a
            id="tweet-quote"
            className="btn btn-secondary"
            href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
