# 1. Explain Hoisting in Javascript.

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in the code, they are conceptually moved to the top of their scope.

Hoisting affects two types of declarations: variable declarations and function declarations.

Variable Hoisting:
In JavaScript, when a variable is declared using the `var` keyword, the declaration is hoisted to the top of its scope. However, only the declaration is hoisted, not the initialization. This means that you can access the variable before it is declared, but its value will be `undefined`. Here's an example:

```javascript
console.log(age);  // Output: undefined
var age = 25;
```

The above code is actually interpreted like this by the JavaScript engine during compilation:

```javascript
var age;
console.log(age);  // Output: undefined
age = 25;
```

Function Hoisting:
Function declarations are also hoisted to the top of their containing scope. This allows you to call a function before it appears in the code. Here's an example:

```javascript
greet();  // Output: Hello!
function greet() {
  console.log('Hello!');
}
```

The JavaScript engine hoists the function declaration during compilation:

```javascript
function greet() {
  console.log('Hello!');
}
greet();  // Output: Hello!
```

It's important to note that function expressions, such as function assigned to a variable using the `var`, `let`, or `const` keyword, are not hoisted. Only function declarations are hoisted.

## 2. Explain Temporal Dead Zone?

The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when trying to access a variable before it is declared but within its scope. The TDZ concept was introduced with the introduction of the `let` and `const` keywords in ECMAScript 6 (ES6).

In JavaScript, variables declared with `let` and `const` are hoisted to the top of their block scope, similar to `var` variables. However, unlike `var` variables, which are initialized with the value `undefined` during hoisting, variables declared with `let` and `const` remain uninitialized until the point of declaration.

The TDZ is the period between the start of the block scope and the actual declaration of the variable. During this period, any attempt to access or reference the variable will result in a `ReferenceError`. Let's take a look at an example:

```javascript
console.log(age);  // Throws ReferenceError: age is not defined
let age = 25;
```

In the above code, we try to access the `age` variable before its declaration. However, due to the TDZ, a `ReferenceError` is thrown because the variable is not yet defined at that point.

The TDZ serves as a safeguard to catch potential errors and enforce best practices in JavaScript. It helps prevent accidental use of variables before they are explicitly declared, promoting cleaner and more reliable code.

To avoid the TDZ and ensure variables are properly defined before use, it is recommended to declare variables with `let` and `const` as close to their usage as possible, typically at the beginning of the block scope.

```javascript
let age;
console.log(age);  // Output: undefined
age = 25;
```

In this updated code, the `age` variable is declared before accessing it, avoiding the TDZ and allowing the code to execute without throwing an error.

## 3. Difference between var & let?

The main difference between var and let in JavaScript lies in their scope and hoisting behavior.

| var | let | 
| -------- | -------- 
|  Variables declared with var have function scope or global scope, meaning they are accessible within the function they are declared in or globally throughout the program.  |   Variables declared with let have block scope, meaning they are limited to the block (enclosed by curly braces) in which they are declared, such as within a loop or an if statement. |
| Variables declared with var are hoisted to the top of their containing scope during the compilation phase. However, only the declaration is hoisted, not the initialization. | Variables declared with let are also hoisted to the top of their containing block scope, but they remain uninitialized in the Temporal Dead Zone (TDZ) until the point of declaration. Any access to the variable before its declaration will result in a ReferenceError. |
|   Variables declared with var can be redeclared multiple times within the same scope without raising an error. However, the subsequent declarations overwrite the previous ones.  | Variables declared with let cannot be redeclared within the same block scope. Attempting to do so will result in a SyntaxError.   |
| Variables declared with var are function-scoped, meaning they are accessible throughout the entire function, regardless of where they are declared within the function. |  Variables declared with let are block-scoped, meaning they are accessible only within the block in which they are declared. |

```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20; // Variable redeclaration, overwrites the previous value
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

function anotherExample() {
  let y = 10;
  if (true) {
    let y = 20; // Block-scoped variable declaration
    console.log(y); // Output: 20
  }
  console.log(y); // Output: 10
}
```

## 4. What are the major features introduced in ECMAScript 6?

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several major features and enhancements to the JavaScript language. Some of the key features introduced in ES6 include:

1. `let` and `const` Declarations: The introduction of block-scoped variables with `let` and `const` keywords, providing a more predictable and controlled way of declaring variables.

2. Arrow Functions: A concise syntax for writing anonymous functions using the `=>` (arrow) operator, allowing for shorter and more readable function expressions.

3. Classes: The `class` syntax introduced a more familiar and structured way of defining objects and their behavior, providing a simplified syntax for working with prototypes and constructor functions.

4. Template Literals: A new way of defining strings using backticks (`) that allows for interpolation of variables and expressions, multiline strings, and improved readability.

5. Destructuring Assignment: A convenient way to extract values from arrays or objects and assign them to variables, making it easier to work with complex data structures.

6. Default Parameters: The ability to define default values for function parameters, simplifying function calls by allowing parameters to be omitted or undefined.

7. Rest Parameters and Spread Operator: The rest parameter syntax (`...`) allows functions to accept an indefinite number of arguments as an array, while the spread operator (`...`) allows an array to be expanded into individual elements.

8. Modules: Native support for modular code organization and dependency management through the `import` and `export` keywords, promoting better code reusability and maintainability.

9. Enhanced Object Literals: Object literals gained new features, including shorthand property and method definitions, computed property names, and the ability to define setters and getters.

10. Promises: A standardized way of working with asynchronous operations, allowing better handling of asynchronous code and avoiding callback hell.

These are just some of the major features introduced in ECMAScript 6. ES6 brought significant improvements to the JavaScript language, enhancing its capabilities, readability, and developer productivity. 

## 5. What is the difference between let and const ?
| let | const | 
| -------- | -------- |
| Variables declared with let can be reassigned to a new value.   | Variables declared with const are read-only and cannot be reassigned once a value is assigned.   | 
| The variable's value can change over time. | The variable's value remains constant throughout its lifetime.
|let variables have block scope, meaning they are limited to the block (enclosed by curly braces) in which they are declared.|const variables have block scope, similar to let. const is commonly used for values that are not intended to be modified. |

* let
```javascript
let age = 25;
age = 30; // Reassignment is allowed

```

* const

```javascript
const PI = 3.14;
PI = 3.14159; // Reassignment is not allowed, throws an error


```
To summarize, let allows for variable reassignment and changing values, while const enforces immutability and prevents reassignment. It's recommended to use let when you need to allow variable reassignment, and use const when you have a value that should remain constant or when working with immutable data.


## 6. What is template literals in ES6 and how do you use them?
Template literals, introduced in ECMAScript 6 (ES6), provide an improved way to work with strings in JavaScript. They offer a more expressive syntax for string interpolation, multiline strings, and the ability to include expressions and variables directly within the string.

Template literals are defined using backticks (`` ` ``) instead of single quotes (`'`) or double quotes (`"`). Inside a template literal, you can include placeholders `${expression}` that will be replaced with the evaluated result of the expression. Let's explore how to use template literals:

1. String Interpolation:
   - You can directly embed expressions and variables within a template literal using `${expression}` syntax.
   - The expression can be a variable, a function call, or any valid JavaScript expression.
   - Example:

   ```javascript
   const name = 'John';
   const age = 25;
   console.log(`My name is ${name} and I'm ${age} years old.`);
   ```

   Output: `My name is John and I'm 25 years old.`

2. Multiline Strings:
   - Template literals allow multiline strings without requiring explicit line breaks (`\n`).
   - Line breaks and whitespace are preserved as-is within the template literal.
   - Example:

   ```javascript
   const message = `
   Hello there!
   Welcome to my website.
   `;
   console.log(message);
   ```

   Output:
   ```
   Hello there!
   Welcome to my website.
   ```

3. Expression Evaluation:
   - The expressions within `${}` in a template literal are evaluated and can include any valid JavaScript expression.
   - Example:

   ```javascript
   const x = 10;
   const y = 5;
   console.log(`The sum of ${x} and ${y} is ${x + y}.`);
   ```

   Output: `The sum of 10 and 5 is 15.`

Template literals offer a concise and powerful way to work with strings in JavaScript, making it easier to include dynamic values, multiline content, and complex expressions within the string. They improve the readability and maintainability of string-based code, especially when working with dynamic content or building HTML templates.

## 7. What’s difference between map & forEach?

| map | forEach |
| ------ | ------ |
| map() is also a method available on arrays that allows you to iterate over each element of the array. | forEach() is a method available on arrays that allows you to iterate over each element of the array. | 
| It executes a provided callback function once for each element in the array, in order. map() returns a new array with the results of calling the provided callback function on each element of the array. | It executes a provided callback function once for each element in the array, in order. forEach() does not return a new array; it simply performs an operation on each element of the array. | 
|It is commonly used when you want to transform each element of the array and create a new array based on the transformation.|It is commonly used when you want to perform some action on each element of the array without needing to modify the array or create a new array.|

* map
```javascript
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
// output [2, 4, 6, 8]

```
* forEach
```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
  console.log(number * 2);
});

// output 2
// 4
// 6
// 8
```
In summary, forEach() is used for iterating over an array and performing an action on each element, without modifying the array or returning a new array. map() is used for iterating over an array, transforming each element, and creating a new array with the transformed values. Choose forEach() when you want to perform an action on each element, and use map() when you want to transform the elements and create a new array.

## 8. How can you destructure objects and arrays in ES6?
Destructuring is a powerful feature introduced in ECMAScript 6 (ES6) that allows you to extract values from objects and arrays and assign them to variables in a more concise and convenient way. Here's how you can destructure objects and arrays in ES6:

Destructuring Objects:
To destructure an object, you can use the curly braces `{}` and provide the variable names that correspond to the object's property names. The variable names will be assigned the corresponding values from the object.

```javascript
const person = {
  name: 'John Doe',
  age: 25,
  country: 'USA'
};

// Destructuring the object
const { name, age, country } = person;

console.log(name);    // Output: John Doe
console.log(age);     // Output: 25
console.log(country); // Output: USA
```

You can also assign different variable names while destructuring by using the syntax `property: variableName`.

```javascript
const { name: personName, age: personAge } = person;

console.log(personName); // Output: John Doe
console.log(personAge);  // Output: 25
```

Destructuring Arrays:
To destructure an array, you can use square brackets `[]` and provide variable names to capture the values from the array. The variables will be assigned the corresponding values based on their position in the array.

```javascript
const numbers = [1, 2, 3, 4];

// Destructuring the array
const [a, b, c, d] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
```

You can also skip elements in the array while destructuring by leaving an empty space for the element you want to skip.

```javascript
const [x, , y] = numbers;

console.log(x); // Output: 1
console.log(y); // Output: 3
```

Destructuring with Default Values:
You can also provide default values for variables in case the corresponding property or element doesn't exist in the object or array being destructured.

```javascript
const person = {
  name: 'John Doe',
  age: 25
};

const { name, age, country = 'USA' } = person;

console.log(name);    // Output: John Doe
console.log(age);     // Output: 25
console.log(country); // Output: USA (default value)
```

In summary, destructuring in ES6 provides a convenient way to extract values from objects and arrays and assign them to variables. It can make your code more readable, reduce the need for repetitive property or index access, and enable you to work with complex data structures more easily.

## 9.  How can you define default parameter values in ES6 functions?

In ECMAScript 6 (ES6), you can define default parameter values for function parameters. Default parameter values allow you to specify a fallback value that will be used if an argument is not provided or is `undefined` when calling the function. Here's how you can define default parameter values in ES6 functions:

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();            // Output: Hello, Guest!
greet('John');      // Output: Hello, John!
```

In the above example, the `greet()` function has a single parameter `name` with a default value of `'Guest'`. If no argument is passed when calling the function or if the argument is `undefined`, the default value `'Guest'` will be used.

You can define default values for multiple parameters in a function:

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5));     // Output: 5 (b is default to 1)
console.log(multiply(5, 2));  // Output: 10
```

In this example, the `multiply()` function has two parameters: `a` and `b`. The `b` parameter has a default value of `1`. If the `b` argument is not provided when calling the function or if it is `undefined`, the default value `1` will be used.

It's worth noting that default parameter values are evaluated at the time of function call, so expressions can be used as default values:

```javascript
function calculateTotal(price, taxRate = 0.2, discount = price * 0.1) {
  return price + (price * taxRate) - discount;
}

console.log(calculateTotal(100));  // Output: 110 (discount = 100 * 0.1 = 10)
```

In this example, the `calculateTotal()` function calculates the total price by adding the price, applying a tax rate (defaulted to 0.2), and subtracting a discount (defaulted to 10% of the price).

Default parameter values offer a convenient way to provide fallback values in functions, making your code more robust and reducing the need for additional conditional checks.

## 10. What is the purpose of the spread operator (...) in ES6?

The spread operator (`...`) introduced in ECMAScript 6 (ES6) is a powerful feature that allows you to spread elements from an iterable (such as an array or a string) into individual elements. It has several use cases and benefits. Here are some of the purposes of the spread operator in ES6:

1. Array Manipulation:
   - The spread operator can be used to create a new array by combining existing arrays or adding new elements.
   - It can be used to clone an array or concatenate multiple arrays into a single array.
   - Example:

   ```javascript
   const numbers = [1, 2, 3];
   const moreNumbers = [4, 5, 6];

   const combined = [...numbers, ...moreNumbers];
   console.log(combined);  // Output: [1, 2, 3, 4, 5, 6]
   ```

2. Function Arguments:
   - The spread operator can be used to pass elements of an array as individual arguments to a function.
   - It allows you to call a function with an array of arguments instead of passing them individually.
   - Example:

   ```javascript
   function sum(a, b, c) {
     return a + b + c;
   }

   const numbers = [1, 2, 3];
   const result = sum(...numbers);
   console.log(result);  // Output: 6
   ```

3. Object Manipulation:
   - The spread operator can be used to create a new object by merging properties from multiple objects or adding new properties.
   - It can be used to clone an object or create a shallow copy with modified properties.
   - Example:

   ```javascript
   const person = { name: 'John', age: 30 };
   const details = { country: 'USA', profession: 'Engineer' };

   const merged = { ...person, ...details };
   console.log(merged);  // Output: { name: 'John', age: 30, country: 'USA', profession: 'Engineer' }
   ```

4. String to Array Conversion:
   - The spread operator can be used to convert a string into an array of characters.
   - It allows you to access individual characters and perform array operations on strings.
   - Example:

   ```javascript
   const str = 'Hello';
   const chars = [...str];
   console.log(chars);  // Output: ['H', 'e', 'l', 'l', 'o']
   ```

These are just a few examples of how the spread operator can be used in ES6. It provides a concise and convenient syntax for working with arrays, function arguments, objects, and even strings. It simplifies common programming tasks and enhances the expressiveness and flexibility of JavaScript code.