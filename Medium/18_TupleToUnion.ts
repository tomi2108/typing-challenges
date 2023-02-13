//Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

type TupleToUnion <T extends any[]> = T extends [infer F, ...infer R] ? F | TupleToUnion<R> : never;
type TupleToUnion2 <T extends any[]> = T[number];

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>;
type Test2 = TupleToUnion2<Arr>;