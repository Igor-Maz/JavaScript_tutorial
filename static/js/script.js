// alert('Hello challenge')
// console.log('Hi Igo')


// Challenge 1: Your Age in Days


function ageInDays() {
    let birthYear = prompt('What year were you born?');
    let result = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + result + ' days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}


// Challenge 2: Cat generator


function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small'
    div.appendChild(image);
}


// Challenge 3: Rock, Paper, Scissors Game

function rpsGame(yourChoice) {

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yelow' };
    } else {
        return { 'message': 'You won', 'color': 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = '<div><h3>Your choice:</h3><img src="' + imagesDatabase[humanImageChoice] + '" height=150 width=150 style="box-shadow:0px 10px 50px rgba(37, 50, 233, 1);"></div>'
    messageDiv.innerHTML = '<div><h1 style="color: ' + finalMessage['color'] + '; font-size: 60px; padding: 30px; ">' + finalMessage['message'] + '</h1></div>'
    botDiv.innerHTML = '<div><h3>Computer choice:</h3><img src="' + imagesDatabase[botImageChoice] + '" height=150 width=150 style="box-shadow:0px 10px 50px rgba(243, 38, 24, 1);"></div>'

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the color of the button

let all_buttons = document.getElementById('buttons-to-be-changed').getElementsByTagName('button');
console.log(all_buttons);
let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsColor('danger');
    } else if (buttonThingy.value === 'green') {
        buttonsColor('success');
    } else if (buttonThingy.value === 'yellow') {
        buttonsColor('warning');
    } else if (buttonThingy.value === 'random') {
        buttonsRandom();
    } else if (buttonThingy.value === 'default') {
        buttonsDefault();
    } else if (buttonThingy.value === 'blank') {
        buttonsBlank();
    }
}

function buttonsDefault() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsColor(color) {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(`btn-${color}`);
    }
}

function buttonsRandom() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

function buttonsBlank() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    }
}

// Challenge 5: Blackjack

