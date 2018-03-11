import { testSolver } from "../verification";
import { bottomUpSolver } from "./bottom-up";

describe("Rod cutting - Dynamic programming - Bottom-up", () => {
  testSolver(bottomUpSolver);
});
