// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Exercise 1
describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should never return 'null' when called", function() {
        expect(sayHello(null)).not.toBe(null);
    });
    it('should never return the string "Hello, World!" with an empty string', function() {
        expect(sayHello("")).not.toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with a number', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should never return the string "Hello, World!" when executed with a number inside of a string', function() {
        expect(sayHello("5")).not.toBe("Hello, World!");
    });
    it('should never return the string "Hello, World!" when executed with an array', function() {
        expect(sayHello(["bananas", "apples", "oranges"])).not.toBe("Hello, World!");
    });
})

describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    })
    it("should return a boolean no matter what the input is", function() {
        expect(typeof isFive(true)).toBe("boolean");
        expect(typeof isFive("string")).toBe("boolean");
        expect(typeof isFive("number")).toBe("boolean");
        expect(typeof isFive(undefined)).toBe("boolean");
        expect(typeof isFive(null)).toBe("boolean");
        expect(typeof isFive(["array1", "array2", "array3"])).toBe("boolean");
    })
})

describe("isEven", function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should only be a number", function() {
        expect(typeof isEven()).toBe("number");
    })
})

describe("isVowel", function () {
    it("should always return a boolean", function () {
        expect(typeof isVowel()).toBe("boolean")
    })
})


/*}
Start with the smallest tests first.
Write just enough code to green the test
Build up functionality one small piece at a time.
Commit your work to git at each step.
Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
Assert that:
isVowel always returns a boolean
isVowel("a") returns true
isVowel("A") returns true
isVowel("y") returns false
isVowel(4) returns false
isVowel(true) or isVowel(false) both return false
isVowel("banana") returns false
isVowel() returns false
Refactor when appropriate and possible.
Repeat until the tests are robust and the function works as intended.
Commit your work to git and push to GitHub before moving forward.
.*/