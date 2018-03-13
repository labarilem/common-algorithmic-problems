import { IProblemSolution, IProblemInput, IParenthesis, IMatrix } from "../model";

export function bottomUpSolver(input: IProblemInput): IProblemSolution {
  const matrices = input.matrices;
  const bestParenthesization: IParenthesis[][][] = Array(input.matrices.length).fill(null).map((val, i) => new Array(input.matrices.length - i));
  const bestScore: number[][] = Array(input.matrices.length).fill(null).map((val, i) => new Array(input.matrices.length - i));
  const parenthesization = bottomUpSolverAux(matrices, bestParenthesization, bestScore);
  const solution: IProblemSolution = { parenthesization: bestParenthesization[0][matrices.length - 1] };
  return solution;
}

function bottomUpSolverAux(
  matrices: IMatrix[],
  bestParenthesization: IParenthesis[][][],
  bestScore: number[][]): void {

  for (let i = 0; i < matrices.length; i++) {
    const parens: IParenthesis = { startIndex: i, endIndex: i };
    bestScore[i][i] = 0;
    bestParenthesization[i][i] = [ parens ];
  }

  for (let parensSize = 1; parensSize < matrices.length; parensSize++) {
    for (let startIndex = 0; startIndex < matrices.length - parensSize; startIndex++) {

      const endIndex = startIndex + parensSize;
      let localBest: IParenthesis[] = [];
      let localBestScore: number = Number.MAX_SAFE_INTEGER;

      for (let splitIndex = startIndex; splitIndex < endIndex; splitIndex++) {
        const firstParens = { startIndex: startIndex, endIndex: splitIndex };
        const firstParenthesization = bestParenthesization[firstParens.startIndex][firstParens.endIndex];
        const firstScore = bestScore[firstParens.startIndex][firstParens.endIndex];

        const secondParens = { startIndex: splitIndex + 1, endIndex: endIndex };
        const secondParenthesization = bestParenthesization[secondParens.startIndex][secondParens.endIndex];
        const secondScore = bestScore[secondParens.startIndex][secondParens.endIndex];

        const score = firstScore + secondScore + matrices[firstParens.startIndex].rowsCount * matrices[firstParens.endIndex].columnsCount * matrices[secondParens.endIndex].columnsCount;

        if (score < localBestScore) {
          localBest = firstParenthesization.concat(...secondParenthesization);
          if (firstParenthesization.findIndex(p => p.startIndex === firstParens.startIndex && p.endIndex === firstParens.endIndex) < 0) {
            localBest.push(firstParens);
          }
          if (secondParenthesization.findIndex(p => p.startIndex === secondParens.startIndex && p.endIndex === secondParens.endIndex) < 0) {
            localBest.push(secondParens);
          }
          localBestScore = score;
        }
      }

      bestParenthesization[startIndex][endIndex] = localBest;
      bestScore[startIndex][endIndex] = localBestScore;
    }
  }

}
