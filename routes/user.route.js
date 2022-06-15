const { Router } = require('express');

const { usuarioGet,usuarioPost,usuarioPut,usuarioDelete } = require('../controllers/user.controller')

const router = Router();



router.get('/', usuarioGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);


module.exports = router;

