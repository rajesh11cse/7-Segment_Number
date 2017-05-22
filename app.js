var express = require('express');
var app = express();
var pid = process.pid;
const cluster = require('cluster');
const os = require('os');

var routes = require("./routes/routes.js")(app);

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPU`);
  for (var i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  var server = app.listen(3000, function () {
    console.log('Server listening at port : %s', server.address().port);
    console.log(`started process ${pid}`);
  });
};