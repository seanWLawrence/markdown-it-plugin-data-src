# Contributing

Contributions are welcome! This package uses [commitizen](https://github.com/commitizen/cz-cli) and [semantic-release](https://github.com/semantic-release/semantic-release) to keep consistent commit messages and versioning according to the standard conventions.

## How to contribute

Check out our [roadmap](https://github.com/seanWLawrence/node-open-source-starter#roadmap) for things that this package already has in it's pipeline or suggest a new feature/update by [creating an issue](https://github.com/seanwlawrence/node-open-source-starter/issues/new). Once approved, you can do the following:

### Fork this repo

Click "Fork" on the top right of the page and GitHub will clone the repository and add it to your account automatically.

### Download the forked repo

Click "Clone or download" and copy the HTTPS link to your forked repo, and clone the repo to your computer by typing it in your terminal like this:

```bash
git clone <your-HTTPS-link>
```

Which should look like this, for your reference:

```bash
git clone https://github.com/johndoe/node-open-source-starter.git
```

### Make your changes

Make your changes to the codebase that you cloned, and make sure to add comments to each line of changes to explain what you did (just like the reast of the code already has) and when ready to make a commit, do the following:

1. `git add .` to all all of the changed files
2. `npm run commit` to run the Commitizen cli prompts for consistent commit messages
  - Make sure to include the reference number for the issue that your changes are for when prompted.

### Push to your own GitHub account

After following the steps above on your computer, hit `git push` to push the changes to your GitHub repository.

### Make a pull request

Navigate to the [main page of this package](https://github.com/seanWLawrence/node-open-source-starter) again and click "Make pull request" near the top left of the page to start a pull request. Add notes about what you did and make sure to reference the issue that the pull request takes care of in the description.

### Next steps

We'll review your pull request, run tests on it and if all is good, merge it into the main codebase!