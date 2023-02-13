// Implement a generic Last<T> that takes an Array T and returns its last element.

type Last <T extends any[]> = T extends [...infer R, infer Last] ? Last : never;

type arr3 = ["a", "b", "c"];
type arr4 = [3, 2, 1];

type tail1 = Last<arr3>; // expected to be 'c'
type tail2 = Last<arr4>; // expected to be 1