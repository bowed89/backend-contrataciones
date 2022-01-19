const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const { verificaToken } = require('../middlewares/autenticacion');

const { signin, signup, verificaToken } = require('../controllers/login.controller');



router.post('/signin', signin)
router.post('/signup', signup)
router.get('/renew', verificaToken)


/*  
router.get('/renew', verificaToken, function (req, res) {
    const { token } = req.headers;
    // console.log ('==================== >>>' + token.replace('"','').trim() + '<---');
    var payload = jwt.decode(token.replace('"','').replace('"','').trim(), process.env.SEED);
    if (payload !== null) {
        const { usuario } = payload;
        res.json({
            usuario: usuario,
            token: token,
            menu: usuario.menu
        });
    } else {
        res.status(400).json({ message: 'Token no valido!' })
    }
    
}); 
 */

module.exports = router;