var client = new WebSocket( 'ws://localhost:3000' );

var userName = '';
var connected = false;

// upon open
client.addEventListener( 'open', function () {
	connected = true;
	console.log( "Connected to server." + connected );
	// grab inputTwo

	var inputName = document.getElementById( 'inputName' )
	// event listener on inputTwo
	inputName.addEventListener( 'keyup', function ( e ) {
		// if enter is pressed and the box is NOT empty
		if ( e.keyCode === 13 && inputName.value.trim() != '' ) {
			// set the userName value...
			var fixedDiv = document.querySelector( '#fixed' )
			userName = inputName.value;
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
	li.innerText = message.data;
	// set it's id to 'msg'
	li.setAttribute( 'id', 'msg' )
	// grab the ul element  	

	var ul = document.getElementById( "msgHolder" );
	// and append it to include the new li
	ul.appendChild( li );
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
		var newMessage = inputMsg.value;
		client.send( userName + ': ' + newMessage );
		inputMsg.value = ''; //clear the input area
	}

} );

