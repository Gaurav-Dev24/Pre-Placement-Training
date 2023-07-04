# Explain what is execution context in detail with diagram ?
In JavaScript, the execution context is an abstract concept that represents the environment in which JavaScript code is executed. It consists of various components and rules that define how code is executed and how variables, functions, and objects are accessed.

To understand execution context, let's break it down into its main components:

1. **Global Execution Context**:
   - The global execution context is the default or initial execution context in JavaScript.
   - It represents the context for code that is not inside any function.
   - It includes two key components: the Global Object (usually `window` in browsers) and the `this` keyword.

2. **Function Execution Context**:
   - A function execution context is created whenever a function is invoked or called.
   - Each function has its own execution context, separate from the global execution context.
   - It includes the function's arguments, local variables, and references to the outer environment (e.g., the scope chain) to access variables from the surrounding scope.
   - The function execution context also has its own `this` keyword, which refers to the object that is currently executing the function.

Now, let's visualize the concept of execution context with a diagram:

```
       +-------------------+
       |  Global Execution |
       |    Context        |
       |                   |
       |  Global Object    |
       |  (e.g., window)   |
       |                   |
       +-------------------+
               |
               |
               |   Execution Contexts (function calls)
               |
               V
       +-------------------+
       | Function Execution|
       |    Context        |
       |                   |
       |  Function Args    |
       |  Local Variables  |
       |  Scope Chain      |
       |  this             |
       +-------------------+
```

In the diagram, the global execution context is depicted at the top, representing the default context for code outside of any function. Below that, multiple function execution contexts are shown, each representing the context of a specific function call. Each function execution context has its own set of variables, arguments, and a reference to the outer environment.

It's important to note that execution contexts are created and managed by the JavaScript engine as code is executed. The engine keeps track of the current execution context and switches between contexts as needed during program execution.

Understanding the execution context is crucial for understanding variable scope, hoisting, closures, and how JavaScript code is executed.