

var express = require("express");

var bodyParser = require('body-parser');

var parser = bodyParser.urlencoded({extended: false});

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.set("views", "./views");

var mang = ["Androin","iOS", "React", "Php"];

app.listen(3000);

app.get("/", function(req,res){
    res.render("home");
});

app.post('/getNotes',function(req,res){
    res.send(mang);
});

app.post('/add',parser,function(req,res){
    var newNote = req.body.note;
    mang.push(newNote);
    res.send(mang);
});

app.post('/delete',parser,function(req, res){
    var id = req.body.idXoa;
    mang.splice (id,1);
    res.send(mang);
});

app.post('/save', parser, function(req, res){
    var id = req.body.idSave;
    mang[id]= req.body.Noidung;
    res.send(mang);
});