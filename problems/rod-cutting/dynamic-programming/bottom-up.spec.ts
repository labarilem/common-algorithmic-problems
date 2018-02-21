import { testSolver } from "../verification";
import { bottomUpSolver } from "./bottom-up";

describe("Rod cutting - Dynamic programming - Bottom-up", () => {
  it.skip("is a valid solver", () => {
    testSolver(bottomUpSolver);
  });
});
