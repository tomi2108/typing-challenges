/*
 Implement the built-in Omit<T, K> generic without using it.
Constructs a type by picking all properties from T and then removing K
 */

type MyOmit<T, U extends keyof T> = {[P in keyof T as P extends U ? never : P]:T[P]};

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview2 = MyOmit<Todo, "description" | "title">;

const todo3: TodoPreview2 = {
    completed: false
};