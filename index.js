const guess = function () {
  let result = 0;
  while (true) {
    const input = Number(prompt("guess number", 0));
    if (isNaN(input === " " || input < 0)) {
      console.log("input number!");
      return false;
    }
    result++;
    if (input < SECRET_NUMBER) {
      console.log("more");
      continue;
    }
    if (input > SECRET_NUMBER) {
      console.log("less");
      continue;
    }
    console.log("right");
    break;
  }
  console.log(result);
};
guess();
