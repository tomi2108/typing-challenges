/*
Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
*/
type MyReadonly2<T, K = unknown > = {readonly[U in keyof T as U extends K ? U : never]:T[U]} &
{[U in keyof T as U extends K ? never : U] : T[U]}; 


interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo4: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false
};

todo4.title = "Hello"; // Error: cannot reassign a readonly property
todo4.description = "barFoo"; // Error: cannot reassign a readonly property
todo4.completed = true; // OK