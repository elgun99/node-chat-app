var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage('elgun', 'hello');
    expect(res.from).toBe('elgun');
    expect(res.text).toBe('hello');
    expect(typeof res.createdAt).toBe('number');
  });
});
