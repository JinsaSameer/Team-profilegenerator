const Engineer = require("../engineer");
test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Alice", 10, "test@gmail.com", testValue);
    expect(e.gitHub).toBe(testValue);
  });
  
  test("can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Alice", 10, "test@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  test("getRole() ", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@gmail.com", testValue);
    expect(e.getRole()).toBe(testValue);
  });