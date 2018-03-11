import { IProblemSolution, IProblemInput } from "./model";
import { expect } from "chai";

export function testSolver(solver: (input: IProblemInput) => IProblemSolution): void {
  const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  const expectedMaxRevenues = [0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30];

  for (let n = 0; n <= 11; n++) {
    it("Solves test case #" + n.toString(), () => {
      const input = { n: n, prices: prices };
      const output = solver(input);

      expect(output.lengths, "The solution must be non-empty.").to.not.be.empty;

      const hasValidLengths = output.lengths.reduce((prev, curr) => prev + curr) === input.n;
      expect(hasValidLengths, `The solution must have valid cuts (n=${n}). Solution: ${JSON.stringify(output.lengths)}`).to.be.true;

      const revenue = output.lengths.map(l => prices[l]).reduce((prev, curr) => prev + curr);
      const expectedMax = expectedMaxRevenues[n];
      expect(revenue, `The solution must provide maximum revenue (n=${n}). Solution: ${JSON.stringify(output.lengths)}`).to.equal(expectedMax);
    });
  }
}
