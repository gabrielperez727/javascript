"use strict";

// const flight = "LH234";
// const gabe = {
//   name: "Gabriel Perez",
//   passport: 23848239482,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;
//   if (passenger.passport === 23848239482) {
//     alert("Check In");
//   } else {
//     alert("wrong passport");
//   }
// };

// // checkIn(flight, gabe);
// // console.log(flight);
// // console.log(gabe);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(gabe);
// checkIn(flight, gabe);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//   console.log(`Trasnformed by: ${fn.name}`);
// };

// transformer("Javascript is the best", oneWord);

// const passenger = {
//   name: "Gabriel Perez",
//   nation: "USA",
// };

// const passenger2 = {
//   name: "Gabriel Perez",
//   nation: "Turkey",
// };

// const isAmerican = function (passenger) {
//   if (passenger.nation === "USA") {
//     console.log("Is American");
//     return true;
//   }
// };

// const entry = function (passenger, fn) {
//   if (fn(passenger)) {
//     console.log(`American, please enter`);
//   } else {
//     console.log(`Proceed to Passport check`);
//   }
// };

// entry(passenger2, isAmerican);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHi = greet("Hey");
// greeterHi("Jonas");

// const greets => greeting

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Gabriel");
// lufthansa.book(645, "Thiel");
// console.log(lufthansa);

// const euroWings = {
//   airline: "EuroWings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(euroWings, 23, "Gabe");
// book.call(lufthansa, 239, "Amari Cooper");

// const flightdata = [676, "Obama"];

// book.call(euroWings, ...flightdata);

// const bookEW = book.bind(euroWings);
// bookEW(323, "Ghandi");

// const bookEW23 = book.bind(euroWings, 23);
// bookEW23("Young Thug");

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(123));

// const addTax = function (rate, value) {
//   return value + value * rate;
// };

// const addVAT = function (val, fn) {
//   return fn(val);
// };

// console.log(addVAT(100, addTax));
