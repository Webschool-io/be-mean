var app = require("./config/express")();
var dbConfig = require("./config/database");
var http = require("http");
var server = http.createServer(app);
var port = app.get("port");

server.listen(port, function(){
  console.log("** \t The server express is run on address http://localhost:"+port+" \t **");
});

dbConfig("mongodb://localhost/rschool-dev");
