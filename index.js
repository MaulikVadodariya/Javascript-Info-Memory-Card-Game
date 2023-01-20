const cards = document.querySelectorAll('.card');

var isFlipped = false;
var firstCard;
var secondCard; 


const success = () => {
  firstCard.removeEventListener("click" , flip);
      secondCard.removeEventListener("click" , flip);
  reset();
  // location.reload();
}

const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

const fail = () => {
  setTimeout(() => {
      firstCard.classList.remove('flip'); 
      secondCard.classList.remove('flip');
    reset();
  },1000) 
}


const checkIt = () => {
  // console.log("checking...");
  
  if(firstCard.dataset.image === secondCard.dataset.image){
    success();
  }else{
    fail();
  }
}

const flip = (target) => {
  target.classList.add("flip");
  if(!isFlipped){
    isFlipped = true;
    firstCard = target;
  }else{
    secondCard = target;
    checkIt();
  }
}

cards.forEach((card) => card.addEventListener("click" , (e) => {
  flip(e.currentTarget)   
}))

// shuffle cards

const suffleCards = () => {
  cards.forEach((card) => {
      var index = Math.floor(Math.random() * 16);
      card.style.order = index;
  });
};

window.onload = suffleCards();