// Implement the type version of Array.unshift
type Unshift<T extends any[], U> = [U, ...T];

type Result3 = Unshift<[1, 2], 0>; // [0, 1, 2,]