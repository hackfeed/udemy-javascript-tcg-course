class Course {
  #_price;

  set price(pr) {
    if (pr < 0) {
      this.#_price = 0;
    } else {
      this.#_price = pr;
    }
  }

  get price() {
    return `$${this.#_price}`;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  getPricePerHour() {
    return this.#_price / this.length;
  }

  describe() {
    return `${this.length} hours of ${this.title} for ${this.price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercices) {
    super(title, length, price);
    this.numOfExercices = numOfExercices;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log(`Welcome to "${this.title}" theoretical course!`);
  }
}

const someCourse = new Course("JavaScript Course", 5, 9.99);
const anotherCourse = new Course("NodeJS Course", 3, 5.99);

const somePracticalCourse = new PracticalCourse("OOP", 100, 59.99, 20);
const someTheoreticalCourse = new TheoreticalCourse("Physics", 10, 0.99);

console.log(someCourse, anotherCourse);
console.log(someCourse.getPricePerHour(), someCourse.describe());
console.log(anotherCourse.getPricePerHour(), anotherCourse.describe());

console.log(somePracticalCourse, someTheoreticalCourse);
console.log(somePracticalCourse.getPricePerHour(), somePracticalCourse.describe());
console.log(someTheoreticalCourse.getPricePerHour(), someTheoreticalCourse.describe());
console.log(somePracticalCourse.numOfExercices, someTheoreticalCourse.publish());

console.log(someTheoreticalCourse._price);
