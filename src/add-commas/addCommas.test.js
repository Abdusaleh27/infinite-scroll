const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("illegal inputs throw an error", () => {
    expect(() => addCommas("1")).toThrow("Number input only");
    expect(() => addCommas(NaN)).toThrow("Number input only");
    expect(() => addCommas()).toThrow("Number input only");
    expect(() => addCommas(null)).toThrow("Number input only");

  });

  test("Inputs of 3 or less digits", () => {
    expect(addCommas(1)).toBe("1");
    expect(addCommas(-1)).toBe("-1");
  });

  test("Inputs of 4 or more digits", () => {
    expect(addCommas(1)).toBe("1");
    expect(addCommas(-1)).toBe("-1");
  });

  test("Inputs of negative and 3 digits", () => {
    expect(addCommas(-900)).toBe("-900");
    expect(addCommas(-999)).toBe("-999");
  });

  test("Inputs positive 4 or more digits", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(11000)).toBe("11,000");
    expect(addCommas(111000)).toBe("111,000");
    expect(addCommas(1111000)).toBe("1,111,000");
    expect(addCommas(11111000)).toBe("11,111,000");
  });

  test("Inputs negative 4 or more digits", () => {
    expect(addCommas(-1000)).toBe("-1,000");
    expect(addCommas(-11000)).toBe("-11,000");
    expect(addCommas(-111000)).toBe("-111,000");
    expect(addCommas(-1111000)).toBe("-1,111,000");
    expect(addCommas(-11111000)).toBe("-11,111,000");
  });
  
});
