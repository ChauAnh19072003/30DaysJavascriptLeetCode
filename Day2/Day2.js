/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = n - 1;
  return function () {
    counter += 1;
    return counter;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//Time and Space: O(n)

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Given an integer n, return a counter function.
//This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//Constraints:
// -1000 <= n <= 1000
// 0 <= calls.length <= 1000
// calls[i] === "call" => Require that every element in the array "calls" must be the string "call"
