#!/bin/node

var models = require("./db/models");

models.sequelize.sync({force: true}).then(function () {
    models.Monster.sync().then(function () {

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

        for (i = 0; i < 100; i++) {
            models.Monster.create({
                name: 'Murlok ' + i,
                custom_description: 'Gruulululuuuuuluuu!',
                });
        }
    });

    models.UserTypes.sync().then(function () {
        models.UserTypes.create({
            name: 'Normal'
        });
        models.UserTypes.create({
            name: 'Admin'
        });
    });


    models.SpellRange.sync().then(function () {
        models.SpellRange.create({
            name: 'NA',
            description: 'Not Applicable'
        });
        models.SpellRange.create({
            name: 'Self',
            description: 'Useable on caster only'
        });
        models.SpellRange.create({
            name: 'Meele',
            description: 'Useable in meele range (touch target, hit with meele weapon, etc.)'
        });
    });

    models.Spell.sync().then(function () {
        models.Spell.create({
            name: 'Conjure Coffee',
            description: 'Conjures low-coffeine coffee.',
            save_type: 0,
            permits_sr: false,
        });
    });

    models.sequelize.sync()
    .then(function() {

        models.Spell.find({
            where: {
                name: 'Conjure Coffee'
            }
        }).then(function(spell){
            if (spell) {
                models.Monster.find({
                    where: {
                        name: 'Harry Potter'
                    }
                }).then(function(monster){
                    spell.setMonster(monster).then(function(){
                    });
                });
                models.SpellRange.find({
                    where: {
                        name: 'Self'
                    }
                }).then(function(range){
                    range.addSpells([spell]).then(function(){
                    });
                });
            }
        });


    });
});
