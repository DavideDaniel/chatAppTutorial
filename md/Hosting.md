HOSTING —

1. PUSH FILES TO GITHUB

— Before we can set up a the hosting side of things we need to make sure out github is up to date!

— As you remember in steps one and two we set up the git repo and connected it to our github repo.

— lets push our files up to that repo:

—first initiate push by typing in the terminal: git add .

	(screen shot of git add .)

—then asign a commit log by typing in the terminal: git commit -m “first commit”

	(screen shot of git commit)

—then push it by typing in the terminal: git push master origin

	(screen shot of push)

— your now pushed up to the repo

2. SSH INTO THE SERVER

— Next we will need to SSH into the server, so open up a new terminal window.

— in the terminal type: ssh root@yourserveraddress

— type in your password

3. CLONE GITHUB REPO

— Now that we are in the server we need to clone our repo over so that we have all the files.

— go to your github page and find the directory address and copy it.

— in the Server Terminal type: git clone directoryAddress

— once it has cloned, type in ls in the command line and press enter. This should show you if it is in the directory. cd into the folder.

4. RUN NODE.JS FILE

— Now that we have our file all set up we need to start our server, run your node file just like you did in step 6. if you need help or reference, here is a link back the step.

— Now open up a new terminal and ssh into your server again using #2 in this step.

5. HTTP-SERVER

— Once you have your second terminal open and your ssh’d in, its time to start up your server.

— In the terminal type in: http-server -p80

— this should start the server and allow you to go to the server address and see your chat app up and running. The -p80 at the end allows you to not have to have a subdomain and make a clean and tidy server address. If any errors occur you can see them on the terminal where you are running the node file and also in the client side browser in the developer tools.

6. SHUTTING DOWN THE SERVER

— when you are done or need to fix a bug, press CONTROL + C at anytime to shut the server down. you will need to shut the node file down as well.

— then you will fix changes locally, then push up to github.

— once they are pushed go into the ssh terminal and you will need to pull the files up.

— to do this type in the terminal: git pull master origin

— now repeat the steps in #4 and #5.
