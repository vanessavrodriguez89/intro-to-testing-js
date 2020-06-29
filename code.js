// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input === "undefined") {
        return "Hello, World!"
    } else if (typeof input == "boolean") {
        return "Hello, World!"
    } else if (typeof input == "number") {
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
sayHello("")
sayHello(2.3)
sayHello("5")


//isFive function
function isFive(input1) {
    if (input1 === 5) {
        return true
    } else {
        return false
    }
}

// console.log(isFive(6));
// console.log(isFive("testing environment"));
// console.log(isFive("5"));
// console.log(isFive(null));
// console.log(isFive(false));
// console.log(isFive(["bananas", "apples", "oranges"]));
// console.log(isFive(helloWorld()));


function isEven(num) {
    return 5;
}

console.log(isEven(5));
console.log(isEven(-2));
console.log(isEven(""));
console.log(isEven());

function isVowel(input2) {
    if (input2 === "a" || "A") {
        return true
    } else {
        return false
    }
}