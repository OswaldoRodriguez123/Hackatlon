const express = require('express');
const pacienteRoutes = require('./modules/paciente/server/routes/paciente');
const medicoRoutes = require('./modules/medico/server/routes/medico');
const fichaRoutes = require('./modules/ficha/server/routes/ficha');
const casoRoutes = require('./modules/caso/server/routes/caso');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

// mount routes at /
router.use('/pacientes', pacienteRoutes);
router.use('/medicos', medicoRoutes);
router.use('/fichas', fichaRoutes);
router.use('/casos', casoRoutes);

module.exports = router;