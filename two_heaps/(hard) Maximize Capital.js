const Heap = require("./collections/heap");

const find_maximum_capital = function (
  capital,
  profits,
  numberOfProjects,
  initialCapital
) {
  //TODO: Write your code here
  const minCapitalHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  const maxProfitHeap = new Heap([], null, (a, b) => a - b);

  for (let i = 0; i < capital.length; i++) {
    minCapitalHeap.push([capital[i], i]);
  }
  let availableCapital = initialCapital;
  for (let i = 0; i < numberOfProjects; i++) {
    while (
      minCapitalHeap.length > 0 &&
      minCapitalHeap.peek()[0] <= availableCapital
    ) {
      [index] = minCapitalHeap.pop();
      maxProfitHeap.push(profits[index]);
    }
    if (maxProfitHeap.length === 0) {
      break;
    }
    availableCapital += maxProfitHeap.pop();
  }
  return availableCapital;
};

// Time complexity: O(nlogN + klogN)
// Space complexity: O(n)

console.log(
  `Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`
);
console.log(
  `Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`
);
