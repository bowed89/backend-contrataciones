const { Router } = require('express');
const { putFuc, getPostulanteDeFuc } = require('../controllers/unidad-solicitante/rrhh.controller');
const { check } = require('express-validator');
const { ValidateFields } = require('../middlewares/field-validation')

const router = Router();


//router.put('/update-fuc/:id', putFuc);
router.get('/get-postulante-fuc/:id', getPostulanteDeFuc);

router.put('/update-fuc/:id', 
            [
                check('forma_adjudicacion', 'Seleccione la Forma de Adjudicación').not().isEmpty(),
                check('id_postulantes', 'Seleccione un Postulante').not().isEmpty(),
                check('metodo_seleccion_adjudicacion', 'Seleccione un Método de Selección y Adjudicación').not().isEmpty(),
                ValidateFields
            ], putFuc

);


module.exports = router;