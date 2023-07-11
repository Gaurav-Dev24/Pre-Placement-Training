## 1. What’s difference between Synchronous and Asynchronous?

|Synchronous|Asynchronous|
| ---------- | ----------|
|In synchronous execution, each operation is performed one after the other in a sequential manner.|In asynchronous execution, multiple operations can be initiated without waiting for the previous operation to complete.|
|The program waits for each operation to complete before moving on to the next one. Synchronous operations are blocking, meaning that the program is paused until the operation is finished.|Asynchronous operations are non-blocking, allowing the program to continue its execution while waiting for the operations to complete. Asynchronous operations typically rely on callbacks, promises, or async/await syntax for handling the results or errors once the operations are finished.|
|If an operation takes a long time to complete, it can cause the entire program to freeze, making the user interface unresponsive.|Asynchronous code is commonly used for tasks such as fetching data from a server, reading/writing files, or making API calls, where waiting for the operation to complete would result in unnecessary delays.|

```javascript
// Synchronous code
console.log("First");
console.log("Second");
console.log("Third");

// Output:
// First
// Second
// Third

// Asynchronous code with setTimeout
console.log("First");
setTimeout(function() {
  console.log("Second");
}, 2000);
console.log("Third");

// Output:
// First
// Third
// Second (after a 2-second delay)
```
## 2. What are Web Apis?

Web APIs (Application Programming Interfaces) are sets of rules and protocols that enable different software applications to communicate and interact with each other. In the context of web development, Web APIs enable developers to extend the capabilities of web browsers and build dynamic, interactive web applications. They provide a standardized way to interact with web browsers, retrieve and manipulate data, and control browser behavior. Some common types of web APIs include:

1. DOM API (Document Object Model API): It allows manipulation and interaction with the HTML and XML documents of a web page. Developers can use the DOM API to access and modify elements, change styles, handle events, and create dynamic web content.

2. XMLHttpRequest API (XHR): It provides functionality for making HTTP requests from JavaScript, allowing web applications to fetch data from servers asynchronously. This API is commonly used for AJAX (Asynchronous JavaScript and XML) requests.

3. Fetch API: It is a modern replacement for the XMLHttpRequest API, providing a more flexible and powerful way to make HTTP requests. The Fetch API supports promises, making it easier to handle asynchronous operations.

4. Geolocation API: It enables web applications to retrieve the geographic location of a user's device (with the user's permission), providing access to latitude, longitude, and other location-related information.

5. Canvas API: It allows dynamic rendering of graphics, images, and animations on a web page. Developers can use the Canvas API to draw shapes, apply transformations, manipulate pixels, and create visually rich content.

6. Web Storage API: It provides a way to store and retrieve key-value pairs of data locally within a user's browser. The Web Storage API includes two mechanisms: localStorage (persistent storage) and sessionStorage (session-based storage).

7. Web Audio API: It enables audio processing and synthesis in web applications, allowing developers to create and manipulate audio streams, apply effects, and control playback.

8. WebRTC (Real-Time Communication) API: It enables real-time communication between web browsers, supporting features like video chat, voice calling, and peer-to-peer data transfer.

These are just a few examples of the wide range of Web APIs available. Each API provides a specific set of functionalities and methods that developers can use to enhance the capabilities of their web applications and create engaging user experiences.

## 3. Explain SetTimeOut and setInterval ?

|setTimeout()|setInterval()|
| ---------- | ----------  |
|The setTimeout function is used to execute a block of code or a function after a specified delay (in milliseconds). It takes two parameters: a callback function and a delay value.|The setInterval function is used to repeatedly execute a block of code or a function at a specified interval. It takes two parameters: a callback function and an interval value.|
|The callback function is the code that will be executed after the delay. Here's the syntax: setTimeout(callback, delay);|The callback function is the code that will be executed repeatedly at the specified interval. Here's the syntax: setInterval(callback, interval);|

Example of setTimeout():

```javascript
console.log("Hello");
setTimeout(function() {
  console.log("World");
}, 2000);

// output
// Hello
// (after a 2-second delay)
// World

```
In this example, "Hello" is logged immediately, and then after a 2-second delay, "World" is logged. The callback function is executed once, after the specified delay.

Example of setInterval():

```javascript
setInterval(function() {
  console.log("Tick");
}, 1000);


// output
// Tick
// Tick
// Tick
```
In this example, "Tick" is logged repeatedly every 1 second (1000 milliseconds) indefinitely until the setInterval is canceled.

## 4.How can you handle Async code in JavaScript ?

In JavaScript, there are several ways to handle asynchronous code and ensure the proper execution and sequencing of operations. Here are the commonly used techniques:

1. Callbacks:
   - Callbacks are functions that are passed as arguments to other functions and are executed once an asynchronous operation completes.
   - The callback function is invoked with the result or error once the asynchronous operation is finished.
   - Callbacks are a traditional way of handling asynchronous code in JavaScript.

   Example:
   ```javascript
   function fetchData(callback) {
     // Simulating an asynchronous operation
     setTimeout(function() {
       var data = "This is the fetched data";
       callback(null, data); // Pass null for error and data as the result
     }, 2000);
   }

   function handleData(error, result) {
     if (error) {
       console.error("Error:", error);
     } else {
       console.log("Result:", result);
     }
   }

   fetchData(handleData);
   ```

2. Promises:
   - Promises provide a more structured and readable way to handle asynchronous operations.
   - A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and it can be in one of three states: pending, fulfilled, or rejected.
   - Promises have built-in methods such as `.then()` and `.catch()` to handle the success and error cases respectively.

   Example:
   ```javascript
   function fetchData() {
     return new Promise(function(resolve, reject) {
       // Simulating an asynchronous operation
       setTimeout(function() {
         var data = "This is the fetched data";
         resolve(data); // Resolve with the data
         // reject(new Error("Something went wrong")); // Reject with an error
       }, 2000);
     });
   }

   fetchData()
     .then(function(result) {
       console.log("Result:", result);
     })
     .catch(function(error) {
       console.error("Error:", error);
     });
   ```

3. Async/Await:
   - Async/await is a more recent addition to JavaScript and provides a more concise and synchronous-like way of handling asynchronous operations.
   - The `async` keyword is used to declare an asynchronous function, and within that function, the `await` keyword is used to pause the execution and wait for a Promise to resolve.
   - Async/await is built on top of Promises and offers a more sequential and readable syntax.

   Example:
   ```javascript
   function fetchData() {
     return new Promise(function(resolve, reject) {
       setTimeout(function() {
         var data = "This is the fetched data";
         resolve(data);
         // reject(new Error("Something went wrong"));
       }, 2000);
     });
   }

   async function handleData() {
     try {
       var result = await fetchData();
       console.log("Result:", result);
     } catch (error) {
       console.error("Error:", error);
     }
   }

   handleData();
   ```

These techniques provide different ways to handle and control the flow of asynchronous code in JavaScript. Promises and async/await are more modern and widely adopted approaches that enhance code readability and make it easier to handle and chain multiple asynchronous operations.

## 5. What are Callbacks &  Callback Hell ?

Callbacks are functions that are passed as arguments to other functions and are invoked once a specific task or operation is completed. They are a common pattern in JavaScript for handling asynchronous code and ensuring that operations are executed in the correct order.

Callback Hell, also known as the Pyramid of Doom, is a term used to describe a situation where multiple levels of nested callbacks are used, resulting in code that is difficult to read, understand, and maintain. This often occurs when dealing with complex and deeply nested asynchronous operations.

Here's an example of callback hell:

```javascript
asyncOperation1(function(result1) {
  // Handle result1
  asyncOperation2(function(result2) {
    // Handle result2
    asyncOperation3(function(result3) {
      // Handle result3
      asyncOperation4(function(result4) {
        // Handle result4
        // ...more nested callbacks
      });
    });
  });
});
```

In this example, each asynchronous operation depends on the result of the previous one, leading to deeply nested callbacks. As the number of operations increases, the code becomes harder to read, understand, and debug. It can also make error handling and code maintenance challenging.

Callback Hell can be mitigated by using alternative techniques such as Promises, async/await, or other asynchronous control flow libraries. These approaches provide a more structured and readable way to handle asynchronous code and avoid excessive levels of nesting.

Here's an example using Promises to avoid callback hell:

```javascript
asyncOperation1()
  .then(function(result1) {
    // Handle result1
    return asyncOperation2();
  })
  .then(function(result2) {
    // Handle result2
    return asyncOperation3();
  })
  .then(function(result3) {
    // Handle result3
    return asyncOperation4();
  })
  .then(function(result4) {
    // Handle result4
    // ...continue the chain
  })
  .catch(function(error) {
    // Handle errors
  });
```

In this revised code, each asynchronous operation returns a Promise, and the `.then()` method is used to chain the operations together in a more readable and sequential manner. The `.catch()` method is used to handle any errors that occur along the way.

By using Promises or async/await, the code becomes more maintainable, easier to reason about, and less prone to the issues associated with callback hell.

## 6. What are Promises & Explain Some Three Methods of Promise?

Promises are a JavaScript feature introduced to handle asynchronous operations in a more structured and readable manner. A Promise is an object representing the eventual completion (or failure) of an asynchronous operation, and it can be in one of three states: pending, fulfilled, or rejected.

Promises provide a way to chain asynchronous operations together and handle their results or errors. They offer built-in methods to handle the resolved value (fulfilled) or the reason for rejection (rejected) of a Promise. Here are three commonly used methods of Promise:

1. `.then()`:
   - The `.then()` method is used to handle the successful fulfillment of a Promise.
   - It takes one or two callback functions as arguments: the first one handles the resolved value, and the second one (optional) handles errors or rejections.
   - The `.then()` method returns a new Promise, allowing chaining multiple `.then()` calls.

   Example:
   ```javascript
   fetchData()
     .then(function(result) {
       console.log("Result:", result);
     })
     .catch(function(error) {
       console.error("Error:", error);
     });
   ```

2. `.catch()`:
   - The `.catch()` method is used to handle any errors or rejections that occur during the Promise chain.
   - It takes a callback function as an argument to handle the error.
   - If any error occurs in the preceding Promise or any `.then()` callback, the control is passed to the closest `.catch()` in the chain.

   Example:
   ```javascript
   fetchData()
     .then(function(result) {
       console.log("Result:", result);
     })
     .catch(function(error) {
       console.error("Error:", error);
     });
   ```

3. `.finally()`:
   - The `.finally()` method is used to specify a callback function that will be executed regardless of whether the Promise is fulfilled or rejected.
   - It is useful for performing cleanup operations or executing code that needs to be run regardless of the Promise's outcome.
   - The `.finally()` method does not receive any arguments and does not affect the resolved value or rejection reason of the Promise.

   Example:
   ```javascript
   fetchData()
     .then(function(result) {
       console.log("Result:", result);
     })
     .catch(function(error) {
       console.error("Error:", error);
     })
     .finally(function() {
       console.log("Cleanup code here");
     });
   ```

These three methods, `.then()`, `.catch()`, and `.finally()`, provide powerful capabilities for handling the results and errors of Promises. They allow you to control the flow of asynchronous operations, handle success and failure cases, and perform cleanup actions as needed.

## 7. What’s async & await Keyword in JavaScript?

The `async` and `await` keywords in JavaScript are used in combination to simplify the handling of asynchronous operations, making the code look more synchronous and readable.

1. `async` Keyword:
   - The `async` keyword is used to declare an asynchronous function.
   - An asynchronous function returns a Promise implicitly, allowing it to pause execution with the `await` keyword and resume when the awaited Promise is resolved or rejected.
   - The `async` keyword can be used only before a function declaration or function expression.

   Example:
   ```javascript
   async function fetchData() {
     // Asynchronous operations
   }
   ```

2. `await` Keyword:
   - The `await` keyword is used within an `async` function to pause the execution and wait for a Promise to resolve or reject.
   - It can only be used inside an `async` function.
   - The `await` keyword can be used with any expression that returns a Promise, including Promises themselves, functions returning Promises, or any other value wrapped in `Promise.resolve()`.

   Example:
   ```javascript
   async function fetchData() {
     const result = await fetch('https://api.example.com/data');
     return result.json();
   }
   ```

   In this example, the `await` keyword is used to pause the execution of the `fetchData()` function until the `fetch()` function's Promise is resolved. Once the Promise is resolved, the function continues executing and the result of the resolved Promise is assigned to the `result` variable.

   It's important to note that the `await` keyword can only be used within an `async` function. If you try to use it outside an `async` function, you'll encounter a syntax error.

   Async/await simplifies the handling of Promises and eliminates the need for explicit `.then()` and `.catch()` chaining. It allows you to write asynchronous code that resembles synchronous code in terms of structure and readability. By using `async` and `await`, you can handle asynchronous operations in a more straightforward and sequential manner.

## 8. Explain Purpose of Try and Catch Block & Why do we need it?

The purpose of the `try` and `catch` blocks in JavaScript is to handle and control potential errors or exceptions that may occur during the execution of a code block. They provide a way to gracefully handle exceptional situations and prevent the program from crashing.

Here's how the `try` and `catch` blocks work together:

1. `try` Block:
   - The `try` block contains the code that might potentially throw an exception.
   - It is the portion of code where you want to handle potential errors.
   - If an exception occurs within the `try` block, the code execution is immediately transferred to the corresponding `catch` block.
   - You can have multiple `try` blocks in a function, but only one `catch` block associated with each `try` block.

   Example:
   ```javascript
   try {
     // Code that may throw an exception
   } catch (error) {
     // Code to handle the exception
   }
   ```

2. `catch` Block:
   - The `catch` block is responsible for catching and handling any exceptions that occur within the corresponding `try` block.
   - It receives an error object as a parameter, which contains information about the thrown exception.
   - The `catch` block executes only if an exception is thrown within the associated `try` block.
   - It allows you to handle the error in a controlled manner, log relevant information, provide fallback values, or perform any necessary cleanup.

   Example:
   ```javascript
   try {
     // Code that may throw an exception
   } catch (error) {
     // Code to handle the exception
   }
   ```

The main reasons why we need `try` and `catch` blocks are:

1. Error Handling: The primary purpose of `try` and `catch` blocks is to handle and manage errors in a controlled manner. Instead of allowing exceptions to crash the program, we can catch them and provide appropriate error handling logic. This helps prevent the program from abruptly terminating and allows us to handle exceptional situations gracefully.

2. Graceful Fallback: `catch` blocks enable us to provide fallback values or alternative logic when an error occurs. We can handle specific error cases and provide default values or alternative paths of execution, ensuring that the program continues running and avoids unexpected behaviors.

3. Logging and Debugging: `catch` blocks allow us to log relevant error information, such as error messages or stack traces, which can be helpful for debugging and troubleshooting. We can examine the caught exceptions to understand what went wrong and where the error occurred.

By using `try` and `catch` blocks, we can handle errors in a controlled manner, provide fallback options, and maintain the stability and reliability of our programs. They are essential tools for robust error handling and ensuring that our code can gracefully handle unexpected situations.


## 9. Explain fetch?

`fetch` is a built-in JavaScript function used to make HTTP requests to a server and retrieve resources, typically data, asynchronously. It provides a modern and flexible way to perform network requests in web applications, replacing the older `XMLHttpRequest` (XHR) object.

The `fetch` function returns a Promise that resolves to the Response object representing the server's response to the request. The Promise can be used to handle the response, parse data, check the status of the request, and perform further operations.

Here's the basic syntax of using `fetch`:

```javascript
fetch(url)
  .then(function(response) {
    // Handle the response
    return response.json(); // parse response data as JSON
  })
  .then(function(data) {
    // Handle the parsed data
  })
  .catch(function(error) {
    // Handle any errors that occurred during the fetch operation
  });
```

In the above example:

1. `fetch(url)` initiates an HTTP request to the specified `url` and returns a Promise.
2. The first `.then()` callback function is executed when the Promise resolves and receives the `response` object as an argument. You can inspect the `response` object to access the response headers, status, and more.
3. Within the first `.then()` callback, you can use various methods of the `response` object like `.json()`, `.text()`, `.blob()`, etc., to extract and process the response data.
4. The second `.then()` callback function is executed when the previous `.then()` callback returns a Promise or a value. It receives the processed `data` as an argument and can be used to handle and manipulate the parsed data.
5. The `.catch()` callback function is executed if any error occurs during the `fetch` operation or any of the preceding `.then()` callbacks. It allows you to handle and log errors appropriately.

The `fetch` function provides more control and flexibility compared to its predecessor, XHR. It supports a wide range of options and configurations for making requests, including setting headers, specifying request methods, handling cookies, and working with different data formats.

Additionally, `fetch` is compatible with Promises, making it easy to chain multiple asynchronous operations and handle responses in a sequential and readable manner.

Note: The `fetch` function is supported in most modern browsers. However, in older browsers or environments without built-in `fetch` support, you may need to use a polyfill or a library like Axios to achieve similar functionality.

## 10. How do you define an asynchronous function in JavaScript using async/await?
To define an asynchronous function in JavaScript using `async/await`, you can use the `async` keyword before the function declaration. An asynchronous function returns a Promise implicitly, allowing you to pause its execution using the `await` keyword and resume when the awaited Promise is resolved or rejected. Here's the syntax:

```javascript
async function functionName() {
  // Asynchronous code
  // ...
  // await statements
  // ...
  // return statement
}
```

Here's an example of defining an asynchronous function that uses `async/await` to handle asynchronous operations:

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  console.log("Fetching data...");
  await delay(2000);
  console.log("Data fetched!");

  return "Data";
}

async function main() {
  try {
    const data = await fetchData();
    console.log("Received data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

In this example:

1. The `fetchData` function is defined as an asynchronous function using the `async` keyword.
2. Inside the `fetchData` function, there is an `await` statement that pauses the execution until the `delay` Promise is resolved after a 2-second delay.
3. After the `await` statement, the code resumes, and "Data fetched!" is logged to the console.
4. The function then returns the string "Data".
5. The `main` function is also defined as an asynchronous function and serves as the entry point for executing the asynchronous code.
6. Inside the `main` function, the `fetchData` function is called using `await`, which waits for the `fetchData` Promise to resolve and assigns the result to the `data` variable.
7. The received data is then logged to the console.

Using `async/await` simplifies the handling of asynchronous code, making it appear more synchronous and easier to read. It allows you to write asynchronous code in a sequential and natural way, avoiding excessive nesting and improving code readability.