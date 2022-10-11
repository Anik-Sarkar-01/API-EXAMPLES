const button = document.getElementById("btn");
button.classList.add("btn");                    

const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    const blockQuote = document.getElementById("quote");
    blockQuote.classList.add('quote')
    blockQuote.innerText = quote.quote;
}