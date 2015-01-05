var client = new WebSocket( 'ws://localhost:3000' );

var userName = '';
var connected = false;

// upon open
client.addEventListener( 'open', function () {
	connected = true;
	console.log( "Connected to server." + connected );
	// grab inputTwo

	var inputTwo = document.getElementById( 'inputName' )
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

// upon recieving a message
client.addEventListener( 'message', function ( message ) {

	//create an li element
	var li = document.createElement( 'li' );
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

client.addEventListener( 'close', function () {
	connected = false;
	console.log( connected );
} );

var inputMsg = document.getElementById( 'inputMsg' )

inputMsg.addEventListener( 'keyup', function ( e ) {
	if ( e.keyCode === 13 ) {
		var newMessage = input.value;
		client.send( userName + ': ' + newMessage );
		input.value = ''; //clear the input area
	}

} );

