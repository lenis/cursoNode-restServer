const express = require('express');
var cors = require('cors');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();


        //app routes

        this.routes();
    }

    middlewares(){

         //cors
        this.app.use(cors());

        //read from body
        this.app.use(express.json());

        //middlewares
        this.app.use(express.static('public'));
    }


    routes() {

       this.app.use(this.usuariosPath, require('../routes/user.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening in the port', process.env.PORT);
        });
    }
}

module.exports = Server