const express = require('express');
const Medico = require('../controllers/medico');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET /api/medicos - Get list of medicos */
    .get(Medico.list)

/** POST /api/medicos - Create new medico */
.post(Medico.create);

router.route('/:medicoId')
    /** GET /api/medicos/:medicoId - Get medico */
    .get(Medico.get)

/** PUT /api/medicos/:medicoId - Update medico */
.put(Medico.update)

/** DELETE /api/medicos/:medicoId - Delete medico */
.delete(Medico.remove);

/** Load medico when API with medicoId route parameter is hit */
router.param('medicoId', Medico.load);

module.exports = router;