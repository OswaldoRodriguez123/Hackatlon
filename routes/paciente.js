const express = require('express');
const Paciente = require('../controllers/paciente');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET /api/pacientes - Get list of pacientes */
    .get(Paciente.list)

/** POST /api/pacientes - Create new paciente */
.post(Paciente.create);

router.route('/:pacienteId')
    /** GET /api/pacientes/:pacienteId - Get paciente */
    .get(Paciente.get)

/** PUT /api/pacientes/:pacienteId - Update paciente */
.put(Paciente.update)

/** DELETE /api/pacientes/:pacienteId - Delete paciente */
.delete(Paciente.remove);

/** Load paciente when API with pacienteId route parameter is hit */
router.param('pacienteId', Paciente.load);

module.exports = router;