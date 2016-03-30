# Version Control

Version control is a technological solution for being human.  How many of you have ever deleted or changed something that you regret?  We all have.  Programmers don't just write code, we have this nasty habit of changing code.  Unfortunately, no programmer is perfect, and sometimes, mistakes are made. Version control gives us the ability to go back to an older version of a file.  It also allows us to see the changes that have occurred to a file over time.

There are many version control systems out there. Often they are divided into two groups: `centralized` and `distributed`.

**Centralized** version control systems (CVCS) are based on the idea that there is a single central copy of your project somewhere (probably on a server), and programmers will commit their changes to this central copy.  Examples: CVS, Subversion, and Perforce.

**Distributed** systems (DVCS) do not necessarily rely on a central server to store all the versions of a project's files. Instead, every developer a copy of a repository and has the full history of the project on their own hard drive. This copy (or clone) has all of the metadata of the original. Examples: Git, Mercurial, Bazaar or Darcs.

<!--![image](https://git-scm.com/book/en/v2/book/01-introduction/images/distributed.png)-->

**Read More**

- [Wikipedia](https://en.wikipedia.org/wiki/Version_control)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

## Git

Git is a distributed system.  Conceptually, most other systems store information as a list of file-based changes. You can think of the information they keep as a set of files and the changes made to each file over time.  

<!--![image](https://git-scm.com/book/en/v2/book/01-introduction/images/deltas.png)-->

Instead, Git thinks of its data more like a set of snapshots of a miniature filesystem. 
<!--![image](https://git-scm.com/book/en/v2/book/01-introduction/images/snapshots.png)-->

Most of the interaction you have with git will be on your own local computer.  Git can operate completely independently of a network connection; it doesn’t need to go out to the server to get the history and display it for you.  This is accomplished by having a local git repository/database.  You work with it and when you are ready, you can sync up with a git repository on the internet.

There are 3 states of a file in git: committed, modified, and staged.

- Committed: The data is safely stored in your local repo/database.
- Modified: You have changed the file but have not committed it to your database yet.
- Staged: You have marked a modified file in its current version to go into your next commit.

<!--![image](https://git-scm.com/book/en/v2/book/01-introduction/images/areas.png)-->

**Basic Git file workflow once you have created a file:**

1. Modify a file in your project and git will detect that it has been changed.
1. You can verify there has been a change by running `git status`
1. Stage your changes: `git add fileName` or `git add --all`
    - `fileName` needs to be the project path 
    - The `--all` flag will stage all files
1. Commit your staged changes permanently to your git repository `git commit fileName -m "Here is what I changed and why"`
    - The `-m` flag allows you to include a quoted message in your commit command

**PUSHING CODE: Basic Git repository workflow with a web platform (GitHub or BitBucket)**

1. Create a new git repository at the root folder of your project `git init`
    - This will also make the master branch for your project
    - Verify your branch `git branch` 
1. Create a new branch to work on `git checkout -b branch-name`
2. Make changes following the git file work flow
3. Send those changes to the web platform you are using `git push origin branch-name`
    - **push** is the process of moving code from your computer to another location
    - **origin** is an easy to read/type name for a remote code location
    - This command is saying that I want to move my committed code in a named branch to a remote location
  
**PULLING CODE: Basic Git repository workflow with a web platform (GitHub or BitBucket)**

1. You need to get code from a remote location to your local computer.  To do that you will need the address for that remote location
1. Make a local copy from a remote repository: `git clone https://github.com/CodeTahoe/CT100.git`
    - **clone** will tell git to copy the entire git repository from another location
    - This example will copy the CT100 repository from GitHub into a folder called CT100 and will set master as the active branch
1. So let's say the repository has changed and you need to pull the updates down: `git pull origin branch-name`
    - **pull** will request the current snapshot of a repository on a server to be added to your code
    - **NOTE:**  you will need to make sure you have committed all of your changes before you do a pull.

### Branch
Git has a concept of branching a code repository.  Branching is kind of like creating a copy on your local computer.  But this copy has a reference to the main code repository giving us the ability to merge any changes back into our main repo.  Branches allow developers to work on code without changing the master repository.  You can and should branch code to build a feature, or to  fix a bug, or test an idea.  At any time, you can delete your branch without having any affect on the main repository.  Basically you should always branch a repo if you are going to change it.  This is SOOOOOO important.

### Merging
So we just talked about branches and now we need to bring our changes back into the main repo.  This happens when we merge code.  We will get deeper into this later because, right now, we will allow GiHub to do all this for us.

## GitHub
GitHub is a code hosting platform for git that promotes collaboration. It lets you and others work together on projects from anywhere.  You can create projects for just about anything.  I use GitHub to hold the code my projects, to let me contribute to the code on other projects, to keep track of my computers configuration files, and to even plan events.

You will use GH to keep track of every piece of code you write in this class.  By the end of this session you will have put a ton of content into your own personal repository.

### Setup
1. Go to [GitHub](https://github.com/)
2. Sign up
3. [EXERCISE: Learning GitHub](https://guides.github.com/activities/hello-world/)


### Forks
Forking is a lot like branching but instead of doing it locally and in a repo we actually copy a repo in GitHub making it our own.  Its like a server side branch.


### Issues
Github uses a concept of issues.  The purpose of issues is basically calling out something thats broken or needs to be done on a repository.  Issues are not a part of *git*; they are purely a GH feature.

### Pull Request
A pull request is a GH feature that allows you to submit code changes to a repo in a formal way requiring approval.

**GitHub Exercise**

1. Go to GH and login
2. Create a new repository with the link on the page
3. We are going to clone the repository to our computer
4. Create a branch new branch
4. Make a change and push it back to GitHub
5. Fork your neighbors repository
6. Clone this repo


## Git commands cheatsheet
| Command  | What it does                                          | Example                                                 |
|----------|-------------------------------------------------------|---------------------------------------------------------|
| clone    | copies a remote repo locally                          | git clone https://github.com/CodeTahoe/CT100.git        |
| checkout | creates a new branch                                  | git checkout -b branch-name                             |
|          | changes to an existing branch                         | git checkout branch-name                                |
| branch   | lists all of your local branches                      | git branch                                              |
| push     | moves code from a local repo to a remote repo         | git push origin branch-name                             |
| pull     | copies the current snapshot of a repo to a local repo | git pull origin branch-name                             |
| add      | stages a changed file to be committed                 | git add fileName.txt                                    |
| commit   | permanently adds your file to the git repo            | git commit fileName -m "Here is what I changed and why" |

