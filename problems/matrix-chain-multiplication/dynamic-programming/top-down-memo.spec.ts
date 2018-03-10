import { testSolver } from "../verification";
import { topDownMemoSolver } from "./top-down-memo";

describe("Matrix chain multiplication - Dynamic programming - Top-down memoization", () => {
  it("is a valid solver", () => {
    testSolver(topDownMemoSolver);
  });
});
