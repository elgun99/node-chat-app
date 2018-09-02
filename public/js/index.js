var socket = io();

socket.on('connect', function() {
  console.log('Connected to the server');
  socket.emit('createMessage', {
    from: 'someone',
    test: 'hello'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected');
})

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
