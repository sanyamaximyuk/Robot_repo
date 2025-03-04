import { expect } from 'chai';

describe('Mocha test suit', () => {
    describe('Mocha first test', () => {
        it('2 + 2 = 4', () => {
            expect(2 + 2).to.be.equal(4);
        });
    });

    describe('Mocha second test', () => {
        it('2 + 2 = 4', () => {
            expect(2 + 2).not.to.be.equal(5);
        });
    });
});
