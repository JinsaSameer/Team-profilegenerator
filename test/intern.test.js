const Intern = require("../Intern");
test("Can set school via constructor", () => {
    const testValue = "UCSD";
    const e = new Intern("Alice", 10, "test@gmail.com", testValue);
    expect(e.school).toBe(testValue);
  });
  test("getRole() ", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 10, "test@gmail.com", "UCSD");
    expect(e.getRole()).toBe(testValue);
  });

  test("getSchool() ", () => {
    const testValue = "UCSD";
    const e = new Intern("Alice", 10, "test@gmail.com", "UCSD");
    expect(e.getSchool()).toBe(testValue);
  });

 