
const { response } = require('express');


const crearUsuario= (req, res = response) => {
        const { name, email, password } = req.body;

        return res.json({
                ok: true,
                msg: 'registro',
                name,
                email,
                password,
            });   
        }


const loginUsuario= (req, res = response) => {
    const { email, password } = req.body;
  
        res.json({
            ok: true,
            msg: 'login',
            email,
            password,           
        });     
     }

const revalidarToken= (req, res) => {
        const { token } = req.body;
        res.json({
                ok: true,
                msg: 'renew',
        }); 

}

        

 module.exports = {
    crearUsuario, loginUsuario, revalidarToken,
 }