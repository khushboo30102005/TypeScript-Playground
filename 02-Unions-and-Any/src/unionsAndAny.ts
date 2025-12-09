/* let subs = 10
subs = '1M'  //Error ==> Type 'string' is not assignable to type 'number' */

// Here👆  subs have Numbers as values but with different dataType
// both are numbers but '1M' is a string that why we have error

// Solutions ==> Use Union

let Subs: number | string = 10;
console.log(`Subs: ${Subs}, DataType of Subs: ${typeof Subs}`); //OutPut ==> Subs: 10, DataType of Subs: number
Subs = '10M';
console.log(`Subs: ${Subs}, DataType of Subs: ${typeof Subs}`); //OutPut ==> Subs: 10M, DataType of Subs: string


let apiRequestStatus : 'pending' | 'success' | 'error'
apiRequestStatus = 'pending'
// apiRequestStatus = 'safe' // Error ==> Type '"safe"' is not assignable to type '"pending" | "success" | "error"'.

apiRequestStatus = 'success'

// Any ==> When a variable is declared with the any type, TypeScript will not perform any type checking on that variable, allowing it to hold values of any type (string, number, object, boolean, etc.) and allowing any operations to be performed on it without compile-time errors.

let orders = ['12', '34', '54', '28']

let currentOrder : string | undefined  // any

for (let order of orders){
  if(order === '28'){
    currentOrder = order
    break
  }
}

console.log(currentOrder);

// Bypasses Type Checking: Any disables TypeScript's type safety features, treating the variable as if it were a regular JavaScript variable.