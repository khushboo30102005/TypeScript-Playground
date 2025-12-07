/* 
inference  ==> अनुमान
TypeScript is inferences mostly default DataTypes like Number, String , Boolean.

Type inference in TypeScript refers to the compiler's ability to automatically determine and assign types to variables, function return values, and expressions based on their usage and context, without requiring explicit type annotations. 
*/

let drink = 'Chai'; // let drink: string
console.log(drink);

let isDrink = true; // let isDrink: boolean

// drink = 0    // Error ==> Type 'number' is not assignable to type 'string'

let cups = Math.random() > 0.5 ? 10 : 'Five'; //let cups: string | number

/* Annotation ==> टिप्पणी 
Here we manually write The DataType.

 "Annotation" primarily refers to type annotations, which are used to explicitly specify the data types of variables, function parameters, and return values. This explicit typing is a core feature of TypeScript that enables static type checking, leading to improved code clarity, maintainability, and early error detection.
*/

let chaiFlavor: string = 'Masala Chia';
chaiFlavor = 'Adhrakh wali Chai';
// chaiFlavor = true     // Error ==> Type 'boolean' is not assignable to type 'string'.

let isOrder: boolean = true;
isOrder = false;

let countOrder: number = 2;
countOrder = 9;
