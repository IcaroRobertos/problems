const sumTwoSmallestNumbers = require("./sumTwoSmallestNumbers")

describe("sumTwoSmallestNumbers tests", () => {
  it("should sum the two smallest numbers in array", () => {
    expect(sumTwoSmallestNumbers([1,62,9])).toBe(10)
    expect(sumTwoSmallestNumbers([55, 99, 200, 1, 7])).toBe(8)
    expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77])).toBe(7)
  })
})