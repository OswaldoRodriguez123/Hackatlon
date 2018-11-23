const express = require('express');
const Ficha = require('../../../../modules/ficha/server/controllers/ficha');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET /api/fichas - Get list of fichas */
    .get(Ficha.list)

/** POST /api/fichas - Create new ficha */
.post(Ficha.create);

router.route('/:fichaId')
    /** GET /api/fichas/:fichaId - Get ficha */
    .get(Ficha.get)

/** PUT /api/fichas/:fichaId - Update ficha */
.put(Ficha.update)

/** DELETE /api/fichas/:fichaId - Delete ficha */
.delete(Ficha.remove);

/** Load ficha when API with fichaId route parameter is hit */
router.param('fichaId', Ficha.load);

module.exports = router;