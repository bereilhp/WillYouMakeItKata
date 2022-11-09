const fuel = require('./fuelCalc.js');

test("Check if you can make it with fuel", () => {
    expect(fuel()).toBe(true);
})