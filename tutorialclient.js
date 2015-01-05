var client = new WebSocket( 'ws://localhost:3000' );

var userName = '';
var connected = false;

client.addEventListener( "open", function ( evt ) {
connected = true;
console.log( "Connected to server." + connected );

var inputTwo = document.getElementById( "inputTwo" )

	inputTwo.addEventListener( "keyup", function ( e ) {
		if ( e.keyCode === 13 && inputOne.value.trim() != '' ) {
			var fixedDiv = document.querySelector( "#fixed" )
			var button = document.getElementById( "login" );
			userName = inputOne.value;
			fixedDiv.style.display = 'none';
		}

	} );

} );

client.addEventListener( 'message', function ( message ) {
    // var msg = JSON.parse( message.data );
    	var li = document.createElement("li");
      li.innerText= message;
      li.style.listStyle = "none";
      var chatbox = document.getElementById("chat");
      chatbox.appendChild(li);

      var before = inset.firstChild;
	inset.insertBefore( li, before )
    

} );

client.addEventListener('close', function () {
connected = false;
console.log(connected);
});

var input = document.getElementById("inputOne")
        
        input.addEventListener("keyup", function(e) {
        if(e.keyCode === 13) {
        var newMessage = input.value;
        client.send(userName+': '+ newMessage);
        input.value = ''; //clear the input area
      }

  });


// TEST appending
// var input = document.getElementById("inputMsg")

        
//         input.addEventListener("keyup", function(e) {
//         if(e.keyCode === 13) {
//         var ul
//         var li = document.createElement("li");
//       	li.innerText= input.value;
//       	li.setAttribute('id', 'msg')
//       	var msgHolder = document.querySelector("ul#msgHolder");
//       	msgHolder.appendChild(li);

//       	var before = ul.firstChild;
// 		ul.insertBefore( li, before )
//         input.value = ''; //clear the input area
//       }

//   });

