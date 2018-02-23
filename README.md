# common-algorithmic-problems

![Build status](https://travis-ci.org/labarilem/common-algorithmic-problems.svg?branch=master)

This repository contains solutions to common algorithmic problems coded in Javascript/Typescript. Each solver algorithm is tested.

## Problems solved

- Matrix chain multiplication ([problem statement](https://en.wikipedia.org/wiki/Matrix_chain_multiplication))
- Rod cutting ([problem statement](https://www.geeksforgeeks.org/dynamic-programming-set-13-cutting-a-rod/))

## Project structure

The project structure can be summarized with the following schema:

- *Problems*
  - *Problem folder*
    - *Model and test code*
    - *Solution type folder*
      - *Solution(s) code*

The algorithms code is stored in the `problems` folder. Each problem has its own folder, stored as a subfolder of `problems`. These folders contain solutions grouped by method (e.g. dynamic programming, greedy strategy, etc.), model files describing input/output of the problem and verification code that can be used to test a solution.

## How to run tests

The following command will run all the tests with Mocha + Chai:

```bash
npm test
```
