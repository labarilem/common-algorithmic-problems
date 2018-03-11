import { IProblemSolution, IProblemInput, IParenthesis, IMatrix } from "./model";
import { expect } from "chai";

export function testSolver(solver: (input: IProblemInput) => IProblemSolution): void {

  const testCases: { matrices: IMatrix[], expectedParenthesization: string }[] = [];

  // Test case #0
  testCases.push({
    matrices: [
      { rowsCount: 1, columnsCount: 2 }
    ],
    expectedParenthesization: "(0)"
  });

  // Test case #1
  testCases.push({
    matrices: [
      { rowsCount: 1, columnsCount: 2 },
      { rowsCount: 2, columnsCount: 3 }
    ],
    expectedParenthesization: "(0)(1)"
  });

  // Test case #2
  testCases.push({
    matrices: [
      { rowsCount: 10, columnsCount: 30 },
      { rowsCount: 30, columnsCount: 5 },
      { rowsCount: 5, columnsCount: 60 },
    ],
    expectedParenthesization: "((0)(1))(2)"
  });

  // Test case #3
  testCases.push({
    matrices: [
      { rowsCount: 5, columnsCount: 10 },
      { rowsCount: 10, columnsCount: 3 },
      { rowsCount: 3, columnsCount: 12 },
      { rowsCount: 12, columnsCount: 5 },
      { rowsCount: 5, columnsCount: 50 },
      { rowsCount: 50, columnsCount: 6 }
    ],
    expectedParenthesization: "((0)(1))(((2)(3))((4)(5)))"
  });

  // Test case #4
  testCases.push({
    matrices: [
      { rowsCount: 30, columnsCount: 35 },
      { rowsCount: 35, columnsCount: 15 },
      { rowsCount: 15, columnsCount: 5 },
      { rowsCount: 5, columnsCount: 10 },
      { rowsCount: 10, columnsCount: 20 },
      { rowsCount: 20, columnsCount: 25 },
    ],
    expectedParenthesization: "((0)((1)(2)))(((3)(4))(5))"
  });

  for(let i = 0; i < testCases.length; i++) {
    it('Solves test case #' + i.toString(), () => {
      let output = solver({ matrices: testCases[i].matrices });
      expect(output).to.exist;
      let stringified = stringifyParenthesization(testCases[i].matrices, output.parenthesization);
      expect(stringified).to.equal(testCases[i].expectedParenthesization);
    });
  }
}

function stringifyParenthesization(matrices: IMatrix[], parenthesization: IParenthesis[]): string {
  const stringified: string[] = Array(matrices.length).fill('');
  const openParens: number[] = Array(matrices.length).fill(0);
  const closedParens: number[] = Array(matrices.length).fill(0);

  parenthesization.forEach(paren => {
    openParens[paren.startIndex] +=  1;
    closedParens[paren.endIndex] +=  1;
  });

  for(let i = 0; i < matrices.length; i++) {
    stringified[i] = Array(openParens[i]).fill('(').join('') + i.toString() + Array(closedParens[i]).fill(')').join('');
  }

  return stringified.join('');
}
