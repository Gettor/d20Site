// add necessary modules
var qs = require('querystring');

var express = require('express');
var app = express();

var fs = require("fs");
var file = "dnd.sqlite";
var exists = fs.existsSync(file);


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
    // res.sendFile("index.html", {root: path.join("./frontend/pages/index/view/")});
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

app.get('/api', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');  // NOTE: this is hack to fit CORS
    res.send(JSON.stringify(items));
});

//app.use(express.static(conf.staticDir))
app.listen(1337, function () {
    console.log('Backend listening on port 1337!');
});
