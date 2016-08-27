
console.log("dbMaker starting its work (previous d20Seq.db will be backed up)");

var fs = require('fs');
var fileName = "d20Seq.db";


fs.exists(fileName, function (exists)
{
    if(!exists)
    {
        fs.writeFile(fileName, "", function(err)
        {
        if(err)
        {
            return console.log(err);
        }
        console.log("DB did not exist: created.");
    });
    }
    else
    {
        var newFileName = fileName + "_" + Date.now();
        fs.rename(fileName, newFileName, function(err) {
        if(err)
        {
            console.log('ERROR moving DB file: ' + err);
        }
        else
        {
            fs.writeFile(fileName, "", function(err2)
            {
                if(err2)
                {
                    return console.log(err2);
                }
            });
            console.log("DB already existed: moved and created clean one. Old db stored in: " + newFileName);
        }
        }); 
    }
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize('d20Seq', '', '', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'd20Seq.db'
});

var UserTypes = sequelize.define('user_types', {
    name: Sequelize.STRING,
});
UserTypes.sync({force: true})
.then(function () { return UserTypes.create({ name: 'Normal' }); })
.then(function () { return UserTypes.create({ name: 'Admin' }); });

var User = sequelize.define('users', {
    login: Sequelize.STRING,
    password: Sequelize.STRING,
    type_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: UserTypes,
            key: 'id'
        }
    }
});
User.sync({force: true}).then(function () { });

var Notepad = sequelize.define('notepads', {
    name: Sequelize.STRING,
    user_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: User,
            key: 'id'
        }
    }
});
Notepad.sync({force: true}).then(function () { });

var Monster = sequelize.define('monsters', {
    notepad_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Notepad,
            key: 'id'
        }
    },
    name: Sequelize.STRING,
    custom_description: Sequelize.TEXT,
    hd_type: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 4
    },
    hd_amount: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    hp: Sequelize.INTEGER,
    initiative: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    speed: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 9
    }

});
Monster.sync({force: true}).then(function () { });

var Attribute = sequelize.define('attributes', {
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Monster,
            key: 'id'
        }
    },
    str: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    dex: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    con: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    wis: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    int: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    cha: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    }

});
Attribute.sync({force: true}).then(function () { });

var Save = sequelize.define('saves', {
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Monster,
            key: 'id'
        }
    },
    will: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    reflex: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    fortitude: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 3
    }

});
Save.sync({force: true}).then(function () { });

var Special = sequelize.define('specials', {
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Monster,
            key: 'id'
        }
    },
    name: 
    {
        type: Sequelize.STRING
    },
    description: 
    {
        type: Sequelize.TEXT
    }

});
Special.sync({force: true}).then(function () { });

var SpellRange = sequelize.define('spell_ranges', {
    name: 
    {
        type: Sequelize.STRING
    },
    description: 
    {
        type: Sequelize.TEXT
    }
});
SpellRange.sync({force: true}).then(function () { });

var Spell = sequelize.define('spells', {
    name: 
    {
        type: Sequelize.STRING
    },
    description: 
    {
        type: Sequelize.TEXT
    },
    save_type: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    permits_sr: 
    {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    range_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: SpellRange,
            key: 'id'
        }
    },

});
Spell.sync({force: true}).then(function () { });

var SpellEffect = sequelize.define('spell_effects', {
    spell_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Spell,
            key: 'id'
        }
    },
    group_id: 
    {
        type: Sequelize.INTEGER
    },
    priority_id: 
    {
        type: Sequelize.INTEGER
    },
    condition: 
    {
        type: Sequelize.STRING,
        defaultValue: "None"
    },
    description: 
    {
        type: Sequelize.TEXT
    },
    show_rng: 
    {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }

});
SpellEffect.sync({force: true}).then(function () { });

var Attack = sequelize.define('attacks', {
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Monster,
            key: 'id'
        }
    },
    name: Sequelize.STRING,
    attack_bonus: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    hd_type: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 2
    },
    hd_amount: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    damage_bonus: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    crit_threat: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 20
    },
    crit_multiplier: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 2
    },
    range: 
    {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    type: 
    {
        type: Sequelize.STRING,
        defaultValue: "Physical"
    }
});
Attack.sync({force: true}).then(function () { });

var Armor = sequelize.define('armors', {
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Monster,
            key: 'id'
        }
    },
    overall:
    {
        type: Sequelize.INTEGER,
        defaultValue: 10
    },
    touch:
    {
        type: Sequelize.INTEGER,
        defaultValue: 10
    },
    flat_footed:
    {
        type: Sequelize.INTEGER,
        defaultValue: 10
    }
});
Armor.sync({force: true}).then(function () { });

var MonsterSpell = sequelize.define('monster_spells', {
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Monster,
            key: 'id'
        }
    },
    spell_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Spell,
            key: 'id'
        }
    }
});
MonsterSpell.sync({force: true}).then(function () { });

var Skill = sequelize.define('skills', {
    name:
    {
        type: Sequelize.STRING,
    },
    description:
    {
        type: Sequelize.TEXT,
    },
    key_attribute:
    {
        type: Sequelize.STRING,
    },
    can_use_untrained:
    {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});
Skill.sync({force: true}).then(function () { });

var MonsterSkill = sequelize.define('monster_skills', {
    skill_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Skill,
            key: 'id'
        }
    },
    monster_id:
    {
        type: Sequelize.INTEGER,
        references:
        {
            model: Skill,
            key: 'id'
        }
    },
    rank:
    {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});
MonsterSkill.sync({force: true}).then(function () { });

console.log("Creating constraints");

console.log("Done creating constraints");

// Below: for debug and reference reasons
// sequelize.sync().then(function() {
//   return User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });
