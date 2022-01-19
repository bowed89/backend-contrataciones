const { Router } = require('express');
const { ValidateFields } = require('../middlewares/field-validation');
const { check } = require('express-validator');

const {
    getAllPoa,
    getReqFucviaPoaId,
    getMenu,
    getMenuAll,
    getCursoSeminario,
    getCursoSeminarioEsp,
    getExperiencia,
    getExperienciaEsp,
    getExperienciaGral,
    getFormacionAc,
    getIdiomas,
    getCuadroEq,
    putCuadroEq,
    getCuadroId,
    postCuadroEq,
    postNotaAdjudicacion,
    findIdFucInNotaAd,
    getNotaById,
    getIdNotaByIdFuc,
    putNotaAdjudicacion

} = require('../controllers/unidad-solicitante/usa.controller');

const router = Router();

router.get('/getPoa', getAllPoa);
router.get('/getNotaById/:id', getNotaById);
router.get('/getIdNotaByIdFuc/:id', getIdNotaByIdFuc);
router.post('/getMenu', getMenu);
router.get('/getMenuAll', getMenuAll);
router.get('/getReqPoa/:id', getReqFucviaPoaId);
router.get('/findIdFucInNotaAd/:id', findIdFucInNotaAd);
router.get('/getCursoSeminario/:id', getCursoSeminario);
router.get('/getCursoSeminarioEsp/:id', getCursoSeminarioEsp);
router.get('/getExperiencia/:id', getExperiencia);
router.get('/getExperienciaEsp/:id', getExperienciaEsp);
router.get('/getExperienciaGral/:id', getExperienciaGral);
router.get('/getFormacionAc/:id', getFormacionAc);
router.get('/getIdiomas/:id', getIdiomas);
router.get('/getCuadroEq', getCuadroEq);
router.get('/getCuadroId/:id', getCuadroId);
//router.put('/putCuadroEq/:id', putCuadroEq);
router.put('/putCuadroEq/:id',
    [
        check('cargo', 'Introduzca el campo "Cargo" ').not().isEmpty(),
        check('formacion', 'Introduzca el campo "Formación" ').not().isEmpty(),
        check('expgen_anio', 'Introduzca el campo "Experiencia General(Años)" ').not().isEmpty(),
        check('expgen_mes', 'Introduzca el campo "Experiencia General(Meses)" ').not().isEmpty(),
        check('expesp_anio', 'Introduzca el campo "Experiencia Específica(Años)" ').not().isEmpty(),
        check('expesp_mes', 'Introduzca el campo "Experiencia Específica(Meses)" ').not().isEmpty(),
        check('cursos', 'Introduzca el campo "Cursos" ').not().isEmpty(),
        check('titulo_expgeneral', 'Introduzca el campo "Título Experiencia General" ').not().isEmpty(),
        check('titulo_expespecifica', 'Introduzca el campo "Título Experiencia Específica" ').not().isEmpty(),
        check('nivel_salarial', 'Introduzca el campo "Nivel Salarial" ').not().isEmpty(),
        check('sueldo', 'Introduzca el campo "Sueldo" ').not().isEmpty(),
        ValidateFields
    ], putCuadroEq

);


router.post('/postCuadroEq',
    [
        check('cargo', 'Introduzca el campo "Cargo" ').not().isEmpty(),
        check('formacion', 'Introduzca el campo "Formación" ').not().isEmpty(),
        check('expgen_anio', 'Introduzca el campo "Experiencia General(Años)" ').not().isEmpty(),
        check('expgen_mes', 'Introduzca el campo "Experiencia General(Meses)" ').not().isEmpty(),
        check('expesp_anio', 'Introduzca el campo "Experiencia Específica(Años)" ').not().isEmpty(),
        check('expesp_mes', 'Introduzca el campo "Experiencia Específica(Meses)" ').not().isEmpty(),
        check('cursos', 'Introduzca el campo "Cursos" ').not().isEmpty(),
        check('titulo_expgeneral', 'Introduzca el campo "Título Experiencia General" ').not().isEmpty(),
        check('titulo_expespecifica', 'Introduzca el campo "Título Experiencia Específica" ').not().isEmpty(),
        check('nivel_salarial', 'Introduzca el campo "Nivel Salarial" ').not().isEmpty(),
        check('sueldo', 'Introduzca el campo "Sueldo" ').not().isEmpty(),
        ValidateFields
    ], postCuadroEq);

router.post('/postNotaAdjudicacion',
    [
        check('id_formulario_contratacion', 'id_formulario_contratacion??').not().isEmpty(),
        check('usuario', 'Introduzca el campo "Usuario" ').not().isEmpty(),
        check('documentos_presentar', 'Introduzca los campo "Documentos a Presentar" ').not().isEmpty(),
        check('hr', 'Introduzca el campo "HR" ').not().isEmpty(),
        check('cite', 'Introduzca el campo "CITE"').not().isEmpty(),
        check('created_at', 'created_at??').not().isEmpty(),
        check('cil', 'Introduzca el campo "INE/CM/CIL Nº"').not().isEmpty().isNumeric().withMessage('El campo "INE/CM/CIL Nº" debe ser numérico'),


        ValidateFields
    ], postNotaAdjudicacion

);

//router.put('/putNotaAdjudicacion/:id', putNotaAdjudicacion);
router.put('/putNotaAdjudicacion/:id',
    [
        check('hr', 'Introduzca el campo "HR" ').not().isEmpty(),
        check('documentos_presentar', 'Introduzca los campo "Documentos a Presentar" ').not().isEmpty(),
        check('cite', 'Introduzca el campo "CITE" ').not().isEmpty(),
        ValidateFields
    ], putNotaAdjudicacion

);

module.exports = router;