# Setting up your dev environment and intro to developer concepts

## Browser

There are many options out there for a browser.  The majority of people out there just use the browser that came on their computer because they don't know any better.  But now that you are getting into development you do.  All browser are **not** created equal.  If you are writing and testing code you should use either 

- [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/desktop/)
- [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html?brand=KERZ#eula)
    - Google Chrome Canary has the newest of the new Chrome features. Be forewarned: it's designed for developers and early adopters, and can sometimes break down completely.

So the reason you would use one of these is because or their debugging tools; meaning you have the ability to peer into the web page in a super efficient way to either see how it is working or why its broken.  

Remember it is important to regularly view the code you write in multiple browsers.  Different browsers will show your content in different ways.  It will even prevent you from using the same HTML, CSS, and JavaScript features.  The advanced browsers are known as evergreen browsers.  They will self update with out a major press release or marketing version.  Anyone who has ever worked in the web still gets shivers when they hear the name IE6.

For this course you will be developing in Google Chrome.  We will not be addressing supporting non evergreen browsers.

### Setup Chrome
1. Download [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html)
2. Install it with all the default settings
3. Open Chrome
4. Install plugin [Web developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en-US)
5. Install plugin [Wappalzyer](https://wappalyzer.com/download)
6. Install plugin [Clear Cache](https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn?hl=en)

### Chrome Dev tools
There are entire courses out there strictly teaching people how to use the chrome dev tools.  Opend the dev tools by right clicking on a web page and selecting *Inspect*.  We will only really be using two of these resources: *Elements*, *Console*, and maybe *Device Mode*.  

That's it for now, but don't worry you will get a lot of time with this.

## Choosing an editor

A text editor is not the same as a word processor.  A word processor allows you to independently apply styles to text like italics, bold, underline, size, and font.  Word processors were designed to create content to be read by people.  It like looking at a website.  You see the result of the formatting to make content easier to read.

A text editor is specific for writing code.  It can apply formatting based on file extension; you cannot just randomly make a word large or big or red.  You can write upper and lower case letters, numbers, and symbols.  The default font is always set to a monospaced font (each character is the same width).  This really helps visually align your code.

A text editor is not the same as and IDE (integrated development environment).  An IDE is more of a toolbox while a text editor is more of a tool.  IDE can really help with testing and compiling code but that comes at a price.  A lot of times you will have to buy an IDE and they have the potential to use a lot of your system resources and they can run on the slower side.  Some languages require an IDE.  These languages are monolithic and rarely have the coolest tech available.

A text editor is usually a pretty fast application.  When I said its more of a tool than a tool box you have to know that its a super tool thanks to the extensibility of the tool.  You can install all sorts of plugins that will give your editor more power.

Editors are very personal, and each persons editor of choice is always the best.  If you have one, I will not try to change your mind.  But know that if you use the one I use (bc its the best) I will be able to help you write code in a very efficient way.

### Some Editors

- Atom.io
- Sublime Text
- Visual Code
- Notepad++
- VIM
- Emacs

I use atom.io because its pretty.  It is the first editor I used where i did not want to immediately change the colors.  But truly atom is one of the more extensible editors out there.  It was also built using html, css, and javascript.  You can inspect this by opening the Developer Tools: *View > Toggle Developer Tools* menu, or by using the *cmd-alt-i* or *ctrl-alt-i*.

### Setup Atom.io
1. Download [Atom](https://atom.io/)
2. Install Atom with all the default options
	3. Windows note: You may need to rename the downloaded file to have a *.exe* extension
3. Open Atom

### Configure Atom
Atom has a ton of configurations that can be installed. We are going to install a few that will help us get started.

[Snippets](https://raw.githubusercontent.com/jordanpapaleo/_configs/master/atom/snippets.cson) | [Keymap MAC](https://raw.githubusercontent.com/jordanpapaleo/_configs/master/atom/keymap.cson) | [Keymap WIN](https://github.com/jordanpapaleo/_configs/blob/master/atom/keymap.WIN.cson) | [Config](https://raw.githubusercontent.com/jordanpapaleo/_configs/master/atom/config.cson)

**Mac**

1. Open the *Atom* menu and select *Preferences*
2. Click *Open Config Folder*
3. Replace the content in each file with the appropriate content from above
4. Close the config window

**Windows**

1. Open the *File* menu and select *Settings*
2. Click *Open Config Folder*
3. Replace the content in each file with the appropriate content from above
4. Close the config window


### Code Quality Tools
Atom allows its functionality to be extended the the installation of Packages.  Packages can be used for many things, but our main use for them now is to aid in the writing of clean and syntactically correct code.

1. We need to open our *Atom Settings* again (you just did that).
2. Click *Packages*
	- These are the packages that are already installed in our editor
	- Each one of them has settings that you can go into but for the core packages is usually good to leave them alone
1. Click *+ Install* and lets install these packages
	- editorconfig
	- linter
	- linter-js-standard
	- linter-htmlhint
	- linter-stylelint

### Recommended reading (or at least looking through)
- [Atom Flight Manual](http://flight-manual.atom.io/)

## OS Tweaks
We do a lot of things with files that normal users don't need to see.  A lot of files on your computers are hidden to prevent people from breaking stuff.  Its required that we see these files.  It is also super important that we show file extensions too.

**Mac**

1. Open your terminal
2. `defaults write com.apple.finder AppleShowAllFiles TRUE`
3. Open Finder and Finder Preferences
4. Click the *Advanced* tab
5. Check *Show all filename extensions*


**Windows**

1. Open your Explorer
1. Press the *alt* button to bring up your menu options
1. Open the *Tools* menu and select *Folder Options*
1. Click the *View* tab at the top
1. Under the *Advanced settings* there is a option for *Hidden files and folders*, select *Show hidden files, folders, and drives*
1. Uncheck *Hide extensions for known file types*
1. Click the `Apply to Folders` button
1. Click *Ok*


## Using your Terminal or Command Line
When most people think of programming a picture of the terminal may pop in there head.  It has the potential to be an intimidating tool but as a developer you will discover that you will not be able to live with you, and you will also realize it's not difficult to use at all.

**Open your console**.  This is going to be a hands on exercise

**Mac**

1. Mac: cmd + space Terminal
1. Get your current directory `pwd`
1. Get the name of the logged in user `whoami`
1. List the content in your current directory `ls`
1. Change you directory to your Desktop `cd Desktop`
1. Make a new directory called New `mkdir New`
1. Navigate into that directory `cd New`
1. Create a new file called README.txt `echo hello > README.txt`
1. Open this directory in Finder `open .`
1. Go to the immediate parent directory `cd ..`
1. Close the terminal `exit`

**Windows**

1. Win: Start > Run Command Prompt
1. Get your current directory  `cd`
1. Get the name of the logged in user `whoami`
1. List the content in your current directory `dir`
1. Change you directory to your Desktop `cd Desktop`
1. Make a new directory called New `mkdir New`
1. Navigate into that directory `cd New`
1. Create a new file called README.txt `echo hello > README.txt`
1. Open this directory in Explorer `explorer .`
1. Go to the immediate parent directory `cd ..`
1. Delete the New directory `rd New`
1. Close the terminal `exit`


## Terminal Cheatsheet
### Mac
| Command           | What it does                  
|-------------------|-------------------------------
| cd                | change directory              
| cd ..             | go up a directory             
| ls                | list directory content        
| mkdir folder-name | will create a folder          
| rm -rf name       | will delete folders and files
| open .            | will open the current terminal location in finder

### Windows
| Command           | What it does                  
|-------------------|-------------------------------
| cd                | change directory              
| cd ..             | go up a directory             
| dir               | list directory content        
| mkdir folder-name | will create a folder          
| rm -rf name       | will delete folders and files 
| explorer .        | will open the current terminal location in explorer


## File Issues in GitHub for questions after class
If you have questions any time we are not in class I am going to have you post a GH Issue to our course repo.



# Retain and Prepare
## Retain
- Go to any website and inspect it.  Look at the HTML on the page.  Look at the structure you see on the pages.  Just do some exploring.
- Play around in your terminal.  Move around, make some folders, files, and delete them.  Before you know it, you will be super comfortable in there.
- Go into GH and look at other projects, look at their files, try to figure out what the README.md files does.

## Prepare
- Next time we will start talking about HTML.
- We are going to go over all of this content but you really need to look at these pages before class:
	- [HTML Basic](http://www.w3schools.com/html/html_basic.asp)
	- [HTML Elements](http://www.w3schools.com/html/html_elements.asp)
	- [HTML Attributes](http://www.w3schools.com/html/html_attributes.asp)
- Take this [quiz](http://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML).  You will not be graded but it will help you know what you know or don't

