import { testSolver } from "../verification";
import { bottomUpSolver } from "./bottom-up";

describe("Matrix chain multiplication - Dynamic programming - Bottom-up", () => {
  testSolver(bottomUpSolver);
});
