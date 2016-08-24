
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
UserTypes.sync({force: true}).then(function () { });


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
