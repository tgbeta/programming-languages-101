console.log("Type Conversion");

console.log("year " + 2021);

//Concatenation
console.log("2" + "2");

/*Coercion

In JavaScript, you can perform operations on values of different types without raising an exception. The JavaScript interpreter implicitly converts, or coerces, one of the data types to that of the other, then performs the operation. The rules for coercion of string, number, or boolean values are as follows:

    If you add a number and a string, the number is coerced to a string.
    If you add a boolean and a string, the boolean is coerced to a string.
    If you add a number and a boolean, the boolean is coerced to a number.
 */
console.log(parseInt("2") + parseInt("2"));

//Implicit conversion
console.log("10" / "2");

//Not a number - NaN
console.log("example" / "2");
