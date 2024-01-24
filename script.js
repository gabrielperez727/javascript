// "use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = "";
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
//   movs.forEach(function (mov, i, arr) {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const html = `<div class="movements">
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>

//       <div class="movements__value">${mov}€</div>
//     </div>`;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//   const income = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${income}€`;
//   const outgoing = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(outgoing)}€`;
//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((mov) => (mov * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   calcDisplayBalance(acc);
//   displayMovements(acc.movements);
//   calcDisplaySummary(acc);
// };

// let currentAccount;
// btnLogin.addEventListener("click", function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Welcome back ${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     containerApp.style.opacity = 100;
//     inputLoginUsername.value = inputLoginPin.value = "";
//     inputLoginPin.blur();
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAccount = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );
//   console.log(amount, receiverAccount);
//   if (
//     amount > 0 &&
//     receiverAccount &&
//     currentAccount.balance >= amount &&
//     receiverAccount?.username !== currentAccount.username
//   ) {
//     currentAccount.movements.push(-amount);
//     receiverAccount.movements.push(amount);
//     updateUI(currentAccount);
//     inputTransferAmount.value = inputTransferTo.value = "";
//   }
// });

// btnLoan.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputLoanAmount.value);
//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov >= amount * 0.1)
//   ) {
//     currentAccount.movements.push(amount);
//     updateUI(currentAccount);
//   }
// });

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     accounts.splice(index, 1);
//     containerApp.style.opacity = 0;
//   }
// });

// let sorted = false;
// btnSort.addEventListener("click", function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const totalDepositsUS = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(movements.includes(200));

// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

// const accountMovements = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(accountMovements);

// // const calcAverageHumanAge = function (age) {
// //   const humanAge = dogAges.map(function (age) {
// //     return age <= 2 ? age * 2 : 16 + age * 4;
// //   });

// //   const adults = humanAge.filter(function (age) {
// //     return age > 18;
// //   });

// //   const averageAge = adults.reduce(function (acc, age) {
// //     return acc + age / adults.length;
// //   }, 0);
// //   console.log(humanAge, adults, averageAge);
// //   return averageAge;
// // };

// // const calcAverageHumanAge2 = function (ages) {
// //   const average = ages
// //     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
// //     .filter((age) => age > 18)
// //     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// //   return average;
// // };

// // const avg1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// // console.log(avg1);

// // const deposits = movements.filter(function (mov) {
// //   return mov > 0;
// // });

// // const withdrawals = movements.filter(function (mov) {
// //   return mov < 0;
// // });
// // console.log(deposits);
// // console.log(withdrawals);

// // const max = movements.reduce(function (acc, mov) {
// //   if (acc > mov) return acc;
// //   else return mov;
// // }, movements[0]);

// // console.log(max);

// // const dogAges = [5, 2, 4, 1, 15, 8, 3];

// // const calcAverageHumanAge = function (age) {
// //   const humanAge = dogAges.map(function (age) {
// //     return age <= 2 ? age * 2 : 16 + age * 4;
// //   });

// //   const adults = humanAge.filter(function (age) {
// //     return age > 18;
// //   });

// //   const averageAge = adults.reduce(function (acc, age) {
// //     return acc + age / adults.length;
// //   }, 0);
// //   console.log(humanAge, adults, averageAge);
// //   return averageAge;
// // };

// // const avg1 = calcAverageHumanAge(dogAges);
// // console.log(avg1);

// // const convertName = function (accs) {
// //   accs.forEach(function (acc) {
// //     acc.username = acc.owner
// //       .toLowerCase()
// //       .split(" ")
// //       .map((name) => name[0])
// //       .join("");
// //   });
// // };
// // const user = "Gabriel Perez";
// // console.log(accounts);

// // const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// // const movementsUSDD = movements.map((mov) => mov * eurToUsd);

// // for (const mov of movements) console.log(movements);
// // console.log(movementsUSD);
// // console.log(movementsUSDD);

// // movements.map(function (move, i, arr) {});

// /////////////////////////////////////////////////

// // for (const [i, money] of movements.entries()) {
// //   if (money > 0) {
// //     console.log(`Transaction ${i + 1} You deposited ${money}`);
// //   } else {
// //     console.log(`Transaction ${i + 1} You withdrew ${Math.abs(money)}`);
// //   }
// // }
// // console.log("-------------");
// // movements.forEach(function (money, i, array) {
// //   if (money > 0) {
// //     console.log(`Transaction ${i + 1} You deposited ${money}`);
// //   } else {
// //     console.log(`Transaction ${i + 1} You withdrew ${Math.abs(money)}`);
// //   }
// // });

// // const presidents = ["Washington", "Adams", "Jefferson", "Madison"];

// // presidents.forEach(function (name, i, arr) {
// //   console.log(`President ${i + 1} ${name}`);
// // });

// // const dogsJulia = [3, 5, 2, 12, 7];
// // const dogsKate = [4, 1, 15, 8, 3];

// // const dogsJulia2 = [9, 16, 6, 8, 3];
// // const dogsKate2 = [10, 5, 6, 1, 4];

// // const checkDogs = function (dogsJulia, dogsKate) {
// //   const all = dogsJulia.slice(1, -2).concat(dogsKate);
// //   console.log(all);
// //   all.forEach(function (age, i, arr) {
// //     if (age >= 3) {
// //       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
// //     } else {
// //       console.log(`Dog number ${i + 1} is still a puppy`);
// //     }
// //   });
// // };

// // checkDogs(dogsJulia2, dogsKate2);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i);

// console.log(z);

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value")
//   );
// });

// // .map()
// const names = ["gAbe", "JOE", "CriS"];

// const toLowerCase = function (name) {
//   return name.toLowerCase;
// };

// const rightName = names.map(toLowerCase);

// //1)
// const bankDepositsSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// //2)
// const thousand = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 1000).length;

// //3
// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// //

// // const dogsJulia = [3, 5, 2, 12, 7];
// // const dogsKate = [4, 1, 15, 8, 3];

// // const checkDogs = function (dogsJulia, dogsKate) {
// //   const julia = dogsJulia.slice();
// //   julia.splice(0, 1);
// //   julia.splice(-2);
// //   const allDogs = julia.concat(dogsKate);
// //   allDogs.forEach(function (age, i) {
// //     if (age >= 3) {
// //       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
// //     } else if (age < 3) {
// //       console.log(`Dog number ${i + 1} is a puppy, and is ${age} years old`);
// //     }
// //   });
// // };

// // checkDogs(dogsJulia, dogsKate);

// // const dogAges = [5, 2, 4, 1, 15, 8, 2];

// // const calcAverageHumanAge = function (ages) {
// //   const humanYears = ages.map((ages) => (ages <= 2 ? ages * 2 : 16 + ages * 4));
// //   const adults = humanYears.filter((age) => age >= 18);
// //   const avergae = humanYears.reduce(
// //     (acc, age, i, arr) => acc + age / arr.length,
// //     0
// //   );
// //   console.log(humanYears);
// //   console.log(adults);
// //   console.log(avergae);
// // };

// // const calcAverageHumanAge2 = (ages) => {
// //   const humanYears = ages
// //     .map((ages) => (ages <= 2 ? ages * 2 : 16 + ages * 4))
// //     .filter((age) => age >= 18);
// //   console.log(humanYears);
// // };

// // calcAverageHumanAge(dogAges);
// // calcAverageHumanAge2(dogAges);

// // dogs.forEach((dog) => {
// //   dog.recommendedFood = dog.weight ** 0.75 * 28;
// // });

// // console.log(dogs);

// // const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// // console.log(
// //   `${sarahDog.owners.join(" and ")}'s dog is eating ${
// //     sarahDog.curFood > sarahDog.recommendedFood ? "too much" : "too little"
// //   }`
// // );

// // const ownerEatTooMuch = dogs
// //   .filter((dog) => dog.curFood > dog.recommendedFood)
// //   .flatMap((dog) => dog.owners);
// // const ownersEatTooLittle = dogs
// //   .filter((dog) => dog.curFood < dog.recommendedFood)
// //   .flatMap((dog) => dog.owners);
// // console.log(ownerEatTooMuch);
// // console.log(ownersEatTooLittle);
// // console.log(sarahDog);

// // console.log(
// //   `${ownerEatTooMuch.join(" and ")} eat too much and ${ownersEatTooLittle.join(
// //     " and "
// //   )} eat too little`
// // );

// // const eatingRight = dogs.some((dog) => dog.curFood === dog.recommendedFood);
// // console.log(`Any dog eating exactly the recommended amount: ${eatingRight}`);

// // console.log(eatingRight);

// // const dogs = [
// //   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
// //   { weight: 8, curFood: 200, owners: ["Matilda"] },
// //   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
// //   { weight: 32, curFood: 340, owners: ["Michael"] },
// // ];

// // dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// // console.log(dogs);

// // const sarahDog = dogs.find((dogs) => dogs.owners.includes("Sarah"));
// // console.log(sarahDog);

// // console.log(
// //   `Sarah's dog is eating ${
// //     sarahDog.curFood > sarahDog.recFood ? "too much" : "too little"
// //   }`
// // );

// // const ownersEatTooMuch = dogs
// //   .filter((dogs) => dogs.curFood > dogs.recFood)
// //   .flatMap((dogs) => dogs.owners);

// // console.log(ownersEatTooMuch);

// // console.log(
// //   `Is there a dog eating exaxtly the right amount of food: ${dogs.includes(
// //     (dog) => dogs.curFood === dogs.recFood
// //   )}`
// // );

// // console.log(
// //   `Is there a dog eating an okay amount of food: ${dogs.some(
// //     (dog) => dogs.curFood < dogs.recFood
// //   )}`
// // );

"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(Number.parseFloat(2.4));
// console.log(Number.parseInt(2.4));
// console.log(Math.sqrt(36));
// console.log(Math.trunc(Math.random() * 10 + 1));
// console.log(45 % 12);

// const isEven = (num) =>
//   num % 2 === 0 ? console.log("even") : console.log("odd");

// isEven(4);

// const number = 300_000;
// console.log(number);

// console.log(10000n + 10000n);
