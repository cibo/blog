// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

Http.createServer(Stack(
  Creationix.log(),
  require('wheat')(process.env.PRODUCTION ? process.env.HOME + "/blog" : __dirname +"/..")
)).listen(process.env.PRODUCTION ? 80 : 4040);
