const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random();
const numbers = [1, 2, 3, 4, 5];

function isInvalid(number) {
  if (number > 0.7) {
    alert("Your number sucks :|");
  }
}

function arrayLoop(array) {
  for (const el of array) {
    console.log(el);
  }
  console.log("-------");
  for (let i = array.length - 1; i > -1; --i) {
    console.log(array[i]);
  }
}

function rndCrew(number1, number2) {
  if (number1 > 0.7 && number2 > 0.7) {
    alert("Both sucks > 0.7");
  } else if (number1 <= 0.2 || number2 <= 0.2) {
    alert("At least one of them don't suck");
  }
}

isInvalid(randomNumber);
arrayLoop(numbers);
rndCrew(randomNumber, anotherRandomNumber);
