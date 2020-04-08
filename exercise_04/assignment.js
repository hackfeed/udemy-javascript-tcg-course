const sayHello1 = (name) => console.log("Hi " + name);

const sayHello2 = (name, greetingPhrase = "Hi") => console.log(greetingPhrase + " " + name);

const sayHello3 = () => console.log("Hi Seryozha!");

const sayHello4 = (name) => "Hi " + name;

const checkInput = (cb, ...input) => {
  if (input.length === 0) {
    cb();
  }

  for (const el of input) {
    if (el === "") {
      cb();
    }
  }
};

sayHello1("Seryozha");
sayHello2("Seryozha");
sayHello2("Seryozha", "Privet");
sayHello3();
checkInput(sayHello3, "Flex", "Cyber", "Prekol");
checkInput(sayHello3, "Flex", "Cyber", "");
checkInput(sayHello3);
