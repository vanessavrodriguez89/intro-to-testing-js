// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!"
    } else if (typeof input == "boolean") {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}

sayHello("Jane")
sayHello("Alex")
sayHello("Pat")
sayHello()
sayHello(true)
sayHello(false)
sayHello(null)
// sayHello("")
// sayHello(2.3)
// sayHello("5")



    // the input is another data type like an array, object, or function?