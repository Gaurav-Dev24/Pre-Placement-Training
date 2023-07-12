## 1. What’s Constructor And Its Purpose?

In JavaScript, a constructor is a special method that is used to create and initialize objects within a class. It is typically defined using the constructor keyword. The purpose of a constructor in JavaScript is similar to that in other programming languages, which is to set up the initial state or properties of an object.

Here are some important points about constructors in JavaScript:

1. Initialization: Constructors are used to initialize the properties of an object. Inside the constructor, you can assign values to the object's properties, define methods, and perform any other setup operations.

2. Object Creation: Constructors are invoked using the "new" keyword followed by the constructor function name. This creates a new instance of the object and calls the constructor to initialize it.

3. Context: When a constructor is called, it runs in the context of the newly created object. The "this" keyword inside the constructor refers to the instance being created, allowing you to access and modify its properties.

4. Prototype Chain: Constructors in JavaScript are associated with a prototype object. The prototype contains shared properties and methods that are inherited by all instances created from the constructor. This allows you to define methods once and have them available to all objects created from that constructor.

5. Customization: Constructors can accept parameters, allowing you to customize the initialization process based on the provided arguments. This enables you to create objects with different initial states or configurations.

6. No Return Type: In JavaScript, constructors do not have an explicit return type. When you use the "new" keyword to create an object, the constructor implicitly returns the newly created object.

Here's an example of a constructor in JavaScript:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
}

// Creating instances using the constructor
var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);

person1.sayHello(); // Output: Hello, my name is John
person2.sayHello(); // Output: Hello, my name is Jane
```

In the example above, the `Person` function serves as a constructor for creating `Person` objects. The constructor initializes the `name` and `age` properties of the object and defines a `sayHello` method. The instances `person1` and `person2` are created using the `new` keyword and have their own separate copies of the properties and methods defined in the constructor.

## 2. Explain This Keyword and Its Purpose?

In JavaScript, the `this` keyword is a special keyword that refers to the context in which a function is executed. The purpose of the `this` keyword is to provide a way to access and manipulate properties and methods within an object or the current execution context.

The behavior of `this` depends on how a function is called, and it can have different values in different contexts. Here are some common use cases and behaviors of `this`:

1. Global Scope: When `this` is used in the global scope (outside any function or object), it refers to the global object, which is usually `window` in a web browser or `global` in Node.js.

2. Object Method: When a function is invoked as a method of an object, `this` refers to the object itself. It allows the function to access and manipulate the object's properties and methods.

3. Constructor Function: When a function is used as a constructor with the `new` keyword, `this` refers to the newly created instance of the object. It allows the constructor function to assign properties to the instance using the `this` keyword.

4. Event Handlers: When a function is used as an event handler, `this` refers to the element that triggered the event. It allows the handler to access and manipulate the properties and behavior of the element.

5. Function Invocation: When a function is invoked directly (not as a method or constructor), the value of `this` depends on whether strict mode is enabled. In non-strict mode, `this` refers to the global object, while in strict mode, it is set to `undefined`.

6. Call, Apply, and Bind: The `call`, `apply`, and `bind` methods can be used to explicitly set the value of `this` when invoking a function. These methods allow you to control the context in which a function is executed.

Understanding and correctly using the `this` keyword is crucial in JavaScript, as it determines the context and scope in which your code operates. It allows you to access and manipulate data within objects, handle events, and define constructors for creating objects with specific behaviors.

## 3. What’s Call Apply Bind Method & Difference Between them?

In JavaScript, the `call`, `apply`, and `bind` methods are used to manipulate the value of the `this` keyword in function invocations. They allow you to explicitly set the context in which a function is executed. Here's an explanation of each method and the differences between them:

1. `call`: The `call` method is a function method that allows you to invoke a function and specify the value of `this` explicitly. It also allows you to pass arguments to the function individually (comma-separated). The syntax for `call` is as follows:

   ```javascript
   functionName.call(thisArg, arg1, arg2, ...);
   ```

   The `thisArg` parameter is the value that will be used as `this` inside the function. The subsequent arguments are the arguments to be passed to the function.

2. `apply`: The `apply` method is similar to `call`, but it accepts arguments as an array or an array-like object. It allows you to invoke a function and explicitly set the value of `this`, along with passing an array of arguments. The syntax for `apply` is as follows:

   ```javascript
   functionName.apply(thisArg, [arg1, arg2, ...]);
   ```

   The `thisArg` parameter is the value that will be used as `this` inside the function. The second parameter is an array or array-like object containing the arguments to be passed to the function.

3. `bind`: The `bind` method is different from `call` and `apply`. It creates a new function with a fixed value for `this`, which cannot be changed later. The `bind` method does not immediately invoke the function but returns a new function that can be invoked later. The syntax for `bind` is as follows:

   ```javascript
   var newFunction = functionName.bind(thisArg, arg1, arg2, ...);
   ```

   The `thisArg` parameter is the value that will be used as `this` inside the function. The subsequent arguments are the arguments to be partially applied to the function.

   Example usage:

   ```javascript
   function greet(message) {
     console.log(message + " " + this.name);
   }

   var person = {
     name: "John",
   };

   var greetPerson = greet.bind(person);
   greetPerson("Hello"); // Output: Hello John
   ```

   In the example above, the `bind` method is used to create a new function `greetPerson` with `this` set to the `person` object. When `greetPerson` is invoked, it retains the context and can access the `name` property of the `person` object.

The main difference between `call` and `apply` is the way arguments are passed: `call` accepts arguments individually, while `apply` accepts them as an array. The `bind` method creates a new function with a fixed `this` value that cannot be changed.

All three methods provide ways to explicitly control the value of `this` in function invocations, allowing you to manipulate the execution context of a function as needed.

## 4. Explain OOPS ?

OOPS, which stands for Object-Oriented Programming (OOP), is a programming paradigm that organizes software design around objects that represent real-world entities. It provides a way to structure code and encapsulate data and behavior into reusable and modular units called objects.

The key concepts of OOP are:

1. Objects: Objects are the fundamental building blocks of OOP. They represent real-world entities, concepts, or things with their properties (attributes) and behaviors (methods). For example, a "Car" object would have properties like color, model, and speed, and behaviors like accelerate and brake.

2. Classes: A class is a blueprint or template that defines the structure and behavior of objects. It encapsulates the common properties and methods that objects of the same type will have. Objects are created from classes through a process called instantiation.

3. Encapsulation: Encapsulation is the process of hiding the internal details of an object and exposing only the necessary information and functionality. It allows data to be accessed and modified only through well-defined interfaces (public methods) while keeping the internal state protected. Encapsulation helps in achieving data integrity and code maintainability.

4. Inheritance: Inheritance allows the creation of new classes (derived or child classes) based on existing classes (base or parent classes). It enables the child classes to inherit properties and methods from their parent classes, promoting code reuse and establishing hierarchical relationships between classes.

5. Polymorphism: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables objects to take on many forms and behave differently based on their actual class type. Polymorphism promotes flexibility, extensibility, and code modularity.

6. Abstraction: Abstraction involves simplifying complex systems by focusing on the essential aspects while hiding unnecessary details. It allows the creation of abstract classes or interfaces that define a contract without providing implementation details. Abstraction helps in managing complexity and providing a clear separation between the interface and implementation.

OOP provides several benefits, including code reusability, modularity, scalability, maintainability, and easier collaboration among developers. It promotes a structured and organized approach to software development, allowing for more efficient and robust code.

## 5. Whats Abstraction and Its Purpose?

Abstraction is a fundamental concept in object-oriented programming (OOP) that involves simplifying complex systems by focusing on the essential aspects while hiding unnecessary details. It provides a way to create abstract classes or interfaces that define a contract without providing the implementation details.

The purpose of abstraction is to manage complexity, improve code organization, and provide a clear separation between the interface and implementation. Here are some key points about abstraction:

1. Simplification: Abstraction allows you to simplify complex systems by breaking them down into more manageable and understandable parts. 

2. Interface Definition: Abstraction involves defining abstract classes or interfaces that provide a contract for the functionality a class should provide.

3. Implementation Hiding: Abstraction allows you to hide the internal implementation details of a class or system from the user. 

4. Modularity and Code Organization: Abstraction helps in creating modular and organized code by separating the interface from the implementation. 

5. Code Reusability: Abstraction promotes code reusability by allowing multiple classes to implement the same abstract class or interface. 

6. Polymorphism: Abstraction is closely related to polymorphism, another key concept in OOP. By using abstraction, you can achieve polymorphism by programming to the abstract interface rather than specific implementations.


## 6. Whats Polymorphism and Purpose of it?

Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common superclass or interface. It provides a way to write code that can work with objects of multiple types, promoting flexibility, extensibility, and code modularity.

The purpose of polymorphism is to enable objects to take on many forms and behave differently based on their actual class type. It allows you to write generic code that can operate on objects with different implementations, as long as they adhere to a common interface. Here are some key points about polymorphism:

1. Code Reusability: Polymorphism promotes code reusability by allowing a single piece of code to work with different classes that share a common superclass or interface. T

2. Flexibility and Extensibility: Polymorphism allows you to introduce new classes that inherit from a common superclass or implement a shared interface without modifying the existing code. 

3. Method Overriding: Polymorphism involves method overriding, which allows a subclass to provide its own implementation of a method defined in its superclass. When a method is invoked on an object, the appropriate implementation based on the actual object's class is executed. 

4. Late Binding (Dynamic Dispatch): Polymorphism typically involves dynamic binding or late binding, where the determination of which method implementation to invoke occurs at runtime based on the actual object's class. 

5. Interface-Based Programming: Polymorphism is often achieved through interfaces or abstract classes that define a contract for the behavior that classes must implement. 

6. Simplified Code Maintenance: Polymorphism simplifies code maintenance by promoting a separation of concerns and allowing modifications or enhancements to be localized to specific classes or interfaces. 

Polymorphism is a powerful concept that enables more flexible and modular code in object-oriented programming. By designing code that can work with objects of multiple types, you can create more versatile and reusable software systems.

## 7. Whats Inheritance and Purpose of it?

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (derived or child class) to inherit properties and methods from an existing class (base or parent class). It provides a way to create a hierarchy of classes, establishing a relationship where the derived class inherits the characteristics of the base class.

The purpose of inheritance is to promote code reuse, enhance modularity, and establish a hierarchical relationship between classes. Here are some key points about inheritance:

1. Code Reusability: Inheritance allows you to reuse code by defining common properties and methods in a base class and letting derived classes inherit them. 

2. Base Class: The base class serves as a template or blueprint that defines the common attributes and behaviors shared by the derived classes. 

3. Derived Class: The derived class inherits the properties and methods of the base class, extending or specializing them as needed. 

4. Code Extensibility: Inheritance allows you to extend the functionality of a base class by adding new features or modifying the existing behavior in the derived classes. 

5. Code Organization: Inheritance helps in organizing code by establishing a hierarchical relationship between classes. 

6. Polymorphism: Inheritance is closely related to polymorphism, another key concept in OOP. Inheritance enables objects of derived classes to be treated as objects of the base class, allowing for polymorphic behavior. 

By utilizing inheritance, you can build class hierarchies that reflect the relationships and hierarchies in the real-world domain. It promotes code reuse, enhances modularity, and allows for extensible and maintainable software systems. 

## 8. Whats Encapsulation and Purpose of it ?

Encapsulation is a fundamental concept in object-oriented programming (OOP) that involves bundling data (attributes) and methods (behaviors) together into a single unit called an object. It aims to hide the internal details of an object and expose only the necessary information and functionality to the outside world.

The purpose of encapsulation is to achieve data integrity, code maintainability, and information hiding. Here are some key points about encapsulation:

1. Data Protection: Encapsulation provides a way to protect the internal state (data) of an object by making it inaccessible from outside the object's boundaries. 

2. Access Modifiers: Access modifiers, such as public, private, and protected, are used in encapsulation to control the visibility and accessibility of object members (attributes and methods). 

3. Information Hiding: Encapsulation supports the principle of information hiding, where the internal implementation details of an object are hidden from the outside world.

4. Code Maintainability: Encapsulation promotes code maintainability by encapsulating related data and behavior into a single object. Changes to the internal implementation of the object can be made without affecting the code that uses the object. 

5. Code Organization: Encapsulation helps in organizing code by grouping related data and behavior into coherent and self-contained objects. It enhances code modularity and provides a clear separation of concerns, making the codebase more structured and easier to understand and navigate.

6. Code Reusability: Encapsulation promotes code reusability by encapsulating functionality into objects that can be used in different parts of the codebase or in different projects.

Encapsulation is a key principle of object-oriented programming that contributes to building robust and maintainable software systems. By encapsulating data and behavior, you can ensure data integrity, control accessibility, and provide a well-defined interface to interact with objects.

## 9. Explain Class in JavaScript?

In JavaScript, a class is a syntactical construct introduced in ECMAScript 2015 (ES6) to provide a more structured and familiar way of defining objects and their behavior. Prior to ES6, JavaScript used prototype-based inheritance rather than class-based inheritance. However, the introduction of the class syntax made it easier to work with object-oriented programming concepts in JavaScript.

Here are some key points about classes in JavaScript:

1. Class Definition: A class is defined using the `class` keyword, followed by the name of the class. For example:

   ```javascript
   class MyClass {
     // Class members and methods
   }
   ```

2. Constructor: The `constructor` method is a special method within a class that is called when an instance of the class is created using the `new` keyword. It is used to initialize the object's properties. For example:

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
   }
   ```

3. Class Methods: Class methods are defined within the class and are accessible to instances of the class. They can be defined using regular function syntax. For example:

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     sayHello() {
       console.log(`Hello, my name is ${this.name}`);
     }
   }
   ```

4. Instance Creation: Instances of a class are created using the `new` keyword followed by the class name and any required constructor arguments. For example:

   ```javascript
   const person = new Person("John", 25);
   ```

5. Inheritance: Classes in JavaScript support inheritance through the `extends` keyword. A class can inherit properties and methods from another class, forming a parent-child relationship. The `super` keyword is used to invoke the parent class's constructor and methods. For example:

   ```javascript
   class Student extends Person {
     constructor(name, age, grade) {
       super(name, age); // Invoke parent class's constructor
       this.grade = grade;
     }
   }
   ```

Classes in JavaScript provide a more familiar and structured syntax for working with object-oriented programming concepts. They encapsulate data and behavior into reusable units and support inheritance, making it easier to organize and maintain code. However, it's important to note that JavaScript's classes are essentially syntactic sugar over the existing prototype-based inheritance system.

## 10. What’s Super Keyword & What it does?

In JavaScript, the `super` keyword is used within a subclass constructor or method to refer to the parent class. It provides a way to call and access the parent class's constructor, properties, and methods. The `super` keyword is often used in conjunction with the `extends` keyword to implement inheritance and invoke the parent class's functionality.

Here are some key points about the `super` keyword:

1. Constructor: Inside a subclass constructor, the `super` keyword is used to call the constructor of the parent class. It must be called before using `this` in the subclass constructor. This ensures that the parent class's initialization is performed before adding any additional functionality in the subclass constructor. For example:

   ```javascript
   class ChildClass extends ParentClass {
     constructor() {
       super(); // Call the parent class's constructor
       // Additional initialization for the child class
     }
   }
   ```

2. Method Invocation: The `super` keyword is also used to invoke methods of the parent class from within a subclass. It allows the subclass to inherit and utilize the parent class's behavior. For example:

   ```javascript
   class ParentClass {
     greet() {
       console.log("Hello, I'm the parent class");
     }
   }

   class ChildClass extends ParentClass {
     greet() {
       super.greet(); // Invoke parent class's greet method
       console.log("And I'm the child class");
     }
   }

   const child = new ChildClass();
   child.greet();
   // Output:
   // Hello, I'm the parent class
   // And I'm the child class
   ```

   In the example above, the `greet` method in the `ChildClass` invokes the `greet` method of the parent class using `super.greet()`. This allows the child class to extend the parent class's behavior while adding its own functionality.

3. Accessing Parent Class Properties: The `super` keyword can also be used to access properties or methods of the parent class within the subclass. It allows the subclass to refer to the parent class's members. For example:

   ```javascript
   class ParentClass {
     constructor(name) {
       this.name = name;
     }
   }

   class ChildClass extends ParentClass {
     constructor(name, age) {
       super(name); // Call parent class's constructor
       this.age = age;
     }

     introduce() {
       console.log(`My name is ${this.name} and I'm ${this.age} years old`);
     }
   }

   const child = new ChildClass("John", 25);
   child.introduce();
   // Output: My name is John and I'm 25 years old
   ```

   In the example above, the `ChildClass` constructor calls `super(name)` to invoke the parent class's constructor and pass the `name` parameter. This allows the `ChildClass` instance to have access to both the `name` property inherited from the parent class and the `age` property specific to the child class.

The `super` keyword provides a way to refer to and utilize the functionality of the parent class within a subclass. It is commonly used when working with inheritance in JavaScript to invoke the parent class's constructor, methods, and access parent class properties.