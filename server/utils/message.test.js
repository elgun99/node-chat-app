var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage('elgun', 'hello');
    expect(res.from).toBe('elgun');
    expect(res.text).toBe('hello');
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var res = generateLocationMessage('elgun', 1, 1);
    expect(res).toMatchObject({
      from: 'elgun',
      url: 'https://www.google.com/maps?q=1,1'
    })
  })
})
