const Intern = require('../lib/Intern');

test('Can set school for the constructor', () => {
  const testValue = "BYU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "BYU");
  expect(e.getRole()).toBe(testValue);
});

test('Can get school from getSchool()', () => {
  const testValue = "BYU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});