## Branching and Merging Exercises

### Part I

1. `git clean` is used for recursively removing files that are not under version control.
2. `-df` flag of git clean is used to specify untracked directories for cleaning forcefully.
3. To create a branch, use `git branch branch-name`.
4. Fast-forward merge is the occurence when you merge against a branch that is ahead of the one you checked out from while recursive merge occurs when you cannot easily
  determine the order commits were made when commits happen at different times on two branches.
5. To change to another branch, use `git checkout branch-name`.
6. To remove modified or deleted files from the working directory, use `git rm filename`.
7. To delete a branch, use `git branch -d branch-name`.
8. `git diff` is used to show changed file sthat are unstaged.
9. To remove files from the staging area, use `git rm --cached file`.
10. Merge conflicts occur when changes have been made in the same line of the same file in two different branches and git is unable to automatically resolve the code between 
  the two commits. 
