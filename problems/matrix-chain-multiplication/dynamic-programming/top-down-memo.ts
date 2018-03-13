import { IProblemSolution, IProblemInput, IParenthesis, IMatrix } from "../model";

export function topDownMemoSolver(input: IProblemInput): IProblemSolution {
  const matrices = input.matrices;
  const wholeParenthesis: IParenthesis = { startIndex: 0, endIndex: matrices.length - 1 };
  const defaultBestParenthesization: IParenthesis[][][] = Array(input.matrices.length).fill(null).map((val, i) => new Array(input.matrices.length - i));
  const defaultBestScore: number[][] = Array(input.matrices.length).fill(null).map((val, i) => new Array(input.matrices.length - i));
  const parenthesization = topDownMemoSolverAux(matrices, wholeParenthesis, defaultBestParenthesization, defaultBestScore);
  const solution: IProblemSolution = { parenthesization: parenthesization };
  return solution;
}

function topDownMemoSolverAux(
  matrices: IMatrix[],
  parenthesis: IParenthesis,
  bestParenthesization: IParenthesis[][][],
  bestScore: number[][]): IParenthesis[] {

  const memoized = bestParenthesization[parenthesis.startIndex][parenthesis.endIndex];
  if (memoized) {
    return memoized;
  }

  if(parenthesis.startIndex === parenthesis.endIndex) {
    const localBest = [parenthesis];
    bestParenthesization[parenthesis.startIndex][parenthesis.endIndex] = localBest;
    bestScore[parenthesis.startIndex][parenthesis.endIndex] = 0;
    return localBest;
  }

  let localBest: IParenthesis[] = [];
  let localBestScore: number = Number.MAX_SAFE_INTEGER;

  for (let i = parenthesis.startIndex; i < parenthesis.endIndex; i++) {

    const firstParens = { startIndex: parenthesis.startIndex, endIndex: i };
    const firstParenthesization = topDownMemoSolverAux(matrices, firstParens, bestParenthesization, bestScore);
    const firstScore = bestScore[firstParens.startIndex][firstParens.endIndex];

    const secondParens = { startIndex: i + 1, endIndex: parenthesis.endIndex };
    const secondParenthesization = topDownMemoSolverAux(matrices, secondParens, bestParenthesization, bestScore);
    const secondScore = bestScore[secondParens.startIndex][secondParens.endIndex];

    const score = firstScore + secondScore + matrices[firstParens.startIndex].rowsCount *  matrices[firstParens.endIndex].columnsCount * matrices[secondParens.endIndex].columnsCount;

    if(score < localBestScore) {
      localBest = firstParenthesization.concat(...secondParenthesization);
      if(firstParenthesization.findIndex(p => p.startIndex === firstParens.startIndex && p.endIndex === firstParens.endIndex) < 0) {
        localBest.push(firstParens);
      }
      if(secondParenthesization.findIndex(p => p.startIndex === secondParens.startIndex && p.endIndex === secondParens.endIndex) < 0) {
        localBest.push(secondParens);
      }
      localBestScore = score;
    }
  }

  bestParenthesization[parenthesis.startIndex][parenthesis.endIndex] = localBest;
  bestScore[parenthesis.startIndex][parenthesis.endIndex] = localBestScore;

  return localBest;
}
