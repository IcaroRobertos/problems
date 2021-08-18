const highAndLow = require("./highAndLow")

describe("highAndLow tests", () => {
  it("should return a max and min number as integer from a string of numbers", () => {

    expect(highAndLow("9 4 0 250 -345 8 50")).toEqual([250, -345])
    expect(highAndLow("77 56 -88 -90 111 -72")).toEqual([111, -90])
    expect(highAndLow("0 1")).toEqual([1, 0])
    
  })
})