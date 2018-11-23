const express = require('express');
const Caso = require('../../../../modules/caso/server/controllers/caso');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET /api/casos - Get list of casos */
    .get(Caso.list)

/** POST /api/casos - Create new caso */
.post(Caso.create);

router.route('/:casoId')
    /** GET /api/casos/:casoId - Get caso */
    .get(Caso.get)

/** PUT /api/casos/:casoId - Update caso */
.put(Caso.update)

/** DELETE /api/casos/:casoId - Delete caso */
.delete(Caso.remove);

router.route('/:pacienteId')
    /** GET /api/casos/:casoId - Get caso */
    .get(Caso.getCasoPaciente)

/** Load caso when API with casoId route parameter is hit */
router.param('casoId', Caso.load);

module.exports = router;