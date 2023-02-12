// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

type Includes<T extends any[],U> = T extends [infer F,...infer R]?
 MyEquals<F,U> extends true? 
 true : Includes<R,U> 
 : false

type MyEquals<T,U> =(<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Dio', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `true`