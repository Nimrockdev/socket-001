var socket = io();

//on, escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Conexión con el servidor perdida');
});

//emit, emitir información
//Primer parametro, nombre evento
//Segundo, el objeto. tercero la funcion
socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola'
}, function(resp) {
    console.log('Respuesta Servidor:', resp);
});

//on, escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});