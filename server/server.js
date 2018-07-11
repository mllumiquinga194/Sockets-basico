const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');//socket trabaja con http y no con express.. por eso necesito esta libreria.

const app = express();

let server = http.createServer(app);//creo una variable para mi servidor y le mando el app para tener tambien las configuraciones de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));//Para habilitar la carpeta publica y que todos puedan acceder a ella!!

//hago esta declaracion de esta forma para poder usar IO en otros archivos que lo requieran
//IO = esta es la configuracion del backend
module.exports.io = socketIO(server);//para inicializar el servidor 
// ahora le indico que utilice este archivo donde tengo todos mis sockets
require('./sockets/socket');



server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});