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
    expectedParenthesization: "(0, 1)"
  });

  // Test case #2
  testCases.push({
    matrices: [
      { rowsCount: 10, columnsCount: 30 },
      { rowsCount: 30, columnsCount: 5 },
      { rowsCount: 5, columnsCount: 60 },
    ],
    expectedParenthesization: "((0, 1), 2)"
  });

  // Test case #3
  testCases.push({
    matrices: [
      { rowsCount: 5, columnsCount: 10 },
      { rowsCount: 10, columnsCount: 3 },
      { rowsCount: 3, columnsCount: 12 },
      { rowsCount: 12, columnsCount: 5 },
      { rowsCount: 50, columnsCount: 6 }
    ],
    expectedParenthesization: "((0, 1), ((2, 3), (4, 5)))"
  });

  // Test case #4
  testCases.push({
    matrices: [
      { rowsCount: 30, columnsCount: 35 },
      { rowsCount: 35, columnsCount: 15 },
      { rowsCount: 15, columnsCount: 5 },
      { rowsCount: 15, columnsCount: 5 },
      { rowsCount: 15, columnsCount: 5 },
      { rowsCount: 15, columnsCount: 5 },
    ],
    expectedParenthesization: "((0, 1), 2)"
  });


  // multiplier = parenthesization.MatrixChainMultiplier([30, 35, 15, 5, 10, 20, 25])
  // self.assertEqual(multiplier.parenthesize(), '((0, (1, 2)), ((3, 4), 5))')


  testCases.forEach(testCase => {
    let output = solver({ matrices: testCase.matrices });
    expect(output).to.exist;
    let stringified = stringifyParenthesization(output.parenthesization);
    expect(stringified).to.equal(testCase.expectedParenthesization);
  });
}

function stringifyParenthesization(parenthesization: IParenthesis[]): string {
  let stringified = '';

  parenthesization.forEach(paren => {
    stringified = '(' + ')'
  });

  return stringified;
}
