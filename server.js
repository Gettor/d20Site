// add necessary modules
var fs = require("fs");
var qs = require('querystring');
var bodyParser = require("body-parser");
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// TODO: remove after fix CORS issue
app.use(cors());

var models = require("./db/models");

app.get('/api/monsters/get/:id', function (req, res) {
    models.Monster
      .findById(req.params.id)
      .then(function(monster) {
          res.send(JSON.stringify(monster));
        });
});

app.get('/api/spells/get/:id', function (req, res) {
    models.Spell
      .findById(req.params.id)
      .then(function(spell) {
          res.send(JSON.stringify(spell));
        });
});

app.get('/api/spells/getMonster/:id', function (req, res) {
    models.Spell
      .findById(req.params.id)
      .then(function(spell) {
        models.Monster
        .findById(spell.MonsterId)
        .then(function(monster) {
            res.send(JSON.stringify(monster))
        });
       });
});

app.post('/api/monsters/update', function (req, res) {
    var monster = req.body;

    models.Monster.findById(monster.id)
        .then(function(old) {
            old.update(monster);
            res.end();
        });
});

app.post('/api/spells/update', function (req, res) {
    var spell = req.body;

    models.Spell.findById(spell.id)
        .then(function(old) {
            old.update(spell);
            res.end();
        });
});

app.post('/api/monsters/add', function (req, res) {
    var monster = req.body;

    models.Monster.create(monster)
        .then(function(newMonster) {
            res.json({ 'id' : newMonster.id });
            res.end();
        });
});

app.post('/api/monsters/del', function (req, res) {
    var monster = req.body;

    models.Monster.findById(monster.id)
        .then(function(old) {
            old.destroy();
            res.end();
        });
});

app.get('/api/monsters/find', function (req, res) {
    var toFind = req.query.searchstr;

    models.Monster.findAll({
        where : {
            name : {
                $like : '%' + toFind + '%'
            }
        }
    })
        .then(function(found) {
            res.json(found);
            res.end();
        });
});

app.use(express.static('build'))

models.sequelize.sync().then(function () {
    app.listen(3000, function () {
        console.log('Server listening on port 3000!');
    });
});
