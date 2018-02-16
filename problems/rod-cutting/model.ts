/**
 * Rod cutting problem
 * Given a rod of length n and an array of prices that contains prices of all pieces of size smaller than n.
 * Determine the maximum value obtainable by cutting up the rod and selling the pieces. 
 */

/**
* Problem input.
* Prices is assumed to verify: prices[0] === 0
*/
export interface IProblemInput {
  n: number;
  prices: number[];
}

/**
* Problem output.
*/
export interface IProblemOutput {
  lenghts: number[];
}
