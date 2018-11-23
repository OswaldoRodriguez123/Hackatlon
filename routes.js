const express = require('express');
const pacienteRoutes = require('./routes/paciente');
const medicoRoutes = require('./routes/medico');
//const fichaRoutes = require('./routes/ficha');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

// mount routes at /
router.use('/pacientes', pacienteRoutes);
router.use('/medicos', medicoRoutes);
//router.use('/fichas', fichaRoutes);

module.exports = router;
