function App() {
  function handleNewQuote() {}
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text"></div>
        <div id="author"></div>
        <button id="new-quote" onClick={handleNewQuote}></button>
        <a id="tweet-quote"></a>
      </div>
    </div>
  );
}

export default App;
