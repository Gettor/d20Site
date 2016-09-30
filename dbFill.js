#!/bin/node

var models = require("./db/models");
const util = require('util');

models.Monster.create({
        name: 'Creepy monster',
        custom_description: 'Really creepy monster',
        });
    var monster1 = models.Monster.create({
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
    var spellRange1 = models.SpellRange.create({
        name: 'Self',
        description: 'Useable on caster only'
    });
    models.SpellRange.create({
        name: 'Meele',
        description: 'Useable in meele range (touch target, hit with meele weapon, etc.)'
    });

    var spell1 = models.Spell.create({
        name: 'Conjure Coffee',
        description: 'Conjures low-coffeine coffee.',
        save_type: 0,
        permits_sr: false,
    });

    var spellEf1 = models.SpellEffect.create({
        group_id: 0,
        priority_id: 0,
        description: "Coffee is created inside a nearby mug."
    });
    var spellEf2 = models.SpellEffect.create({
        group_id: 0,
        priority_id: 1,
        condition: "User is a Guziec",
        description: "Coffee explodes in your face."
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
                spell.createMonster(monster).then(function(){
                    console.log("SUCCESS");
                });
            });
            models.SpellRange.find({
                where: {
                    name: 'Self'
                }
            }).then(function(range){
                range.addSpells([spell]).then(function(){
                    console.log("SUCCESS_2");
                });
            });
        }
    });


});
