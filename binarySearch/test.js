const app = require('./app');

describe('Binary Search Function', () => {
    test('Give an array and an int, it should return the int position in the array', () => {
        const array = [1,2,3,4,5,6];
        const int = 2;
        const output = 1;
        expect(app(array, int)).toEqual(output);
    })
    test('Give an array and an int, it should return the int position in the array', () => {
        const array = [3,5,8,1,2,4,6];
        const int = 8;
        const output = 6;
        expect(app(array, int)).toEqual(output);
    })
});