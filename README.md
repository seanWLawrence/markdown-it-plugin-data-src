# Node open source starter - WIP

An ES6-ready, pre-configured starter for open source Node projects.

## The problem

Configuration sucks. Everyone loves a starter, like [Create React App]() or [Node Hackathon]().

## This solution

This is a pre-configured starter with everything you need to create a modern Node open source project, like Babel, ESLint, Prettier, Jest and Flow, as well as the standard files for the project that no one wants to write, like `CODE_OF_CONDUCT.md`, `PULL_REQUEST_TEMPLATE.md`, etc. as well as some other cool things like badges, a Makefile, Commitizen and Semantic release!

## Other solutions - TODO

[Microbundle]() - 
[Node Hackathon]() - 

## Usage

`git clone https://github.com/seanwlawrence/node-open-source-starter.git`

Then update the `package.json` file with your repo's information.

## Example

```json
{
  "name": "my-cool-library-name",
  "version": "1.0.0",
  "description": "A description for my cool library",
  "main": "lib/index.js",
  "scripts": {
    "test": "make test",
    "lint": "make lint",
    "develop": "make develop",
    "build": "make build",
    "commit": "make commit",
    "ci": "make ci",
    "create-docs": "make create-docs"
  },
  "keywords": [
    "cool",
    "keywords"
  ],
  "author": "John Doe",
  "license": "MIT",
  "dependencies": {
  },
  "devDependencies": {
    "@babel/cli": "^7.0.0-rc.1",
    "@babel/core": "^7.0.0-rc.2",
    "@babel/preset-env": "^7.0.0-rc.1",
    "@babel/preset-flow": "^7.0.0-rc.1",
    "babel-core": "^7.0.0-bridge.0",
    "babel-eslint": "^8.2.6",
    "cz-conventional-changelog": "^2.1.0",
    "eslint": "^5.4.0",
    "eslint-plugin-flowtype": "^2.50.0",
    "eslint-plugin-jest": "^21.21.0",
    "flow-bin": "^0.79.1",
    "jest": "^23.5.0",
    "prettier": "^1.14.2",
    "prettier-eslint": "^8.8.2",
    "prettier-eslint-cli": "^4.7.1"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
}
```

### Architecture

```txt
lib/                  Library (what your users will use)
src/                  Source code
  __tests__/          Tests
  index.js            Main program
.eslintignore         Files to be ignored by ESLint
.eslintrc.js          ESLint configuration
.flowconfig           Flow configuration
.gitignore            Files to be ignored by Git
.prettierrc.js        Prettier configuration
babel.config.js       Babel configuration
CHANGELOG.md          Record of your changes, created by Semantic release
CODE_OF_CONDUCT.md    Conduct for people to follow when contributing
CONTRIBUTING.md       Instructions for how to contribute
jest.config.js        Jest configuration
LICENSE.md            License for your project
Makefile              Scripts
package.json          Library and dependency information
README.md             Main documentation page 
```

## Goodies

An outline the what and why of what's included in this starter.

### Babel v7

Compiles your ES6 syntax code to standard JS syntax so your code will be supported on older versions of Node. Your files from the `src` directory will be copied, compiled and added to the `lib` directory, which is where your users will access your library.

> To update the configuration, simply update the `babel.config.js` file.

### Jest

Helps you create and run tests on your code. Tests go in the `src/__tests__` directory. Use with the `npm run test` script.

> To update the configuration, simply modify the `jest.config.js` file.

### Flow

Checks your code for type errors. Use with the `npm run lint` script.

### ESLint

Helps you catch code and styling errors. Use with the `npm run build` script. 

> To update the configuration, simply modify the `.eslintrc.js` file.

### Prettier

Makes your code pretty and styled/formatted. User with the `npm run lint` script. 

> To update the configuration, simply modify the `.prettierrc.js` file.

### Commitizen

Helps you write consistent, formatted and cool-looking `git commit` messages. Use by running the `npm run commit` script after first adding your files to the git staging area, i.e. `git add .` and then `npm run commit`.

### Makefile

Helps you keep your `package.json` scripts more organized and easier to read for running multiple commands on a single script, i.e. no more `npm run lint && npm run format && npm run publish`. Update your scripts in the Makefile and then call them in your `package.json` file with `make <script-name>`.

### JSDoc

Helps you create beautiful documentation by adding comments to your code (which you should be doing already). Use with the `npm run create-docs` script, then check the `docs` folder that it generates. You can even serve these docs so they're available online, i.e. `npx serve` then visit `http://localhost:5000/docs`.

### GitHub templates - TODO

Helps your contributors and users ask questions and submit pull requests with consistent formatting.

### Semantic release - TODO

Helps you keep track of your project's version number and publish automatically to NPM. Works with Commitizen to update based on the type of commit that you made. Use with the `npm run publish` script.

### TravisCI - TODO

Helps you automatically run tests on your code when pushed to GitHub.

### Coveralls - TODO

Helps you keep track of your test coverage.

### Badges - TODO

Helps you display important information about your project, like test coverage, version, etc.

### Code of conduct - TODO

Helps users know how to behave when helping or asking questions about this project.

### Contributing - TODO

Helps users learn how to contribute to your project.

## Roadmap

- Explain each file and how to configure them as needed, briefly
- Create a scaffold/CLI with prompts to auto generate this repo with user's information
  - Project name
  - Project description
  - Keywords (separated by comma)
  - GitURL
  - Use Travis?
  - Use Coveralls?
  - Use Jest?
  - Use Makefile?
  - Use Babel?
  - Use Flow?
- Minify output (maybe use Microbundle for this)
- Export to UMD, Common and Module (maybe use Microbundle for this)

## License

MIT

Copyright 2018 Sean W. Lawrence - [visit my portfolio](https://swl.netlify.com).