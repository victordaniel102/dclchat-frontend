const net = require('net');
var client = new net.Socket();

client.connect(13000, '10.24.5.97', function(data) {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', (data) => console.log(Buffer.from(data).toString()));

client.on('close', function() {
	console.log('Connection closed');
});