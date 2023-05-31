const express = require('express');
const router = express.Router();
const {validarJWT} = require('../middlewares/validar-token')
const {listarPosts, crearPost, actualizarPost, eliminarPost} = require('../Controllers/post')

router.use(validarJWT)

router.get('/', validarJWT, listarPosts)
router.post('/', crearPost)
router.put('/:id', actualizarPost)
router.delete('/:id', eliminarPost)

module.exports = router;