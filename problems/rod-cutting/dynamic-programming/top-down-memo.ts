import { IProblemOutput, IProblemInput } from "../model";

export function topDownMemoSolver(input: IProblemInput): IProblemOutput {
  const solutions: IProblemOutput[] = [ { lengths: [0] } ];
  const output = topDownMemoSolverAux(input, solutions);
  return output;
}

function topDownMemoSolverAux(input: IProblemInput, solutions: IProblemOutput[]): IProblemOutput {

  if(solutions[input.n] !== undefined) {
    return solutions[input.n];
  }

  let max = input.prices[input.n];
  solutions[input.n] = { lengths: [input.n] };

  for(let i = 1; i < input.n; i++) {
    const inp = { n: input.n - i, prices: input.prices };
    const out = topDownMemoSolverAux(inp, solutions);
    const currRevenue = input.prices[i] + computeRevenue(inp, out);
    if(currRevenue > max) {
      max = currRevenue;
      solutions[input.n] = { lengths: [...out.lengths, input.n - i] };
    }
  }

  return solutions[input.n];
}

function computeRevenue(input: IProblemInput, out: IProblemOutput): number {
  return out.lengths.map(l => input.prices[l]).reduce((p, c) => p + c );
}
