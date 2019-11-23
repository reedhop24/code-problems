const app = require("./app");

describe('Binary representation', () => {
    test('It should output the binary representation of an int', () => {
        const input = 52;
        const output = 110100;
        expect(app(input)).toEqual(output);
    });
    test('It should output the binary representation of an int', () => {
        const input = 180;
        const output = 10110100;
        expect(app(input)).toEqual(output);
    });
});