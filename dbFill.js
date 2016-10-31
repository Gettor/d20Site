#!/bin/node

var models = require("./db/models");

models.sequelize.sync({force: true}).then(function () {
    models.Monster.create({
        name: 'Creepy monster',
        custom_description: 'Really creepy monster',
        });
    models.Monster.create({
        name: 'Frog',
        custom_description: 'Green and ooze covered',
        });
    models.Monster.create({
        name: 'Giant monkey',
        custom_description: 'Reminds old years',
        });

    for (i = 0; i < 100; i++) {
        models.Monster.create({
            name: 'Murlok ' + i,
            custom_description: 'Gruulululuuuuuluuu!',
            });
    }

    models.UserTypes.create({
        name: 'Normal'
    });
    models.UserTypes.create({
        name: 'Admin'
    });

    models.SpellRange.create({
        name: 'NA',
        description: 'Not Applicable'
    });
    models.SpellRange.create({
        name: 'Meele',
        description: 'Useable in meele range (touch target, hit with meele weapon, etc.)'
    });

    Promise.all([
        models.Monster.create({
            name: 'Harry Potter',
            custom_description: 'No comments...',
        }),
        models.SpellRange.create({
            name: 'Self',
            description: 'Useable on caster only'
        }),
        models.Class.create({
            name: 'Wizard'
        }),
    ])
    .then(function(records) {
        for (i = 0; i < 30; i++) {
            models.Spell.create({
                name: 'Conjure Coffee ' + i,
                description: 'Conjures low-coffeine coffee.',
                level: i % 10,
                save_type: 0,
                permits_sr: false,
            })
            .then(function(spell){
                spell.setMonster(records[0]);
                spell.setClass(records[2]);
                records[1].addSpells([spell]);
            });
        }
    });

    var ala = models.User.build({
        login: 'ala'
    });
    ala.setPassword('makota');
    ala.save();

});
