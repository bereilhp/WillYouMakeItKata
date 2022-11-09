const fuel = require('./fuelCalc.js');

test("Check if you can make it with fuel", () => {
    expect(fuel(50,25,2)).toBe(50);
})