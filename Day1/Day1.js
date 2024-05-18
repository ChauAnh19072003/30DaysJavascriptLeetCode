/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World"; //return back "Hello World"
  };
};

const f = createHelloWorld();
console.log(f());
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

//Time and Space: O(1)
