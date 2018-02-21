import { IProblemOutput, IProblemInput } from "./model";
import { expect } from "chai";

export function testSolver(solver: (input: IProblemInput) => IProblemOutput): void {
  const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  const expectedMaxRevenues = [0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30];

  for (let n = 0; n <= 11; n++) {
    const input = { n: n, prices: prices };
    const output = solver(input);

    const isValidOut = isValidOutput(input, output);
    expect(isValidOut, "The output of the solver must be valid for n = " + n + ". " + JSON.stringify(output)).to.be.true;

    const revenue = output.lengths.map(l => prices[l]).reduce((prev, curr) => prev + curr);
    const expectedMax = expectedMaxRevenues[n];
    expect(revenue, "The solution must provide maximum revenue for n = " + n + ".").to.equal(expectedMax);
  }
}

function isValidOutput(input: IProblemInput, out: IProblemOutput): boolean {
  const isNonEmpty = out.lengths.length > 0;
  if(!isNonEmpty) {
    return false;
  }
  const hasValidLengths = out.lengths.reduce((prev, curr) => prev + curr) === input.n;
  return hasValidLengths;
}

