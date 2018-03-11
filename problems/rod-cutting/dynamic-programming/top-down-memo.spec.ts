import { testSolver } from "../verification";
import { topDownMemoSolver } from "./top-down-memo";

describe("Rod cutting - Dynamic programming - Top-down memoization", () => {
  testSolver(topDownMemoSolver);
});
