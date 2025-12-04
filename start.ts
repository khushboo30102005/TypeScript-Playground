function greet(name: string) : string{
  return `Hello, ${name}`
}

console.log(greet("Khushboo"));
// console.log(greet(true));   //error : Argument of type 'boolean' is not assignable to parameter of type 'string'.
// console.log(greet(78));    