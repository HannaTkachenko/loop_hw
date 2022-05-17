const guess = function () {
  let result = 0;
  while (true) {
    const input = Number(prompt("guess number", 0));
    if (isNaN(input) || input === " " || input < 0) {
      console.log("input positive number!");
      continue;
    }
    result++;
    if (input < SECRET_NUMBER) {
      console.log("my number is more");
      continue;
    }
    if (input > SECRET_NUMBER) {
      console.log("my number is less");
      continue;
    }
    console.log("you`re right!");
    break;
  }
  console.log("your attempts: " + result);
};
guess();
