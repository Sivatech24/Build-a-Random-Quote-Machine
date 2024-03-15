document.addEventListener('DOMContentLoaded', function() {
  const quoteText = document.getElementById('text');
  const authorText = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');
  const tweetQuoteButton = document.getElementById('tweet-quote');

  function fetchQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteText.textContent = data.content;
        authorText.textContent = "- " + data.author;
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text="${data.content}" - ${data.author}`;
      })
      .catch(error => console.error('Error fetching quote:', error));
  }

  newQuoteButton.addEventListener('click', fetchQuote);

  // Fetch initial quote on page load
  fetchQuote();
});
