// add necessary modules
var qs = require('querystring');

var express = require('express');
var app = express();

var fs = require("fs");
var file = "dnd.sqlite";
var exists = fs.existsSync(file);


var randomThing = "";

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
            console.log(row.id + ": " + row.name);
            randomThing += row.id + " - " + row.name + "<br>";
        });
    });
    db.close();
}

// build a simple form
var pageHTML =
'<html>' +
    '<head>' +
        '<title>D20Site v. 0.1</title>' +
        '<meta charset="utf-8">' +
    '</head>' +
    '<body>' +
        '<form method="post" action="">' +
            '<div>' +
                '<label for="nickname">Nickname:</label>' +
                '<input type="text" name="nickname">' +
            '</div>' +
            '<div>' +
                '<input type="submit" value="send it">' +
            '</div>' +
        '</form>' +
    '</body>' +
'</html>';

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pageHTML + randomThing); // serve our HTML code
});

app.post('/', function (req, res) {
    var requestData = '';
    req.setEncoding('utf-8');

    req.on('data', function(data) {
        requestData += data;
    });

    req.on('end', function() {
        var postData = qs.parse(requestData);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Your nick: '+ postData.nickname + '</h1>');
    });
});

app.listen(1337, function () {
  console.log('Backend listening on port 1337!');
});
