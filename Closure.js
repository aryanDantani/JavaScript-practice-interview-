// A closure in JavaScript is a function that has access to its own scope, 
// the scope of the outer function, and the global scope, even after the outer function has returned. 
// Closures are created every time a function is defined, allowing the inner function to "remember" the variables in its outer function's scope.

function outerFunction() {
    let outerVariable = "I am from the outer scope";

    function innerFunction() {
        console.log(outerVariable); // Accesses the outerVariable from the outer function's scope
    }

    return innerFunction; // Return the inner function
}

const closureFunction = outerFunction(); // outerFunction is called, but it returns innerFunction
closureFunction(); // Logs: "I am from the outer scope"