let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter valid number')
  }
  else if (guess<1){
    alert('please enter the number big than 1')
  }
  else if (guess>100){
    alert('please enter the smaller number than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===10){
      displayGuess(guess)
      displayMessage('game over')
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess=== randomNumber){
    displayMessage('the guess is right')
    endGame()
  }
  else if (guess < randomNumber){
    displayMessage('guess is small')
  }
  else if (guess > randomNumber){
    displayMessage('guess is bigger')
  }
}

function displayMessage(guess){
  lowOrHi.innerHTML = `<h2>${guess}</h2>`
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},`
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function endGame (){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id ='newgame'> start new game</h2>`
  startOver.appendChild(p)
  playGame= false
  newGame()
}

function newGame(){
  const gameBtn = document.querySelector('#newgame')
  gameBtn.addEventListener('click',function(e){
    e.preventDefault()
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}