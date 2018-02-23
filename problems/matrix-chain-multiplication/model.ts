/**
 * Matrix chain multiplication problem:
 * Given a sequence of matrices, the goal is to find the most efficient way to multiply these matrices.
 * The problem is not actually to perform the multiplications, but merely to decide the sequence of the matrix multiplications involved.
 */

export interface IMatrixInfo {
  rows: number;
  columns: number;
}

/**
* Represents the input of a Matrix chain multiplication problem instance.
*/
export interface IProblemInput {
  matrices: IMatrixInfo[]
}

/**
* Represents the solution of a Matrix chain multiplication problem instance.
*/
export interface IProblemSolution {
  lengths: number[];
}
