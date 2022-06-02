
const Employee = require("../Employee");
describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    test("Can set name via constructor arguments", () => {   // <---- this line names the test
        const name = "Alice";   // <----- make variable for data being passed into test
        const e = new Employee(name);  // <----- create variable for the function being tested in this case Employee name being passed into said function
        expect(e.name).toBe(name);  // <-----  and then what we expect the response back to be, in this instance we expect the employee's name to be Alice
      });
      test("Can set id via constructor arguments", () => {   // <---- this line names the test
        const name = "Alice";
        const testId = "10";   // <----- make variable for data being passed into test
        const e = new Employee(name,testId);  // <----- create variable for the function being tested in this case Employee name being passed into said function
        expect(e.id).toBe(testId);  // <-----  and then what we expect the response back to be, in this instance we expect the employee's name to be Alice
      });
      test("Can set email via constructor arguments", () => {   // <---- this line names the test
        const name = "Alice";
        const testId = "10";
        const testEmail = "test@gmail.com";   // <----- make variable for data being passed into test
        const e = new Employee(name, testId, testEmail);  // <----- create variable for the function being tested in this case Employee name being passed into said function
        expect(e.email).toBe(testEmail);  // <-----  and then what we expect the response back to be, in this instance we expect the employee's name to be Alice
      });
      describe("getName", () => {
        test("Can get name via getName()", () => {
            const testValue = "Alice";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
    describe("getId", () => {
        test("Can get id via getId()", () => {
            const name = "Alice";
            const testValue = "10";
            const e = new Employee(name, testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    describe("getEmail", () => {
        test("Can get email via getEmail()", () => {
            const name = "Alice";
            const testId = "10";
            const testValue = "test@gmail.com";
            const e = new Employee(name, testId, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        test("getRole()", () => {
            const testValue = "Employee";
            const e = new Employee("Alice" ,10, "test@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
}); 