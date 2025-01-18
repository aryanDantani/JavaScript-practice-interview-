// Pass by Value
// For primitive types, a copy of the value is passed. Changes made to the parameter inside the function do not affect the original variable.


let a = 10;

function modifyValue(x) {
    x = 20; // Change the value of x (local copy)
    console.log("Inside function:", x); // Logs: 20
}

modifyValue(a);
console.log("Outside function:", a);

// Pass by Reference
// For objects, the reference to the object is passed. Changes to the object inside the function affect the original object.

let obj = { name: "Alice" };

function modifyObject(objRef) {
    objRef.name = "Bob"; // Modifies the original object
    console.log("Inside function:", objRef.name); // Logs: Bob
}

modifyObject(obj);
console.log("Outside function:", obj.name); 