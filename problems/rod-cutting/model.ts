/**
 * Rod cutting problem:
 * Given a rod of length n and an array of prices that contains prices of all pieces of size smaller than n.
 * Determine the maximum value obtainable by cutting up the rod and selling the pieces.
 */

/**
* Represents the input of a Rod cutting problem instance.
* Prices is assumed to verify: prices[0] === 0.
*/
export interface IProblemInput {
  n: number;
  prices: number[];
}

/**
* Represents the solution of a Rod cutting problem instance.
*/
export interface IProblemSolution {
  lengths: number[];
}
