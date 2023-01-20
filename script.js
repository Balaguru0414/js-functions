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
*/















