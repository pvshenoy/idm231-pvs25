// Week 1/2

var principle = "Preeti Shenoy";

var teacher = "Nitya Guduru";

var gymTeacher = "prarthana shenoy";

console.log("this is used to add comments in the console in web inspector");
console.log(principle);

// single line comment

/* multi line comment
needs a lot of space */


// WEEK 3

console.log ("WEEK 3")

// let or const 

// let ------------

let snack = "pizza"
console.log(snack); // prints pizza

// let snack = "chips"
// console.log (snack); // error

snack = "chips"
console.log (snack); // prints chips


// const ----------

// used when you have a value that cant be changed

const preetibirthday = "12/24";
console.log (preetibirthday) // print 12/24

//const preetibirthday = "12/01";
// console.log (preetibirthday) // error

// preetibirthday = "12/17";
console.log (preetibirthday) // error

// concatenate 

// let firstname = "Preeti";
// let lastname = "Shenoy";
console.log (firstname + lastname); //print PreetiShenoy
console.log (firstname + " " + lastname); //prints Preeti Shenoy

const one = 1;
console.log ("one: " + one);

// easier way of doing the above
let fullname = `${firstname} ${lastname}`; // print preeti shenoy
let greeting = `Hello ${fullname}`; // prints hello preeti shenoy
console.log (greeting);

// functions
function calculatetip(total, tippercentage) {
    let percentage = tippercentage * 0.01;
    let tip = total * percentage; 
    // need: percentage of tip and the total bill
    // calculate: total bill * tip% = tip
    // goal: return the amount of money i should tip
    return tip;
    // nothing will happen unless it is triggered by the function name
}

calculatetip(); // calling the function
calculatetip(100, 20); 

let totaltip = calculatetip(100, 20);
console.log (`you should tip $${tip}`);

function emailpreeti(){

}
emailpreeti ();

// arrow function: easier way to do a function 
printhello = () => {
    console.log("hello!");
}; // semicolon is good just in case

printhello(); // call the arrow function

// arrays

["preeti", "lianna", "lauren"] // an array of names

const firstname = "preeti"
const classnames = ["preeti", "lianna", "lauren"] 
console.log (classnames); // prints preeti lianna lauren
console.log (classnames[1]); //prints lianna

// objects : var withv  curly brackets
const person = {
    firstname: "lianna",
    lastname: "wang",
    trait: "sexy",
}

console.log (person.trait);

function getTotal(subtotal, sales_tax, shipping) {
    var service_fee = .15;
    var tax         = subtotal * sales_tax;
    var total       = subtotal + tax + shipping;
    var fee         = total * service_fee;
  
    total = total + fee;
    return total;
  }
  
  var total = '$' + getTotal(21, .6, 8);


  // local scope

  function getArea(width, height) {
      const area = width * height;
      return area;
  }

  console.log(area); // gets you an error

  // instead, call a new variable 

  let wallsize = getArea(3,2);
  console.log(wallsize);

  // Week 4 

  // EValuating conditions 

  if (score > 50) {
      console.log('You passed!');
  } else {
      console.log ('try again');
  }

// comparison operators

// == / equal to
// != is not equal to 
// === / strict euqal 
// >= / obvious
// <= / ^

// logical operators

AND // (&&)

OR //

NOT //

// if statements

if (score > 50) {
    console.log('You passed!');
} 

// if else

if (score > 50) {
    console.log('You passed!');
} else {
    console.log ('try again');
}

// if else alternatives 

if (score > 50) {
    console.log('You passed!');
} else {
    console.log ('try again');
} if else {
    console.log('nooo');
}

// checking existence - else

const htmlelement = document.getElementsByClassName('portfolio');

if (htmlelement) // ...

// switch statements (alternative to if statements)

switch (level) {
    case 'one':
        title= 'level 1';
        break;
}

// loops - for loop

loop (let i = 0; i < 10; i++) {   // call out a variable , add a condition, i++ means to incrememnt a value by 1 
    console.log(i);
}

// while loop

const cars = [bmw, volvo];

cars.forEach // ...