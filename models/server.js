import express from 'express';
import cors from 'cors';
import dotenv from  'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { threadId } from 'worker_threads';
import { socketController } from '../sockets/controller.js';


dotenv.config(); 

class  Server_ {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = new Server(this.server);

        this.paths = {
        }

        // this.usersRoutePath = '/api/usuarios';
        // this.authPath       = '/api/auth';
        // this.categoryPath   = '/api/category';

        // Conectar base de datos

        //Middelware
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    async conectarDB(){

        await dbConnection();
    }

    middlewares(){

        /**************** Todo esto se ejecuts antes de llegar a las rutas *****************/

        //CORS
        this.app.use( cors() );

        //Directorio Publico --> esto hace referencia al directorio raíz,
        // si se tiene otra cosa se podrá modificar
        this.app.use( express.static('public') );
    }

    routes(){

        // this.app.use(this.paths.usuarios, routerUsers)
      
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }

}

export default Server_;