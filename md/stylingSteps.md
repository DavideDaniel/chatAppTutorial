##Styling the app



###CSS file

We'll reference our HTML file here a few times so for the whole code, please refer to [clientSteps link here eventually](clientsteps link here)


####Divs Divs Divs - IT'S ALL ABOUT DEM DIVS!

In order for us to have a responsive design (and what other way is there to be?!) let's start with some givens.

1. *Flexbox [link to flex](link here)
    This alone will make your CSS life easier
2. Use percentages and vh instead of fixed pixels when able to in order to have a relative design. [provide links on the side to responsive design]
    With the following snippet in your header you're establishing that the width of the content will be the device width, and with percentages you should be able to have easy responsive design.
```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
```
3. Framework your design, whether by hand, inDesign, photoshop or just with divs alone before you start so you have a path.
[more links](links)
4. A good tip to remember while working with divs is to give them all different colored borders so you can tell where they are exactly and help you position them as well. This is espescially convenient when planning to make your site responsive. For example here are 2 divs that we'll be working on:
```CSS

div.container {
    border: thin solid black;
    height: 80%;
    width: 80%;
    margin: auto;
}

.bottom {
    border: thin solid orange;
    height: 40px;
    width: 80%;
    margin: auto;
}
```



---
Keeping it simple, we're going to do our work with divs here.

####Creating the CSS file
1. So we've set up all our divs now:
```CSS

.container {
    border: thin solid black;
    height: 80%;
    width: 80%;
    /*min-width: 500px;*/
    display: flex;
    margin: auto;
}

#fixed {
    border: thin solid black;
    min-height: 10vh;
    margin: auto;
    text-align: center;
    padding: 2%;
    overflow: auto;
}

#inset {
    border: thin solid red;
    height: 100%;
    width: 100%;
    min-width: 30vh;
    overflow: auto;
    align-self: center;
    display: flex;
    flex-direction: column-reverse;
}

.bottom {
    display: flex;
    border: thin solid orange;
    height: 40px;
    width: 80%;
    display: flex;
    margin: auto;
    /*min-width: 500vh;*/
    font-size: 1.25em;
}
```

1. Let's first set the font-family for the whole app. We've chosen Helvetica with arial as a backup incase Helvetica isn't available for some reason.
```CSS
* {
    font-family: Helvetica, arial;
}
```

2. Now let's work from the top down. First we'll style the header:
```CSS
.header {
    background-color: #999; /*set the background-color*/
    font-size: 100%;    /*set the font-size to 100% (note the %)*/
    text-align: center; /*set the text-align value to center*/
    width: 50%; /*we'll establish the width at 50%*/
    margin-left: 25%; /*as we've set the width to 50% we can set the margin-left at 25% thereby centering the element*/
}
```




```html

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
    var connected = true;
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

6. While we're not doing anything complex yet, you can certainly have events occur upon close. Let's make a couple edits to display this.

    We'll add a boolean to the file
    ```javascript
    var userName = '';
    var connected = false; //set to false by default
    ```

    and have it return true upon connect
    ```javascript
    client.addEventListener( 'open', function () {
        connected = true;
    ```

    and have it return back to false upon close!
    ```javascript
    client.addEventListener( 'close', function () {
        connected = false;
    ```
Whie not necessary in our tutorial app, just note that it's possible to have events occur on the client side but you can't send anything to the server upon close.

7. BUT WAIT! How on earth do we send messages?!!
    Well.. there's an app for that...
    But seriously...
    We've already done it upon connection so let's make another event listener.

    ```javascript
    // grab the inputMsg element
    var inputMsg = document.getElementById( 'inputMsg' )

    inputMsg.addEventListener( 'keyup', function ( e ) {
        // upon pressing enter
        if ( e.keyCode === 13 ) {
            // grab the text in the input box and call it newMessage
            var newMessage = input.value;
            // with the .send method let's format and send our name & message
            client.send( userName + ': ' + newMessage );
            // finally, let's clear the input box
            input.value = ''; //clear the input area
        }
    } );
    ```
