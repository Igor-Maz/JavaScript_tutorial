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

function reset(){
    document.getElementById('ageInDays').remove();
}


// Challenge 2: Cat generator


function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small'
    div.appendChild(image);
}


// Challenge 3: Rock, Paper, Scissors Game


