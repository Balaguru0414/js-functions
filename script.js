'use strict';
/*

//-------------------  default parameter -----------------------
const bookings = [];

const createBooking = function (
	flightNum,
	numpassengers = 1,    // ES6 set default value
	price = 199 * numpassengers) {
	// ES5
	// numpassengers = numpassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numpassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};
createBooking('BA21');
createBooking('BA21',2);
createBooking('BA21',5);
createBooking('BA21',undefined,499);
console.log(bookings);
-------------------------------------------------------------------------
// how passing arguments works : Value vs. reference

const flight = 'TN2101';
const bala = {
	name : 'Bala Guru',
	passport : 210123240323,
};

const checkIn = function (flightNum,passenger) {
	flightNum = 'TN2507';
	passenger.name = passenger.name.startsWith('Mr.') ? passenger.name : 'Mr.' + passenger.name; 
	//  passenger.name = 'Mr.' + passenger.name

	if (passenger.passport === 210123240323) {
		alert('checkIn');
	} else {
		alert('Wrong Passport');
	};
};

checkIn(flight,bala);
console.log(flight);
console.log(bala);

// Is the same as doing ....
// const flightNum = flight;
// const passenger = bala;

const newpassport = function(person) {
	person.passport = Math.trunc(Math.random() * 1000000000000);
};

newpassport(bala);
checkIn(flight,bala);
console.log(bala);

const oneWord = function (str) {
	return str.replaceAll(' ','').toUpperCase();
};

const upperFrontWord = function (str) {
	const [first,...others] = str.split(' ');
	console.log(first);
	console.log(others)
	console.log(...others);
	return [first.toUpperCase(),...others].join(' ');
};

// Higher - Order Function :
const transformer = function (str,fn) {
	console.log(`Original String : ${str}`);
	console.log(`Transformed String : ${fn(str)}`);// upperfrontword (or) oneword ('Javascript')
	console.log(`Transformed By : ${fn.name}`);  // function name
}

transformer('javascript is the best!',upperFrontWord);
transformer('javascript is the best!',oneWord);

// js uses callbacks all the time

const high5 = function () {
	console.log('👋');
} 
document.body.addEventListener('click',high5);

['Bala','Mari','Abi'].forEach(high5);

const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	}
};
greet('Hi');   				// nothing Happend
greet('Helo')('Balaguru');  // its work -- Hello Balaguru

const greeterHey = greet("Hey");
greeterHey();				// its work but name is undefined
greeterHey('Bala');			// Hey Bala
greeterHey('MairMuthu');	// Hey MariMuthu

const greet = greeting => name => console.log(`${greeting} ${name}`)
greet('Hi')('Bala');

const airIndia = {
	airline : 'airIndia',
	iataCode : 'AI',
	bookings : [],
	book(flightNum,name){
		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
		this.bookings.push({flight : `${this.iataCode}${flightNum}`,name});
	},
};
airIndia.book(2123,'Balaguru');
airIndia.book(508,'Surya Narayanan');
// console.log(airIndia);      mela kila enga console potalum bookings kattum with answer

const indigo = {
	airline : 'Indigo',
	iataCode : "IN",
	bookings : [],
}

const book = airIndia.book;
// console.log(book)
// Does not Work
// book(1211,'Abinesh');

// call method----------------------------

book.call(indigo,1211,'Abinesh');
book.call(airIndia,2303,'Mari')

const vistara = {
	airline : 'Vistara',
	iataCode : 'VI',
	bookings : [],
}

book.call(vistara,1910,'Ganesh');

// apply method----------------------------
const flightData = [233,'yogi'];
book.apply(vistara,flightData);
book.call(indigo,...flightData);

//----------------------------------------------------------------------------------

// Bind Method-------------------------------

const bookIN = book.bind(indigo);
const bookAI = book.bind(airIndia);
const bookVI = book.bind(vistara);
// console.log(bookIN);

bookIN(257,'kavitha');
bookAI(765,'Lakshmanan');
bookVI(987,'kanaga');

// console.log(airIndia);
// console.log(indigo);
// console.log(vistara);

const bookVI212 = book.bind(vistara,212);
bookVI212('Balaji');
bookVI212('Sathis');

// with event listeners

airIndia.planes = 21;
airIndia.buyPlanes = function () {
	console.log(this);
	this.planes++;
	console.log(this.planes)
};

airIndia.buyPlanes();

document.body.addEventListener('click',airIndia.buyPlanes.bind(airIndia));

// Partial Application ------------
const addTax = (rate,value) => value + value *  rate;
console.log(addTax(0.1,200));				// this is the normal function to get value
//    			( OR )
const addVAT = addTax.bind(null,0.2);   // preset value
// ^ ( same ) addVAT = value => value + value * 0.22;

console.log(addVAT(200));

// another preset method -----------

const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};
const addVAT2 = addTaxRate(0.2);

console.log(addVAT2(200));  // addTaxRate(0.2)(200)

//////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people
 can choose, and an array with the number of replies for each
  option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll'
 object. The method does 2 things:
  1.1. Display a prompt window for the user to input the 
  number of the selected option. The prompt should look
   like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array.
   For example, if the option is 3, increase the value AT
    POSITION 3 of the array by 1. Make sure to check if
     the input is a number and if the number makes sense 
     (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer
 poll" button.

3. Create a method 'displayResults' which displays the
 poll results. The method takes a string as an input 
 (called 'type'), which can be either 'string' or 'array'. 
 If type is 'array', simply display the results array as it is,
  using console.log(). This should be the default option. 
  If type is 'string', display a string like "Poll results
   are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and 
the last section 😉

BONUS: Use the 'displayResults' method to display the 
2 arrays in the test data. Use both the 'array' and the 
'string' option. Do NOT put the arrays in the poll object! 
So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Java', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  rigisterNewAnswer(){
  	// Get answer
  	const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n (write options number)`));
  	console.log(answer);

  	// Register Answer 
	  typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
	  //															this.answer[0] is true ++
	  // console.log(this.answers);
	  this.displayResults();
	  this.displayResults('string');
  },

  displayResults(type = 'array'){
  	if (type === 'array') {
  		console.log(this.answers);
  	} else if (type === 'string') {
  		// Poll results are 13,10,9,6
  		console.log(`Poll results are ${this.answers.join(', ')}`);
  	}
  },

};

// poll.rigisterNewAnswer();
// console.log(poll.rigisterNewAnswer)

document.querySelector('.poll').addEventListener('click',poll.rigisterNewAnswer.bind(poll));

poll.displayResults.call({answers : [8,4,6]},'string');
poll.displayResults('string')
/////////////////////////////////////////////////////////////////
// Imediately Invoked functions Expressions

const runOnce = function () {
	console.log('This will never run again');
}
runOnce();

// IIFE
(function () {
	console.log('This will never run again');
	const isPrivae = 22;
})();

// =>
(() => console.log('This will ALSO never run again'))();
////////////////////////////////////////////////////////////////////

// Closuers

const secureBooking = function () {
	let passengerCount = 0;
	return function () {
		passengerCount++;
		console.log(`${passengerCount} Passengers`);
	};
};

const booker = secureBooking();
// console.log(booker); |-- SAME --| console.log(secureBooking()); 

secureBooking()();		// 1 Passengers
secureBooking()();		// 1 Passengers
secureBooking()();		// 1 Passengers
booker();			// 1 Passengers
booker();			// 2 Passengers
booker();			// 3 Passengers

console.dir(booker)

// const outer = function () {
// 	let outerValue = 22;
// 	let inner = function () {
// 		outerValue++;
// 		console.log(outerValue);		
// 	};
// 	return inner;
// }

// console.dir(outer())

// Example 1
let f;

const g = function () {
	const a = 23;

	f = function () {
		console.log(a * 2);
	};	
};

const h = function () {
	const b = 60;
	f = function () {
		console.log(b * 3);
	};
};

g();
f();

// Re-aasign f function
h()
f();

// Example 2

const boardPassenger = function (n,wait) {
	const perGroup = Math.trunc(n / 3);

	setTimeout(function () {
		console.log(`We are now boarding all ${n} pasengers`);
		console.log(`There are 3 groups, each with ${perGroup} pasengers`);
	},wait * 1000);

	console.log(`Will Start boarding in ${wait} seconds`)
};

const perGroup = 1000;
boardPassenger(180,3);

////////////////////////////////////////////////////////////////
// Coding Challenge 2

This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an 
event listener that changes the color of the selected h1 
element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this 
worked! Take all the time you need. Think about WHEN exactly 
the callback function is executed, and what that means for the 
variables involved in this example.

GOOD LUCK 😀
*/

// document.body.addEventListener('click',function () {
// 	document.querySelector('h1').style.color = 'blue';
// 	setTimeout(function () {
// 		document.querySelector('h1').style.color = 'white';
// 	},100)
// });

(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';

	document.body.addEventListener('click',function () {
		header.style.color = 'blue';
	});
})();











































