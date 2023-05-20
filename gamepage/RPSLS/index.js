let computerChoiceEl = document.getElementById("computerChoiceEl")
let notificationEl = document.getElementById("notification")
let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"] 

function hands() {
    let rando = Math.floor( Math.random() * 5)
    return choices[rando]
}

let winEl = document.getElementById("wins")
let wins = 0
let lossEl = document.getElementById("losses")
let losses = 0

function win() {
    wins ++
    winEl.textContent = "Wins: " + wins
    notificationEl.textContent = "YOU WIN!"
}

function loss() {
    losses ++
    lossEl.textContent = "Losses: " + losses
    notificationEl.textContent = "YOU LOSE!"
}

function draw() {
    notificationEl.textContent = "It's a draw"
}

function rockOption() {
    let computerchoose = hands()
    computerChoiceEl.innerHTML = "Computer's Choice: " + computerchoose
    if (computerchoose === "Rock") {
        draw()
    } else if (computerchoose === "Scissors" || computerchoose === "Lizard") {
        
        win ()
    } else if (computerchoose === "Paper" || computerchoose === "Spock") {
        
        loss ()
    }
}

function paperOption() {
    let computerchoose = hands()
    computerChoiceEl.innerHTML = "Computer's Choice: " + computerchoose
    if (computerchoose === "Paper") {
        draw()
    } else if (computerchoose === "Spock" || computerchoose === "Rock") {
        win ()
    } else if (computerchoose === "Scissors" || computerchoose === "Lizard")
        loss() 
}

function scissorsOption() {
    let computerchoose = hands()
    computerChoiceEl.innerHTML = "Computer's Choice: " + computerchoose
    if (computerchoose === "Scissors") {
        draw()
    } else if (computerchoose === "Paper" || computerchoose === "Lizard") {
        win()
    } else if (computerchoose === "Rock" || computerchoose === "Spock")
        loss() 
}

function lizardOption() {
    let computerchoose = hands()
    computerChoiceEl.innerHTML = "Computer's Choice: " + computerchoose
    if (computerchoose === "Lizard") {
       draw()
    } else if (computerchoose === "Paper" || computerchoose === "Spock") {
        win()
    } else if (computerchoose === "Scissors" || computerchoose === "Rock")
        loss()
}

function spockOption() {
    let computerchoose = hands()
    computerChoiceEl.innerHTML = "Computer's Choice: " + computerchoose
    if (computerchoose === "Spock") {
        draw()
    } else if (computerchoose === "Rock" || computerchoose === "Scissors") {
        win()
    } else if (computerchoose === "Lizard" || computerchoose === "Paper")
        loss()
}