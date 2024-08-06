# react-ts-tw-base

## Install

This project uses [PNPM](https://pnpm.io/) as its package manager. In the root of the project, run:

```sh
pnpm install
```

to install all the dependencies.

## Setup VS Code

When you would open this project for the first time, VS Code will prompt you to install the recommended extensions. Click on Install to install them. If you want to know what these recommended extensions are before installing them, open command palette and type "Extensions: Show Recommended Extensions".

## Contribute

### Titling pull requests

**Basics of titling pull requests**

Because we squash all of your commmits into one when we merge your pull request anyway, you are free to write whatever commit messages you want to in your local branch. We'd still suggest you to write meaningful commit messages. We'd also suggest you to name your branches like `feat/my-branch` or `fix/my-branch`

However, the title of the PR should look like:

```
fix(ticket-id): title for a code fix
feat(ticket-id): added/updated/removed a feature
refactor(ticket-id): restructured some code
```

These follow a naming convention:

```
<type>(<scope>): <subject>
```

We allow `feat`, `fix`, `refactor`, `build` and `docs` as types. The scope usually would be your ticket number.  
If you don't use a ticket system — define project components, list them here, and use them as scopes.

Your title should read like you are instructing somebody to do something, so  
feat(mby-1019): add header  
is correct and  
feat(mby-1019): added header  
isn't.

Only code restructure constitutes as refactor. A change that keeps the API and its output the same while changing the internal workings still counts as a feature.

If you have a breaking change, put a `!` like so:

```
feat(ticket-id)!: title telling what thing change is
```

**Titling PRs which only contain reverted commit(s)**

If you have reverted a commit, you can keep the default message Git gives you for you commit.  
If you still want to put a commit hash, (because say, this is the only commit for the PR) then you can prefix the subject of the commit message with `revert(ticket-id):` like so:

```
revert(ticket-id): Revert "fix(mby-1018): reduce chance of conflicts between generated factory and local variables"

<keep the "This commit reverts..." message>
```

You can raise the PR without modifying the title.

**Using `build:`**

Use `build:` if you are modifying any script or if your PR only adds or upgrades dependencies. It is fine to not provide a scope in this case.

A release PR's title should look like:

```
build(release): v10.3.2
```

Updating changelog is part of release and thus is part of `build`. Modifying config files like `.gitignore` and `.eslintrc.cjs` are part of `feat`.

**Omitting ticket scope from title**

If you can't obtain a ticket number, you can omit the scope:

```
feat: message for the work you did
```

### Additional notes

**Writing a better pull request**

What you describe in a pull request is different from what you write in a commit message. Watch [this video](https://www.youtube.com/watch?v=BbIILUSmSk4) to learn about it.

**Creating a commit with multiple authors**

In a commit of your local branch, if someone else's code contribution is also present (or they have asked you to make a change and you have committed it), then you should include their details in your commit message like so:

```
feat(mby-1019): add header


Co-authored-by: Ayush Nagpal <ayush.nagpal@example.com>
Co-authored-by: Aparna Srivastava <aparna.srivastava@example.com>
```

You don't need to put your name in Co-authored-by.

Read more about it [here](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors).
