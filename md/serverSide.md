<h3 id = "3">Server side</h3>

A websocket server can receive and send data among multiple clients, and
is necessary to host your chat app. The purpose of this server is to
relay messages,  This code will require several crucial lines of code,
but additional features can be added to make your chat app more robust.

1. First, the ws module must be required.
<pre class="prettyprint">
var WebSocket = require("ws").Server;
var chatServer = new WebSocket({port:3000});
</pre>
Note that the Server method is necessary when requiring ws for the
purpose of creating a server. A port number of your choice should be
declared, but it must consistent across future code in order for the
server and clients to interact.

2. An empty array should be created to track clients connecting to the
server. This will allow the server to send information to multiple
clients at once.
<pre class="prettyprint">
var users = [];
</pre>

3. Event listeners are added to the server in order to define how it
handles connections and messages.

<pre class="prettyprint">
chatServer.on("connection" , function(ws){
  console.log("connection");
  users.push(ws);
}
</pre>
The above code adds every connecting client to the users array, and
console logs a simple message that will help you monitor /test
functionality. Nested within the above function, you must also add
event listeners to the clients, which are defined above by the ws parameter.

<pre class="prettyprint">
  ws.on("message" , function(msg){
    console.log(msg);
    users.forEach(function(usr){usr.send(msg)});
  })
</pre>
4. Every time there is a message event, the above code will log that
message on the server console, and send the message to every user in the
users array, including the original sender.

5. This next step is virtually essential. In the event a client disconnects,
any attempt the server makes to send a message will cause it to crash.
We must add another event listener to the client that will remove it
from the users array on a close event.

<pre class="prettyprint">
  ws.on("close" , function(){
      var clientIndex = users.indexOf(ws);
      users.splice(clientIndex,1);
      console.log("a client has disconnected");
  })
</pre>
Every time a client disconnects, the above code finds the index of that
client with the users array, and then deletes their information from the
array. This code in its current state is completely usable for the purpose
of serving a simple chat app.

<pre class="prettyprint">
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
</pre>

Other possible features you might want to consider adding to your app are
a persistent message history, private messages between users, and word filtering
functions. Incorporating JSON into your code will allow you to package more
information in every message beyond simple strings.

</span>

</div>