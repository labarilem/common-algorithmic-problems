import { IProblemSolution, IProblemInput, IParenthesis, IMatrix } from "../model";

export function topDownMemoSolver(input: IProblemInput): IProblemSolution {
  const matrices = input.matrices;
  const wholeParenthesis: IParenthesis = { startIndex: 0, endIndex: matrices.length - 1 };
  const defaultBestParenthesization: IParenthesis[] = [];
  const parenthesization = topDownMemoSolverAux(matrices, wholeParenthesis, []);
  const solution: IProblemSolution = { parenthesization: parenthesization };
  return solution;
}

function topDownMemoSolverAux(matrices: IMatrix[], parenthesis: IParenthesis, bestParenthesization: IParenthesis[]): IParenthesis[] {


  return [];


}
