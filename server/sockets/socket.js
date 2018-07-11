const { io } =require('../server');

//para saber cuando un usuario se conecto a mi servidor
io.on('connection', (client) => {//en el objeto client, tengo toda la inforamcion del usuario conectado
    console.log('usuario conectado al servidor!');

    //este mensaje se envia cuando el usuario se conecta
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado del servidor!');

    });

    //Escuchar el cliente
    client.broadcast.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.emit('enviarMensaje', data);
        
        // console.log(mensaje);
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'todo salio bien'                
        //     });
        // }else{
        //     callback({
        //         resp: 'todo salio MAL'                
        //     });
        // }
    });
});