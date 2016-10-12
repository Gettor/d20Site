// add necessary modules
var fs = require("fs");
var qs = require('querystring');
var bodyParser = require("body-parser");
var express = require('express');
var app = express();
var models = require("./db/models");
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('build'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.get('/api/monsters/getSpells/:id', function (req, res) {
    models.Monster
      .findById(req.params.id)
      .then(function(monster) {
          monster.getSpells()
          .then(function(spells) {
              res.send(JSON.stringify(spells));
          });
      });
});

app.get('/api/spells/getMonster/:id', function (req, res) {
    models.Spell
      .findById(req.params.id)
      .then(function(spell) {
          spell.getMonster()
            .then(function(monster) {
                res.send(JSON.stringify(monster));
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

app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});


models.sequelize.sync().then(function () {
    app.listen(3000, function () {
        console.log('Server listening on port 3000!');
    });
});
