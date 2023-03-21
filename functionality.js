const data = {
    memes,
    jokes,
    quotes,
    riddles,
};

function clearAll() {
    const meme = document.querySelector(".meme-content");
    const joke = document.querySelector(".joke-content");
    const quote = document.querySelector(".quote-content");
    const riddle = document.querySelector(".riddle-content");

    meme.innerHTML = "";
    joke.innerHTML = "";
    quote.innerHTML = "";
    riddle.innerHTML = "";
}

function showMeme() {
    const randomMemeUrl = getRandomData("memes");
    
    const container = document.querySelector(".meme-content");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", randomMemeUrl);
    
    clearAll();
    
    container.appendChild(newImg);
}  

function showJoke() {
    const randomJokeText = getRandomData("jokes");
    
    const container = document.querySelector(".joke-content");
    const joke = document.createElement("p");
    joke.textContent = randomJokeText;
    
    clearAll();

    container.appendChild(joke);
}

function showQuote() {
    const randomQuote = getRandomData("quotes");
    
    const container = document.querySelector(".quote-content");
    
    const quote_t = document.createElement("p");
    const quote_a = document.createElement("p");
    quote_t.textContent = randomQuote.quote;
    quote_a.textContent = "- " + randomQuote.author;
    
    clearAll();
    
    container.appendChild(quote_t);
    container.appendChild(quote_a);
}

function showRiddle() {
    const randomRiddle = getRandomData("riddles");

    const container = document.querySelector(".riddle-content");
    const riddle_t = document.createElement("p");
    const riddle_a = document.createElement("p");

    riddle_t.textContent = randomRiddle.question;
    riddle_a.textContent = randomRiddle.answer;
    riddle_a.setAttribute("id", "riddle-answer");

    clearAll();

    riddle_a.hidden = true;

    container.appendChild(riddle_t);
    container.appendChild(riddle_a);
}

function revealAnswers() {
    const riddle = document.querySelector("p");
    const riddle_answer = document.querySelector("#riddle-answer");

    if (riddle && riddle_answer.hidden) {
        riddle_answer.hidden = false;
    } else if (riddle && riddle_answer){
        alert("The riddle answer is already exposed!");
    } else { 
        alert("There is no riddle to show the answer for!");
    }
}

function getRandomData(type) {
    return data[type][choose(data[type].length)];
}

function choose(len) {
    return Math.floor(Math.random() * len);
}
