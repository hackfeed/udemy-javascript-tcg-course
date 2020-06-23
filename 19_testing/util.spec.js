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

test("should create an element with correct text and class", async () => {
  const browser = await puppeteer.launch({
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("file:///home/hackfeed/src/udemy-javascript-tcg-course/19_testing/index.html");
  await page.click("input#name");
  await page.type("input#name", "Sergey");
  await page.click("input#age");
  await page.type("input#age", "20");
  await page.click("#btnAddUser");
  const text = await page.$eval(".user-item", (el) => el.textContent);
  expect(text).toBe("Sergey (20 years old)");
});
