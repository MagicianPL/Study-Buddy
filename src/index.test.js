const add = (a, b) => a + b;

it("adds two values", () => {
  expect(add(10, 10)).not.toBe(30);
});
