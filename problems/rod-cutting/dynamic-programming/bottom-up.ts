import { IProblemSolution, IProblemInput } from "../model";

export function bottomUpSolver(input: IProblemInput): IProblemSolution {
  const solutionLengths = bottomUpSolverAux(input.n, input.prices);
  const solution: IProblemSolution = { lengths: solutionLengths };
  return solution;
}

function bottomUpSolverAux(n: number, prices: number[]): number[] {
  const solutions: number[][] = [[0]];
  const maxRevenues: number[] = [0];

  for (let i = 1; i <= n; i++) {

    maxRevenues[i] = prices[i];
    solutions[i] = [i];

    for (let j = 1; j < i; j++) {
      let currRevenue = prices[j] + maxRevenues[i - j];
      if (currRevenue > maxRevenues[i]) {
        maxRevenues[i] = currRevenue;
        solutions[i] = [...solutions[i - j], j];
      }
    }
  }

  return solutions[n];
}
