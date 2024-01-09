"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i, arr) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (movements) {
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;
  const outgoing = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;
  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * 0.012)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const totalDepositsUS = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUS);

const calcAverageHumanAge = function (age) {
  const humanAge = dogAges.map(function (age) {
    return age <= 2 ? age * 2 : 16 + age * 4;
  });

  const adults = humanAge.filter(function (age) {
    return age > 18;
  });

  const averageAge = adults.reduce(function (acc, age) {
    return acc + age / adults.length;
  }, 0);
  console.log(humanAge, adults, averageAge);
  return averageAge;
};

const calcAverageHumanAge2 = function (ages) {
  const average = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};

const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(deposits);
// console.log(withdrawals);

// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

// const dogAges = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (age) {
//   const humanAge = dogAges.map(function (age) {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });

//   const adults = humanAge.filter(function (age) {
//     return age > 18;
//   });

//   const averageAge = adults.reduce(function (acc, age) {
//     return acc + age / adults.length;
//   }, 0);
//   console.log(humanAge, adults, averageAge);
//   return averageAge;
// };

// const avg1 = calcAverageHumanAge(dogAges);
// console.log(avg1);

// const convertName = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// const user = "Gabriel Perez";
// console.log(accounts);

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSDD = movements.map((mov) => mov * eurToUsd);

// for (const mov of movements) console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDD);

// movements.map(function (move, i, arr) {});

/////////////////////////////////////////////////

// for (const [i, money] of movements.entries()) {
//   if (money > 0) {
//     console.log(`Transaction ${i + 1} You deposited ${money}`);
//   } else {
//     console.log(`Transaction ${i + 1} You withdrew ${Math.abs(money)}`);
//   }
// }
// console.log("-------------");
// movements.forEach(function (money, i, array) {
//   if (money > 0) {
//     console.log(`Transaction ${i + 1} You deposited ${money}`);
//   } else {
//     console.log(`Transaction ${i + 1} You withdrew ${Math.abs(money)}`);
//   }
// });

// const presidents = ["Washington", "Adams", "Jefferson", "Madison"];

// presidents.forEach(function (name, i, arr) {
//   console.log(`President ${i + 1} ${name}`);
// });

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const all = dogsJulia.slice(1, -2).concat(dogsKate);
//   console.log(all);
//   all.forEach(function (age, i, arr) {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs(dogsJulia2, dogsKate2);
