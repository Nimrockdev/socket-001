const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario conectado');
    });

    //Escuchando al cliente, enviamos mensaje y recibimos el callback
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* 
                if (mensaje.usuario) {
                    callback({
                        return: 'Todo bien'
                    });
                } else {
                    callback({
                        return: 'Todo mal'
                    });
                } */
    });

});