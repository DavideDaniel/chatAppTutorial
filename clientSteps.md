##Client Side



HTML setup

Let's make a barebones HTML file that'll allow us to use the client for the chat app.


```html
<html lang="en">
    <head>
        <meta charset="UTF-8">

        <link rel="stylesheet" type="text/css" href="stylechat.css">
        <script src="node_modules/moment/moment.js"></script>
        <title>Chat</title>

    </head>
    <style type="text/css">
    </style>
    <header>
        <div class="header">
        </div>
    </header>
    <body>
        <div class="container">
            <div class="sidebar">
                <div id="title">
                    <h4>slacker</h4>
                </div>

                    <div class="channels">
                        <h4>@channels</h4>
                    <ul id = "channels"><li></li></ul>
                </div>
                <div class="users">
                    <h4>@users</h4>
                <ul id="users"><li></li></ul>
            </div>


    </div>
    <div id="inset">
        <div id = "fixed">
                                <p id="enter"> Please enter your screen name and channel:</p></br>
                                <input type="text" id="inputOne" placeholder="Name"></input>
                                <input type="text" id="inputTwo" placeholder ="Room "></input>
        </div>
    </div>
</div>
<div class="bottom">
    <div class="me"><div id="profile"></div></div>
    <div class="input">
        <input placeholder="Type here" id="inputMsg"></input>
    </div>
</div>
</div>
<script type="text/javascript" src="c4.js">
</script>
<script>
</script>
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

3. The client determines whether it's connected via an event listener:


```javascript

client.addEventListener( "open", function ( evt ) {
console.log( "Connected to server" );
} );```

4. 
