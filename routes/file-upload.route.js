'use strict';
var express = require('express');
var router = express.Router();
var fileupload = require('express-fileupload');
var fs = require('fs');
const path = require('path');

router.use(fileupload());

/* GET home page. */
router.post('/fileupload', function (req, res) {
    if (req.files.photo == undefined || req.files.photo == null) {
        console.log('No existe imagen!');
        res.status(415).send();
    }
    const file = req.files.photo;
    var directory = './Uploads'; 
    //Create a directory if it doesn't exist
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory); /* Crea una carpeta  */
    }
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        file.mv("./Uploads/" + file.name, function (error, response) {
            if (error) {
                res.status(415).send();
            }
            else {
                let fileLocation = path.join(__dirname, '../Uploads/' + file.name)
                res.status(200).json({
                    response: req.files,
                    url: fileLocation
                })
            }
        });
    }
    else {
        res.status(415).send();
    }
});

router.get('/images/:name', (req, res) => {
    let name = req.params.name
    console.log('name', name);
    let fileLocation = path.join(__dirname, '../Uploads/' + name)
    console.log('fileLocation', fileLocation);
    res.sendFile(fileLocation)
});

router.get('/name/:name', (req, res) => {
    let name = req.params.name
    console.log('name', name);
    let fileLocation = path.join(__dirname, '../Uploads/' + name)
    console.log('fileLocation', fileLocation);
    res.sendFile(fileLocation)
});

module.exports = router;