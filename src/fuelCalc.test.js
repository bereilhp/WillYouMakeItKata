const fuel = require('./fuelCalc.js');

test("Check if you can make it with fuel", () => {
    expect(fuel(40)).toBe(40);
})