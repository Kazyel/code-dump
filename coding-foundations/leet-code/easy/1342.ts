/**
 *  Leet Code - Number of Steps to Zero - Easy - 1342
 */

const numberOfSteps = (num: number): number => {
  let stepsCounter = 0;

  while (num > 0) {
    switch (num % 2) {
      case 0:
        num = num / 2;
        stepsCounter++;
        break;
      case 1:
        num--;
        stepsCounter++;
        break;
    }
  }

  return stepsCounter;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
