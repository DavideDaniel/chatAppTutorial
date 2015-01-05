//
// var WebSocket = require("ws").Server;
// var chatServ = new WebSocket({port:3000});
// var users = [];
// var namListS = [];
// var msgHistory = [];
//
// chatServ.on("connection" , function(ws){
//   console.log("connection");
//   users.push(ws);
//   msgHistory.forEach(function(m){ws.send(m)});
//
//   ws.on("message" , function(msg){
//
//     var info  = JSON.parse(msg);
//     var spkr = users.indexOf(ws);
//     console.log(info);
//     console.log(namListS);
//     namListS[spkr] = info["handle"];
//     info["namList"] = namListS;
//     info["message"] = cens(info["message"] , prof);
//     var infoOut = JSON.stringify(info);
//     msgHistory.push(infoOut);
//     users.forEach(function(usr){usr.send(infoOut)});
//   })
//
//   ws.on("close" , function(){
//     var client = users.indexOf(ws);
//     users.splice(client,1);
//     console.log("a client has disconnected");
//   })
//
//
// })



var WebSocket = require("ws").Server;
var chatServ = new WebSocket({port:3000});
var users = [];

    chatServ.on("connection" , function(ws){
      console.log("connection");
      users.push(ws);

      ws.on("message" , function(msg){
        console.log(msg);
        users.forEach(function(usr){usr.send(msg)});
      })

      ws.on("close" , function(){
        var client = users.indexOf(ws);
        users.splice(client,1);
        console.log("a client has disconnected");
      })

    })
