const restaurant = {
  name: "Classical Italiano",
  location: "Via Angelo Tavanti 23, Firenze Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thurs: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

const airLine = "Pegasus Airlines";
const plane = "A320";

console.log(airLine.toLocaleLowerCase());
console.log(airLine.toUpperCase());

const passenger = "gAbrieL";
const passengerFized = passenger.toLowerCase();
const passengerCorrect =
  passengerFized[0].toUpperCase() + passengerFized.slice(1);
console.log(passengerCorrect);

const fixName = function (name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
};

//Compare Email

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const lower = loginEmail.toLowerCase();
const trimmed = lower.trim();
console.log(trimmed);

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = `All passengers come to barding door 23. Boarding door 23!`;

console.log(announcement.replaceAll("door", "gate"));

const planes = "A32neo";

console.log(planes.startsWith("A320"));

const checkBaggage = function (items) {
  const itemsText = items.toLowerCase();
  if (itemsText.includes("gun") || itemsText.includes("knife")) {
    console.log("You cannot board the plane");
  } else {
    console.log("You may board the plane");
  }
};

checkBaggage("I have a gun and want to board the plane");
checkBaggage("I have a knife and want to board the plane");
checkBaggage("I have a food and want to board the plane");

const passenger1 = "gabriel robert perez";
const capitalize = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalize(passenger1);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const camelCase = function (word) {
  const lower = word.toLowerCase();
  const remove = lower.replace(/_/g, "");
};

camelCase("GABriel_Perewz\r\nGaB_brr");

const flights =
  "_Delayed_Departure; fao93766109; tx12133758440;11:25+_Arrival;bru0943384722; fa093766109; 11:45+_Delayed_Arrival; hel7439299980; fa093766109;12:05+_Departure; fa093766109; lis2323639855;12:30";

console.log(flights.split("+"));

const airportCode = function (str) {
  return str.slice(0, 3).toUpperCase();
};

const airportCodes = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🛑" : ""}${type.replaceAll(
    "_",
    " "
  )} ${airportCodes(from)} to ${airportCode(to)} (${time.replaceAll(
    ":",
    "h"
  )})`.padStart(39);

  console.log(output);
}
