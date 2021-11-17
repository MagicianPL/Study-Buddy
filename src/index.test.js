const add = (x, y) => {
  return x + y;
};

it("adds to values", () => {
  expect(add(2, 4)).toBe(6);
});
