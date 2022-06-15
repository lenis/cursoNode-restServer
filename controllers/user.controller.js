const {response} = require('express');


const usuarioGet = (req, res = response) => {

    const {q, nombre,apikey} = req.query;

    res.json({

        "msg": "get API - controlador ",
        q,
        nombre,
        apikey
    });
}


const usuarioPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({

        "msg": "Post API - controlador ",
        nombre,
        edad
    });
}

const usuarioPut = (req, res = response) => {
    const id = req.params.id;

    res.json({

        "msg": "Put API - controlador ",
        id
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({

        "msg": "Delete API - controlador "
    });
}



module.exports ={
    usuarioGet,usuarioPost,usuarioPut,usuarioDelete
}