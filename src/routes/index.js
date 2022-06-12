const express = require('express');
const router = express.Router();
// Requerimos express, porque voy a utilizar un módulo llamado Router. Este módulo nos permite crear múltiples rutas y mantenerlas en archivos por separado. router es ahora el encargado de crear las rutas.

router.get('/', (req, res) => {
    res.render('index', {
        title: 'First Website Node'
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Website'
    });
});
// Voy a importar las rutas desde el archivo ppal (index.js).
module.exports = router;