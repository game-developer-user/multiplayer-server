const edgeMultiplay = require('edge-multiplay')();


edgeMultiplay.wsServer.on('newConnection', (path, connection)=>{
   edgeMultiplay.addLobby(connection)
})