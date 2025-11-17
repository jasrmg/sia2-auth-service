## Git & GITHUB CHEATSHIT

| Command                        | Purpose                                          | When to Use                                  |
| ------------------------------ | ------------------------------------------------ | -------------------------------------------- |
| `git clone <repo_url>`         | Make a local copy of the repo                    | One-time setup                               |
| `git status`                   | See what files have changed / staged             | Before committing                            |
| `git add <file>` / `git add .` | Stage changes for commit                         | After editing files                          |
| `git commit -m "message"`      | Save changes locally with a message              | After staging changes                        |
| `git push origin <branch>`     | Send your local branch to GitHub                 | After committing, to share work              |
| `git fetch origin`             | Get latest changes from remote (does not merge)  | Before starting work or merging              |
| `git pull origin <branch>`     | Get latest changes and merge into current branch | Keep branch up-to-date                       |
| `git checkout <branch>`        | Switch to an existing branch                     | Start working on a branch                    |
| `git checkout -b <branch>`     | Create a new branch and switch to it             | Start a new feature/bugfix                   |
| `git merge <branch>`           | Merge another branch into your current branch    | Combine changes (usually after PR merge)     |
| `git branch -d <branch>`       | Delete a local branch                            | Clean up after merge                         |
| `git log or git log --oneline` | Show commit history                              | See what has been done                       |
| `git remote -v`                | Show remote URLs                                 | Verify the repo connection                   |
| `git reset --hard`             | Undo all local changes                           | Use carefully if you want to discard changes |
| `git stash`                    | Temporarily save uncommitted changes             | Switch branches without losing work          |
| `git stash pop`                | Reapply stashed changes                          | After switching back to original branch      |

### Recommended workflow with these commands

1. git fetch origin → git checkout develop → git pull origin develop
   (Always start from latest develop)
2. git checkout -b <branchname> → Start coding
3. git add . → git commit -m "feat: ..." → Save changes
4. git push origin feature/<name> → Share work
5. Open Pull Request on GitHub → reviewers approve → merge
