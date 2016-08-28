#!/bin/node

var models = require("./db/models");

models.sequelize.sync()
.then(function() {
    models.Monster.create({
        name: 'Creepy monster',
        custom_description: 'Really creepy monster',
        });
    models.Monster.create({
        name: 'Harry Potter',
        custom_description: 'No comments...',
        });
    models.Monster.create({
        name: 'Frog',
        custom_description: 'Green and ooze covered',
        });
    models.Monster.create({
        name: 'Giant monkey',
        custom_description: 'Reminds old years',
        });
    models.Monster.create({
        name: 'Murlok',
        custom_description: 'Gruulululuuuuuluuu!',
        });
});
