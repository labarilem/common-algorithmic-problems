/**
 * Matrix chain multiplication problem:
 * Given a sequence of matrices, the goal is to find the most efficient way to multiply these matrices.
 * The problem is not actually to perform the multiplications, but merely to decide the sequence of the matrix multiplications involved.
 */

/**
* Represents the input of a Matrix chain multiplication problem instance.
*/
export interface IProblemInput {
  matrices: IMatrix[]
}

/**
* Represents the solution of a Matrix chain multiplication problem instance.
*/
export interface IProblemSolution {
  parenthesization: IParenthesis[];
}

/**
 * Represents a parenthesis applied to a sequence of matrices.
 */
export interface IParenthesis {
  startIndex: number;
  endIndex: number;
}

/**
 * Represents the matrix informations that needed in this problem.
 */
export interface IMatrix {
  rowsCount: number;
  columnsCount: number;
}
