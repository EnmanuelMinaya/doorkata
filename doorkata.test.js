
const { closesDoor } = require('./doorkata.js');

test('takes door open returns door close', () => {
    expect(closesDoor('open')).toBe('closed');
});