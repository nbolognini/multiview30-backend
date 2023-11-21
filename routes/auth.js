/*  Rutas de Usuarios / Auth  .      host + api/auth */
const { Router } = require('express');
const router = Router();
const { crearUsuario, revalidarToken, loginUsuario } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


//Aca voy a probar el Express Validator.
router.post( '/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 5 caracteres').isLength({ min: 5 }),
    validarCampos

], crearUsuario );


router.post('/', [ 
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 5 caracteres').isLength({ min: 5 }),
    validarCampos
], loginUsuario);


router.get('/renew', [
    check('token', 'El token es obligatorio').not().isEmpty(),
    validarCampos

], revalidarToken);

















 module.exports = router;