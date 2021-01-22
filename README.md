![Screenshot](/src/images/screenshot.jpg)

## How to get started

Run the following command to install dependencies, then choose a build mode.

```
$ yarn install
```

### Development

Dev mode launches the project in the Webpack Dev Server. Run the following command and open a browser to http://localhost:8888.

```
$ yarn dev
```

### Production

Build mode configures the environment to 'production' and optimizes the bundle for deployment. Run the following command and view the files in the build folder.

```
$ yarn build
```
You can review the production files locally. Run `start` to start the node server, and open a browser to http://localhost:8888.

## How to run the linter

The project uses ESLint to format the code and enforce a minimal set of rules for ES6.

```
$ yarn lint
```

## How to run tests

The project uses Jest and Enzyme to unit test the components. Run the following command to view a single run of the application tests. 

```
$ yarn test
```
Use `test-update` to update snapshots and `test-watch` to watch for changes.
