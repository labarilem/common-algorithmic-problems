import { IProblemSolution, IProblemInput } from "../model";

export function topDownMemoSolver(input: IProblemInput): IProblemSolution {
  const solutions: number[][] = [[0]];
  const maxRevenues: number[] = [0];
  const solutionLengths = topDownMemoSolverAux(input.n, input.prices, maxRevenues, solutions);
  const solution: IProblemSolution = { lengths: solutionLengths };
  return solution;
}

function topDownMemoSolverAux(n: number, prices: number[], maxRevenues: number[], solutions: number[][]): number[] {

  if (solutions[n] !== undefined) {
    return solutions[n];
  }

  maxRevenues[n] = prices[n];
  solutions[n] = [n];

  for (let i = 1; i < n; i++) {
    const subSolution = topDownMemoSolverAux(n - i, prices, maxRevenues, solutions);
    const currRevenue = prices[i] + maxRevenues[n - i];
    if (currRevenue > maxRevenues[n]) {
      maxRevenues[n] = currRevenue;
      solutions[n] = [...subSolution, i];
    }
  }

  return solutions[n];
}
