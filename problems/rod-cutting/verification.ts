import { IProblemOutput, IProblemInput } from "./model";
import { expect } from "chai";

export function testSolver(solver: (input: IProblemInput) => IProblemOutput): void {
  const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  const expectedMaxRevenues = [0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30];

  for (let n = 0; n++; n <= 11) {
    const output = solver({ n: n, prices: prices });
    const revenue = output.lenghts.map(l => prices[l]).reduce((prev, curr) => prev + curr);

    const isValidOut = isValidOutput({ prices: prices, n: n }, output)
    const isMaxRevenue = revenue === expectedMaxRevenues[n];
    expect(isValidOut, "The output of the solver must be valid.").to.be.true;
    expect(isMaxRevenue, "The solution must provide maximum revenue.").to.be.true;
  }
}

function isValidOutput(input: IProblemInput, out: IProblemOutput): boolean {
  const isValid = out.lenghts.reduce((prev, curr) => prev + curr) === input.n;
  return isValid;
}
