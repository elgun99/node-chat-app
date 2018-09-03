const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node'
    },{
      id: 2,
      name: 'Jen',
      room: 'React'
    }, {
      id: 3,
      name: 'Jul',
      room: 'Node'
    }];
  });
  it('should remove a user', () => {
    var res = users.removeUser(3);
    expect(res.id).toEqual(3);
    expect(users.users.length).toBe(2);
  });
  it('should not remove a user', () => {
    var res = users.removeUser(5);
    expect(res).toBeFalsy();
    expect(users.users.length).toBe(3);
  });
  it('should find user', () => {
    var res = users.getUser(2);
    expect(res.id).toBe(2);
  });
  it('should not find user', () => {
    var res = users.getUser(4);
    expect(res).toBeFalsy();
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '32432',
      name: 'elgun',
      room: 'A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for node room', () => {
    var userList = users.getUserList('Node');
    expect(userList).toEqual(['Mike', 'Jul']);
  });
})
