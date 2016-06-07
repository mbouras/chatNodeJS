var config = require('config');

var app = {
    root : __dirname,
    config : config
};

app.server = require('./drivers/server')(app);
app.routes = require('./drivers/routes')(app);
app.socket = require('./drivers/socket')(app);
app.messenger = require('./services/messenger')(app);
app.server.create();



/* CODE AVANT REFACTORING
var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);

//detect an user's connection / ici on utilise "io" car c'est la connexion globale
io.on('connection', function(socket){
    
    console.log('user connected');
    
    //receive message / ici on utilise "socket" car on écoute la connexion d'un user
    socket.on('send', function(msg){
        console.log(msg);
        io.emit('receive', msg); 
    });

    // user disconnected
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

//create a root
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});


http.listen(1337, function(){
    console.log('listening on : 1337');
});
*/