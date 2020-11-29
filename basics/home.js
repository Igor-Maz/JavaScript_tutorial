// console.log('hello');
// alert('just a second try');
// let age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = age;

/* multiline comment
1. line one
2. line two
 */

// let name = prompt("What's your name?");
// let yearOfBirth = prompt('Please provide a year of birth:');

function greetings(yourName, yearOfBirth) {
    let age = 2020 - yearOfBirth;
    let result = "Hello " + yourName + ", your age is " + age;
    document.getElementById('someText').innerHTML = result;
}

// greetings(name, yearOfBirth);
// console.log(typeof name);
// console.log(typeof yearOfBirth);
// console.log("We've got " + name + " here\nyear of birth - " + yearOfBirth)

//Strings in JS

let fruit = 'Banana,Apple,Orange'

console.log(fruit.length);
console.log(fruit.indexOf('oran'));
console.log(fruit.slice(3, 9));
console.log(fruit.replace('Apple', "Pear"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[5]);
console.log(fruit.split(''));
console.log(fruit.split(','));

//Arrays in JS

let fruits = ['Banana', 'Apple', 'Orange', 'Pears', 'Pineapples'];
console.log(fruits);
fruits = new Array('Banana', 'Apple', 'Orange', 'Pears', 'Pineapples', 'Blackberry');
;
console.log(fruits);

console.log(fruits[2]);

fruits[0] = 'Coconut';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('Blackberry'), fruits);
fruits[fruits.length] = 'New fruit';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('Kiwi');
console.log(fruits);

let vegetables = ['Tomato', 'Broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [3, 56, 2, 78, 96, 32, 53, 12, 87, 1, 8, 23, 9, 52]
console.log(someNumbers.sort(function (a, b) {
    return a - b
}));
console.log(someNumbers.sort(function (a, b) {
    return b - a
}));

let newArray = [];
for (let i = 0; i <= 10; i++) {
    newArray.push(i);
}
console.log(newArray);

//Objects in JS

let student = {
    first: 'Igo',
    last: 'Aka',
    age: 33,
    height: 180,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.height;
    }
};
console.log(student);
console.log(student.last);
student.last = "A.K.";
console.log(student.last);
student.height++;
console.log(student.height);
console.log(student.studentInfo());

// Conditionals, control flow
// && AND
// || OR

let age = 36

if ( (age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

switch (7) {
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    case 7:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}

console.log(text);

//inne podejscie do objektow z wykorzystaniem prototypow

function User(name, surname) {
    this.name = name;
    this.surname = surname;
}

User.prototype.printRaport = function () {
    console.log(`Raport for: ${this.name}`);
};

User.prototype.account = "standard";

let usr1 = new User("Yanush", "Programowania");
usr1.account = "premium";
let usr2 = new User("Bożena", "Kodu");

console.log(usr1);
usr1.printRaport();
console.log(usr2);
usr2.printRaport();