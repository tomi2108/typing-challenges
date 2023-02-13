// Implement the generic version of Array.push

type Push<T extends any[], U> = [...T, U];

type Result5 = Push<[1, 2], "3">; // [1, 2, '3']