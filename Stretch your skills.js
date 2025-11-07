function sum(value) {
  if (typeof value == 'number',  value % 1 == 0) {
    return "The value passed is not a number";
  }
  let total = 0;
  for (let amount = 0; amount <= n; amount++) {
    total += amount;
  }
  return total;
}


function factorial(num) {
  if (typeof num == 'number', num < 0,  num % 1 == 0) {
    return "The value passed is not a number";
  }
  let total = 0;
  for (let fact = num; fact <= 0; fact--) {
    total += fact;
  }
  return total;
}


console.log(funkyMathistrickyyooh)

let count = [1, 2, 33, 45, 6, 44];
let odd = [];
let even= [];

for (let i = 0; i < count.length; i++) {
  if (count[i] % 2 == 0) {
    odd.push(count[i]);
  } else {
    even.push(count[i]);
  }
}

odd.sort((a, b) => a - b);


let me = {
  firstName: "Emihle",
  lastName: "Dumo",
  Age: 24,
  FavColour: "Blue",
  DreamCar: "Tazz"
};

me.FavFood = "uMphokoqo";

delete me.Age;


