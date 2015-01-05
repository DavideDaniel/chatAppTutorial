##Client Side



####HTML file

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

####Client JS file

In order for the client to connect to the server we'll want to set up some variables.

1. Establish a new Websocket client. Remember to be explicit in naming your variables!
    
    ```javascript
    var client = new WebSocket( "ws://localhost:3000" );
    ```

2. Let's say that our client is going to log in and have a name. But prior to connecting the name will be a string that is empty.

    ```javascript
    var userName = '';
    ```

3. Let's setup event listeners for the client to determine what's happening.

    ```javascript
    client.addEventListener( 'open', function ( evt ) {

    } );


    client.addEventListener( 'message', function ( message ) {

    } )


    client.addEventListener( 'close', function ( evt ) {

    } );
    ```

4. Now to get more detailed...
    
    Upon connecting ('open') we want the client to set their name. In order to do this, let's have them send a message that changes their ```userName``` value. We'll utilize DOM manipulation and a keyboard event listener to do that.
    
    
    ```javascript
    // upon open
    client.addEventListener( 'open', function () {
        // grab inputTwo
        var inputTwo = document.getElementById( 'inputTwo' )
        // event listener on inputTwo
        inputTwo.addEventListener( 'keyup', function ( e ) {
            // if enter is pressed and the box is NOT empty
            if ( e.keyCode === 13 && inputOne.value.trim() != '' ) { 
                // set the userName value...
                var fixedDiv = document.querySelector( '#fixed' )
                userName = inputOne.value;
                // and grab the fixedDiv and set it's style to make it disappear!
                fixedDiv.style.display = 'none';
            }
        } );
    } );
    ```

5. Now that we've set our client's name upon connect, let's tackle what happens when we recieve a message.
    
    ```javascript
    // upon recieving a message
    client.addEventListener( 'message', function ( message ) {

        //create an li element
        var li = document.createElement( "li" );
        // change it's innerText value to the recieved message
        li.innerText = input.value;
        // set it's id to 'msg'
        li.setAttribute( 'id', 'msg' )
        // grab the ul element      
        var msgHolder = document.querySelector( "ul#msgHolder" );
        // and append it to include the new li
        msgHolder.appendChild( li );
        // then have it display BEFORE the newest element
        var before = ul.firstChild;
        ul.insertBefore( li, before )

    } );
    ```

    