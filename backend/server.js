// add necessary modules
var qs = require('querystring');

var express = require('express');
var app = express();

var fs = require("fs");
var file = "dnd.sqlite";
var exists = fs.existsSync(file);

var models = require("./db/models");

var randomThing = "";
var items = [];

if(!exists)
{
    console.log("DB file doesn't exist!");
}
else
{
    console.log("DB file exists!");
    var sqlite3 = require("sqlite3").verbose();
    var db = new sqlite3.Database(file);
    db.serialize(function()
    {
        db.each("select * from main.dnd_characterclass", function(err, row)
        {
            randomThing += row.id + " - " + row.name + "<br>";
            items.push({ name: row.name });
        });
    });
    db.close();
}

app.get('/api', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  // NOTE: this is hack to fit CORS
    res.send(JSON.stringify(items));
});

// TODO: replace with database query
var monsters = [
 { name : 'Creepy monster', speed : 9, initiative : 2},
 { name : 'Really creepy monster', speed : 9, initiative : 2},
 { name : 'Murloc', speed : 9, initiative : 2},
 { name : 'Harry Potter', speed : 9, initiative : 2},
 { name : 'Frog', speed : 9, initiative : 2},
 { name : 'Magic sandal', speed : 9, initiative : 2},
 { name : 'Giant monkey', speed : 9, initiative : 2},
];

app.get('/api/monsters/get/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  // NOTE: this is hack to fit CORS
    res.send(JSON.stringify(monsters[req.params.id]));
});

//app.use(express.static(conf.staticDir))


models.sequelize.sync().then(function () {
    app.listen(1337, function () {
        console.log('Backend listening on port 1337!');
    });
});
