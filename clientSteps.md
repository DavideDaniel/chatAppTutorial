##Client Side



HTML setup

Let's make a barebones HTML file that'll allow us to use the client for the chat app.


```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <!-- link to style sheet - we'll get to his later! -->
        <link rel="stylesheet" type="text/css" href="tutorialStyle.css">

        <title>Chat</title>

    </head>
    <body>
        <!-- In the beginning there was a div for the header -->
        <div class="header">
            <h2>Chat App</h2>
        </div>

        <!-- But! Here's a div that binds them all! -->
        <div class="container">
            <!-- and in the darkness... presents the message... -->
            <div id="inset">
                <!-- but first this div collects your name! -->
                <div id = "fixed">
                    <p id="enter"> Please enter your screen name:</p></br>
                    <input type="text" id="inputOne" placeholder="Name"></input>
                </div>

                <ul id="msgHolder"></ul>

            </div>
        </div>
        
        <!-- This div holds the input box -->
        <div class="bottom">
            <!-- <div class="bottom"> -->
                <input placeholder="Type here" id="inputMsg"></input>
            <!-- </div> -->
        </div>



<script type="text/javascript" src="tutorialclient.js"></script>
</body>
</html>
```

##Client Side setup

In order for the client to connect to the server we'll want to set up some variables.

1. Establish a new Websocket client. Remember to be explicit in naming your variables!
    ```javascript
    var client = new WebSocket( "ws://localhost:3000" );```

2. Let's say that our client is going to log in and have a name. But prior to connecting the name will be a string that is empty.

    ```javascript
    var userName = '';
    ```

3. Let's setup event listeners for the client to determine what's happening.


The client determines whether it's connected via an event listener:

```javascript
client.addEventListener( 'open', function ( evt ) {

} );



client.addEventListener( 'message', function ( message ) {

} )


client.addEventListener( 'close', function ( evt ) {

} );```

4. Client listens for a message and executes a function with the message as the parameter here
