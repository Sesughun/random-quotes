import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  function handleNewQuote() {}
  return (
    <div className="card" id="entire">
      <div id="quote-box" className="card-body">
        <div id="text">To go up is to go up, up up!</div>
        <div id="author">-Lan Sesughun</div>
        <button id="new-quote" onClick={handleNewQuote}>
          New quote
        </button>
        <a id="tweet-quote">Tweet</a>
      </div>
    </div>
  );
}

export default App;
