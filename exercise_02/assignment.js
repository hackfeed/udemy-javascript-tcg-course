const task3Element = document.getElementById("task-3");

function printStatement() {
  alert("Hi there!");
}

function printGreeting(name) {
  alert(`Hi ${name}!`);
}

printStatement();

const name = "Sergey";

printGreeting(name);

task3Element.addEventListener("click", printStatement);

function concatThree(str1, str2, str3) {
  return str1 + str2 + str3;
}

const concatenated = concatThree("Big", "Baby", "Tape");
alert(concatenated);
