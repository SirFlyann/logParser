# Log Parser

## Description

This project is a quake log parser made in Node.js

## Dependencies used

This project used almost no external dependency.
I used:

1. array-unique - a lib to remove duplicate items on the array
2. Hapi - used to serve the application. I liked Hapi's readability, and that's why I chose it over Express.
3. Mocha - running tests
4. Chai - assertions for tests.

And some built-in libs:

1. fs - Node's way to handle files
2. path - Node's way to handle paths

## Pre-requisites

To run this project, you'll need node and npm installed. You can get them (here)[https://nodejs.org/en/download/].

After having cloned this project, run:
```sh
npm install
```

It will install every dependency used in the project.

## Organization

The app entry point is in the root of the Folder. It's called main.js. There, you'll also find this README, a file called Procfile(Heroku stuff) and the log it returns data from.

The functions used to read the log are in the parser folder.

The tests are in the tests folder.

## Tests

To run the tests, go to the root of the project and run:
```sh
mocha tests
```
