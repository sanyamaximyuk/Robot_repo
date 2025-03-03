
describe('Jest test suit', () => {
    describe('Jest first test', () => {
        test('2 + 2 = 4', () => {
            expect(2 + 2).toBe(4);
        });
    });

    describe('Jest second test', () => {
        test('2 + 2 = 4', () => {
            expect(2 + 2).not.toBe(5);
        });
    });
});
