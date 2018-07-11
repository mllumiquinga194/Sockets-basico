//con este codigo sabemos cuando estamos conectados al servidor
var socket = io();//este io es el mismo declarado en el servidor
socket.on('connect', function () {
    console.log('Conectado con el servidor');
});
//con los ON son para escuchar eventos
socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor');

});

//los emit son para enviar informacion.
socket.emit('enviarMensaje', {
    usuario: 'Marcos Llumiquinga',
    message: 'Se ha conectado'
}, (resp) => {
    console.log('Respuesta del servidor: ', resp);
    
});

//recuerda que el ON es para escuchar mensaje mientras que el emit es para emitir mensajes o eventos.
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});