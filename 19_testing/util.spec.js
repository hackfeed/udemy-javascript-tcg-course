const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Sergey", 20);
  expect(text).toBe("Sergey (20 years old)");
});

test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Sergey", 20);
  expect(text).toBe("Sergey (20 years old)");
});

test("should click around", () => {
  puppeteer
    .launch({
      args: ["--window-size=1920,1080"],
    })
    .then((browser) => browser.newPage())
    .then((page) =>
      page.goto("file:///home/hackfeed/src/udemy-javascript-tcg-course/19_testing/index.html")
    )
    .then((page) => page.click("input#name"))
    .then((page) => page.type("input#name", "Sergey"))
    .then((page) => page.click("input#age"))
    .then((page) => page.type("input#age", "20"))
    .then((page) => page.click("#btnAddUser"))
    .then((page) => page.$eval(".user-item", (el) => el.textContent))
    .then((text) => expect(text).toBe("Sergey (20 years old)"));
});
