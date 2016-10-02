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

## Build project

Before you can start server you must compile Angular 2 project
and setup static files. To do this type:

`npm run build`

## Run server

Enter frontend or backend directory and type:

`npm start`

After that server will start at `http://localhost:3000`.
When you touch project file new content will be compiled
and installed to build directory.

## Database

This project uses Sequelize ( http://docs.sequelizejs.com/en/v3/ ) as its ORM.

If you ever feel the need to change anything in database schema, refer to dbMaker.js script in backend/ directory and make changes as you find necessary.

When done, create new database with command:

`npm run fill_database`

***BE CAREFUL:*** above command will **replace** existing database file (old one will be backed up though).

## Documentation

This project uses Sphinx Doc for its documentation. Install with either:

`pip install sphinx` or `sudo apt-get install python-sphinx`

Next (within /doc directory) build with Makefile:

`make html`

Now your generated documentation index should be in "/doc/build/html/index.html" (to be opened with web browser). In case of fire, clean with:

`make clean`

Useful link(syntax cheatsheet): http://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html

## TODO

- in spells module:
  - in update component:
    - make input fields change their background color to yellow when change is detected
    - add more fields for update
    - add delete option
  - in show component:
    - add more fields
  - add find component
- unify monsters and spells modules to use same convention
- MG table draft
- add account support
- add documentation for database model
