# d20Site
Side contains helpful tool for d20 players & game masters.

## About
This repository contains two server sides:
* frontend - written using AngularJS 2 framework,
* backend - written using NodeJS.

Communication between both sides is done by JSON.

## Installation:

`curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

`sudo apt-get install npm`

In both backend and frontend directories (tested on npm 3.9.5):

`npm install`

## Run server

Enter frontend or backend directory and type:

`npm start`

## Documentation

This project uses Sphinx Doc for its documentation. Install with either:

`pip install sphinx` or `sudo apt-get install python-sphinx`

Next (within /doc directory, after you've done some changes in documentation sources) build with Makefile:

`make html`

Now your generated documentation index should be in "/doc/build/html/index.html" (to be opened with web browser)

## TODO

- refactor backend server
- add account support
- build database model
- add documentation for database model
