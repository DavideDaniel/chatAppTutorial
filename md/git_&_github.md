##Git & Github

<h3 id = "1">Creating a Git Repository</h3>

The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new empty repository. Most of the other Git commands are not available outside of an initialized repository, so this is usually the first command you’ll run in a new project.

The git clone command copies an existing Git repository. This is sort of like svn checkout, except the “working copy” is a full-fledged Git repository—it has its own history, manages its own files, and is a completely isolated environment from the original repository.

The git config command lets you configure your Git installation (or an individual repository) from the command line. This command can define everything from user info to preferences to the behavior of a repository. Several common configuration options are listed below. 

Linktos or Asides or Syntax Bubble:

Executing git init creates a .git subdirectory in the project root, which contains all of the necessary metadata for the repo, and makes it possible to start recording revisions of the project.. 

Git clone <repo>
Clone the repository located at <repo> onto the local machine. The original repository can be located on the local filesystem or on a remote machine accessible via HTTP or SSH.

To update your local repository to the newest commit, execute git pull in your working directory to fetch and merge remote changes. To merge another branch in


### Version control with Github

Assuming you've already created a folder inside your text editor. Now its time to create a github repo and push to github. 

1. Navigate to the working directory 

	```
	$ cd tutorialChatApp
	```
2. Check status & proceed

	```
	$ git status
	```

3. Add any changes - note `add .` will add all but you can also specify files

	```
	$ git add .
	```
4. Commit your changes - whatever you write here will help in tracking changes

	```
	$ git commit -m "First commit"

	```
	Your changes are now in your local working copy

5. Push up to git via https (not SSH)- granted you have no troubles with your log in. Make sure 

	```
	$ git push origin master

	```
