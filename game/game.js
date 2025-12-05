var data = [
    {
        image: "card-images/kittykitty_cat-dizzy.png",
        name: "dizzy"
    },
    {
        image: "card-images/kittykitty_cat-mad.png",
        name: "mad"
    },
    {
        image: "card-images/kittykitty_cat-norm.png",
        name: "norm"
    },
    {
        image: "card-images/kittykitty_cat-sad.png",
        name: "sad"
    },
    {
        image: "card-images/kittykitty_cat-scared.png",
        name: "scared"
    },
    {
        image: "card-images/kittykitty_cat-sleep.png",
        name: "sleep"
    }
];


(function(){
    'use strict';
    const cardContainer = document.querySelector('#cardContainer');
    const timer = document.querySelector("#timer");
    let cards = [];
    let flipOne, flipTwo;
    let stayFlipped = false;
    let matches = 0;
    let pairs = 6;
    let firstClick = true;
    let minutes = 0;
    let seconds = 0;
   const matchSound = new Audio('audio/meow-match.wav');
   const lostSound = new Audio ('audio/meow-lost.wav')
    let finTime = null;

    cards = [...data, ...data];

    const playAgain = document.querySelector("#playAgain");

    
    function shuffleCards(){
        let currI = cards.length;
        while (currI !== 0){
            let randomI = Math.floor(Math.random() * currI);
            currI -=1;
            //to not lose og val in swamp underneath
            let tempVal = cards[currI];
            cards[currI] = cards[randomI];
            cards[randomI] = tempVal;
        }
        
    }

    function loadCards(){
        for(let card of cards){
            
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            cardElement.card = card;
            //access card data with cards[index].attr
            cardElement.innerHTML = `
            
                <div class="back"></div>
                <div class="front">
                    <img class="card-stamp" src="${card.image}" alt="${card.name} cat"/>
                </div>
            
            `
            cardContainer.appendChild(cardElement);
            cardElement.addEventListener("click", flipCard);
        }
    }

    function flipCard(e){
        if (firstClick){
            startTimer();
            firstClick = false;
        }

        if (stayFlipped) return;
        let el = e.currentTarget;
        if(el === flipOne) return;

        el.classList.add("flipped");

        if(!flipOne){
            flipOne = el;
            return;
        }

        flipTwo = el;
       
        checkForMatch();
        updateStats();
       
    }

    function checkForMatch(){
        let isMatch = flipOne.card.name === flipTwo.card.name;
        isMatch? disableCards() : unflipCards();
    }

    function disableCards(){
        matchSound.play();
        flipOne.removeEventListener("click", flipCard);
        flipTwo.removeEventListener("click", flipCard)

        matches++;
        pairs--;

        if(pairs == 0){
            setTimeout(showWin, 500);
        }
        resetBoard();
    }

    function unflipCards(){
        lostSound.play();
        stayFlipped = true;
        setTimeout(function(){
           
            flipOne.classList.remove("flipped");
            flipTwo.classList.remove("flipped");

            resetBoard();
        }, 1000);

        
    }

    function resetBoard(){
        flipOne = null;
        flipTwo = null;
        stayFlipped = false;
    }

    function updateStats(){
        if(matches == 1){
            document.querySelector("#matches").innerHTML = `${matches} Match Made`;
        }
        else{document.querySelector("#matches").innerHTML = `${matches} Matches Made`;
    }
        if (pairs==1){
            document.querySelector("#pairsLeft").innerHTML = `${pairs} Pair Left`;}
        else{
             document.querySelector("#pairsLeft").innerHTML = `${pairs} Pairs Left`;
        }

    }

 function startTimer() {
    setTimeout(function(){
        if (pairs === 0) {
            finTime = `${minutes}:${pad(seconds)}`;
            return; // timer stops
        }

        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        timer.innerHTML = `${minutes}:${pad(seconds)}`;

        startTimer();
    }, 1000);
}

function pad(n){
    return n < 10 ? "0" + n : n;
}


    function showWin(){
         document.querySelector('body').innerHTML += `
        <div class="overlay"></div>
        <div class="win">
        <p id="gg">Good Job!</p> 
        <p id="fin">You finished with a time of ${finTime}</p>
        <button id="playAgain">Play Again</button>
        </div>`

        document.querySelector("#playAgain").addEventListener('click', function(){
            window.location.reload()});
    }

    shuffleCards();
    loadCards();
  
})();