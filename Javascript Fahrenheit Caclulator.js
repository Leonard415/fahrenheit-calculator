const kelvin = 293; //This is a kelvin forecast named variable equal to 293. This value will stay constant//
const celsius = kelvin - 273; //This is a constant code that will convert kelvin to celsius.//
let fahrenheit = celsius *(9 / 5) + 32;//This is the equation to calculate fahrenheit.//
fahrenheit = Math.floor(fahrenheit);//This is the built in method from the math object to round down fahrenheit//
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);