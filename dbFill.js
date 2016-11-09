#!/bin/node

var models = require("./db/models");

models.sequelize.sync({force: true}).then(function () {
    //  CREATING ALL USER TYPES

    models.UserTypes.create({
        name: 'Normal'
    });
    models.UserTypes.create({
        name: 'Admin'
    });

    //  CREATING ALL SPELL RANGES

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
    models.SpellRange.create({
        name: 'Short',
        description: 'Spell can reach 25 feet + 5 feet per 2 caster levels'
    });
    models.SpellRange.create({
        name: 'Medium',
        description: 'Spell can reach 100 feet + 10 feet per 2 caster levels'
    });
    models.SpellRange.create({
        name: 'Long',
        description: 'Spell can reach 400 feet + 40 feet per 2 caster levels'
    });
    models.SpellRange.create({
        name: 'Unlimited',
        description: 'Spell can reach anywhere on the same plane of existence'
    });

    //  CREATING ALL SPELL TYPES

    models.SpellType.create({
        name: 'Abjuration',
        description: 'Abjuration spells create physical or magical barriers, negate magical or physical abilities, harm trespassers, or even banish the subject of the spell to another plane of existence.'
    });
    models.SpellType.create({
        name: 'Conjuration',
        description: 'Conjurations bring manifestations of objects, creatures, or some form of energy'
    })
    models.SpellType.create({
        name: 'Divination',
        description: 'Divination spells enable you to learn secrets long forgotten, to predict the future, to find hidden things, and to foil deceptive spells'
    });
    models.SpellType.create({
        name: 'Enchantment',
        description: 'Enchantment spells affect the minds of others, influencing or controlling their behavior'
    });
    models.SpellType.create({
        name: 'Evocation',
        description: 'Evocation spells manipulate energy or tap an unseen source of power to produce a desired end'
    });
    models.SpellType.create({
        name: 'Illusion',
        description: 'Illusion spells deceive the senses or minds of others'
    });
    models.SpellType.create({
        name: 'Necromancy',
        description: 'Necromancy spells manipulate the power of death, unlife, and the life force'
    });
    models.SpellType.create({
        name: 'Transmtation',
        description: 'Transmutation spells change the properties of some creature, thing, or condition'
    });

    // CREATING ALL SKILLS

    models.Skill.create({
        name: 'Bluf',
        description: 'Just blufing',
        key_attribute: 'Str',
    });

    //  CREATING TEST MONSTERS WITH ALOT OF DATA

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

    Promise.all([
        models.Monster.create({
            name: 'Harry Potter',
            custom_description: 'No comments...',
        }),
        models.Class.create({
            name: 'Wizard'
        })
    ])
    .then(function(records) {
        models.SpellRange
          .findOne({ where: { name: "Self" } })
          .then(function(spellRange) {
        models.SpellType
          .findOne({ where: { name: "Conjuration" } })
          .then(function(spellType) {
                for (i = 0; i < 30; i++) {
                    models.Spell.create({
                        name: 'Conjure Coffee ' + i,
                        description: 'Conjures low-coffeine coffee.',
                        level: i % 10,
                        save_type: 0,
                        permits_sr: false
                    }).then(function(spell) {
                        spell.addMonster(records[0]);
                        spell.setSpellRange(spellRange);
                        spell.setClass(records[1]);
                        spell.setSpellType(spellType);
                    });
                }
                models.SkillValue.create({
                    value: 10
                }).then(function(skillValue) {
                    models.Skill.findOne({ where: { name: "Bluf" }})
                    .then(function(skill) {
                    skillValue.setSkill(skill);
                    records[0].setSkillValues([skillValue]);
                })});
        })
        })
    });

    var ala = models.User.build({
        login: 'ala'
    });
    ala.setPassword('makota');
    ala.save();

});
