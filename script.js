
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

//Show loader

function showLoader() {
  loader.hidden = false
  quoteContainer.hidden = true
}

//Stop Loader

function stopLoader() {
  loader.hidden = true
  quoteContainer.hidden = false
}

//Show new quotes
function newQuotes() {
    showLoader()
  //pick a random quote from apiQuotes array
    const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //check if author field is blank and replace it with 'unknown'
    if(quotes.author === "type.fit") {
      authorText.textContent = 'Unknown'
    } else {
      authorText.textContent = quotes.author.split(',')[0]
    }
    //check quote length to determine styling
    if(quotes.text.length > 80) {
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quotes.text
    stopLoader()
}

//get quotes from API
async function getQuotes() {
    showLoader()
    const apiUrl = 'https://type.fit/api/quotes'
    try {
      const response = await fetch(apiUrl)
      apiQuotes = await response.json()
      console.log(apiQuotes)
      newQuotes()
    } catch(error) {
      console.log(error)
    }
}

//tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  //allow twitter to open in a new tab
  window.open(twitterUrl, '_blank')
}

console.log(tweetQuote)

//event listeners
newQuoteBtn.addEventListener('click', newQuotes)
twitterBtn.addEventListener('click', tweetQuote)

//on load
getQuotes()