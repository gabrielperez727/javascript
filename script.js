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
