// Implement the built-in Exclude<T, U>
type MyExclude<T, U extends T> = T extends U ? never : T; 

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'