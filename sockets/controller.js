import { Server } from 'socket.io';


const socketController = (socket) =>{
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback)=>{
        //aquí es cuando el servidor de sockets manda msj
        // se coloca el callback por si tú quieres recibir un parametro y no el otro cliente
        const id = 123456789;

        callback(id);
        socket.broadcast.emit('enviar-mensaje',payload);
    });
}

export {socketController}