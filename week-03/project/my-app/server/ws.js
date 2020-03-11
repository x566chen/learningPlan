const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
  //console.log(ws)
  ws.on('message', function incoming(data) {
    console.log(data)
    wss.clients.forEach(function each(client) {
      //console.log(client)
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
        console.log(data);
        console.log(typeof(data))
      }
    });
  });
});