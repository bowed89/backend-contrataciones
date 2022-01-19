const express = require('express')
const cors = require('cors');
 
class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT;

        // Middelwares
        this.middelwares();

        //Ruras de mi aplicacion
        this.routes();
    }

    middelwares(){
        //CORS
        //this.app.use( cors());
        /* this.app.use(function (req, res, next) {        
            res.setHeader('Access-Control-Allow-Origin', '*');    
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
            res.setHeader('Access-Control-Allow-Credentials', true);    
            next();  
          }); */

          this.app.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization', 'token']
        }));
        // Lectura y parseo del body
        this.app.use( express.json() );//todo se cambiara a Json
        //Directorio publico
       this.app.use(express.static('public')); 
    }


    routes(){
        this.app.use('/api/upload', require('../routes/file-upload.route'));
        this.app.use('/api/login-contrataciones', require('../routes/login-contrataciones.routes'));
        this.app.use('/api/tdr', require('../routes/tdr.routes'));
        this.app.use('/api/fuc', require('../routes/fuc.routes'));
        this.app.use('/api/rrhh', require('../routes/rrhh.routes'));
        this.app.use('/api/usa', require('../routes/usa.routes'));
        this.app.use('/api/asesoria', require('../routes/asesoria.routes'));
        this.app.use('/api/usuarios', require('../routes/usuarios.routes'));
        this.app.use('/api/credencial', require('../routes/credencial.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}



module.exports = Server;