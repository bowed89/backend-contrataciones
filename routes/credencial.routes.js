const { Router } = require('express');

const {
    getAllContrato, postCredencial2, getAllCredencial, putCredencial2
} = require('../controllers/unidad-solicitante/credencial.controller');

const router = Router();

router.get('/', getAllContrato);
router.get('/getAllCredencial', getAllCredencial);
router.post('/postCredencial2', postCredencial2);

router.put('/putCredencial2', putCredencial2);


module.exports = router;