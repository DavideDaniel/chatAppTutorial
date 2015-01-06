Local Testing —

Its important to local test your site as much as possible but mainly after you get it set up and have finished each feature. make sure to put console.log() at different places in your code so that you can debug and know where your code is getting to and where it might be breaking.

1. NAVIGATE IN TERMINAL TO FOLDER

— Open up a terminal window and navigate into the folder that holds your Chat App

    (show here how to cd into your file via a screen shot)

2. OPEN YOUR INDEX.HTML FILE

— To see your Chat App on the client side you will need to open your html file locally to show you what if would look like and if your chat features work.

— while your in your folder, type in the command to open the index.html file.

    (show here how to open index.html file)

3. OOPS and ERROR OCCURED!

— Before we can actually use our Chat App, we will need to run our Node.js file as well as understand what to look for with errors.

— if on mac: press COMMAND + ALT + I on your keyboard. This should bring up the developer tools at the bottom.

— Navigate to the console by clicking on the console tap in the top nav bar.
    (show screen shot of where the console tab is.)

— This console area will show if you what errors occur and on what line they occur in what file (client or server side). Also you can see how many errors have occurred total from any window in the developers tools by looking in the top right hand corner of the window.

    (show screen shot of developer tools window pointing to the errors and error indicator)

4. RUN NODE.JS FILE

— the first thing we need to do and should of done to test locally was run our Node.js file and start up our server side javascript.

— start by navigating into the folder with the Node.js file and then type in the command:
    “node file-name”

— then press enter. you should see the cursor go the far left hand side on the next line. It is now listening for a client connection. If you ever see an error in the developer tools: “web socket console is closing or is already closed”, probably need to come check this terminal to see if there was an error thrown.

— if there was an error thrown the server will shutdown and it will tell you what line and the error to look for. debug this and then try again.

5. REFRESH HTML FILE

— Now that the server is running, go refresh your index.html page in the browser

6. CHECK FOR CONSOLE ERRORS AND DEBUG!

— Now open the developer tools and check for console errors.

— If there are errors find where they are fix them and save the file.

— Then try again.
