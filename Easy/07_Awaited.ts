//If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
//For example: if we have Promise<ExampleType> how to get ExampleType?

type MyAwaited<T extends Promise<unknown>> = 
T extends Promise<infer U> ? 
    U extends Promise<infer K> ? MyAwaited<U> : U
    : never;

type ExampleType = Promise<Promise<Promise<string>>>;

type Result2 = MyAwaited<ExampleType>; // string