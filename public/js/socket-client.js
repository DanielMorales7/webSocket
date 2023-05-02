// Referencias del HTML

const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect',()=>{
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect',()=>{
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
    console.log('Desconectado del server')
});

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload)
});

btnEnviar.addEventListener('click', () =>{

    const mensaje =txtMensaje.value;

    const payload = {
        mensaje,
        id:'123ABC',
        fecha: new Date().getTime()
    }
    
    //emit emite algo en el socket
    socket.emit( 'enviar-mensaje', payload, (id)=>{
        console.log('Desde el server', id)
    });

});