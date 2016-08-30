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

// TODO: to be removed
app.get('/api', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  // NOTE: this is hack to fit CORS
    res.send(JSON.stringify(items));
});

app.get('/api/monsters/get/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  // NOTE: this is hack to fit CORS

    models.Monster
      .findById(req.params.id)
      .then(function(monster) {
          res.send(JSON.stringify(monster));
        });
});

//app.use(express.static(conf.staticDir))
models.sequelize.sync().then(function () {
    app.listen(1337, function () {
        console.log('Backend listening on port 1337!');
    });
});
