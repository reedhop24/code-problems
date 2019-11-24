// const TestRunner = require("jest-runner")
const app = require("./app");

describe("anagram", () => {
    test("it should return true if an anagram is detected and false if not", () => {
        const input1 = 'reed';
        const input2 = 'deer';
        const output = true;
        expect(app(input1, input2)).toEqual(output);
    });
    test("it should return true if an anagram is detected and false if not", () => {
        const input1 = 'listen';
        const input2 = 'silent';
        const output = true;
        expect(app(input1, input2)).toEqual(output);
    });
    test("it should return true if an anagram is detected and false if not", () => {
        const input1 = 'reed';
        const input2 = 'beer';
        const output = false;
        expect(app(input1, input2)).toEqual(output);
    });
});