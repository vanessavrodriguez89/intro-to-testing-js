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

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello!" when executed', function() {
        expect(sayHello()).toBe("Hello!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
})

/*Open your terminal and navigate to the local directory where you cloned this project.
    First, git status. Notice which files are tracked by git and which files have changes.
    Second, type git add -A to tell git that you want to get all the changed files staged for commit.
                                                                                                  Now, type git status. You should see file names in green. This means that the files are ready for commit.
                                                                                                                                                                                                        Next, type git commit -m "add the first test and solution for intro-to-testing"
Type git status, again, to make sure that all files are added and committed.
    Finally, push your work by running git push. Pushing uploads your new commits to your remote repository, meaning your own fork on GitHub.*/

