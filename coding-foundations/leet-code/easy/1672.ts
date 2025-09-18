/**
 *  Leet Code - Richest Customer Wealth - Easy - 1672
 */

const richestCustomerWealth = (accounts: number[][]): number => {
  let richestAccount = 0;

  for (let i = 0; i < accounts.length; i++) {
    let moneyCount = 0;

    for (let j = 0; j < accounts[i]!.length; j++) {
      moneyCount += accounts[i]![j]!;
      richestAccount = moneyCount > richestAccount ? moneyCount : richestAccount;
    }
  }

  return richestAccount;
};

console.log(
  richestCustomerWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(
  richestCustomerWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

console.log(
  richestCustomerWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
