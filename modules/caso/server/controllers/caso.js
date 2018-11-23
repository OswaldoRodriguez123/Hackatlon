const Caso = require('../../../../modules/caso/server/models/caso');

/**
 * Load caso and append to req.
 */
function load(req, res, next, id) {
    Caso.get(id)
        .then((caso) => {
            req.caso = caso; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get caso
 * @returns {Caso}
 */
function get(req, res) {
    return res.json(req.caso);
}

/**
 * Create new caso
 * @property {string} req.body.casoname - The casoname of caso.
 * @property {string} req.body.mobileNumber - The mobileNumber of caso.
 * @returns {Caso}
 */
function create(req, res, next) {
    const caso = new Caso(req.body);

    caso.save()
        .then(savedCaso => res.json(savedCaso))
        .catch(e => next(e));
}

/**
 * Update existing caso
 * @property {string} req.body.casoname - The casoname of caso.
 * @property {string} req.body.mobileNumber - The mobileNumber of caso.
 * @returns {Caso}
 */
function update(req, res, next) {
    const caso = req.caso;
    caso.tipo_atencion = req.body.tipo_atencion;
    caso.anamnesis = req.body.anamnesis;

    caso.save()
        .then(savedCaso => res.json(savedCaso))
        .catch(e => next(e));
}

/**
 * Get caso list.
 * @property {number} req.query.skip - Number of casos to be skipped.
 * @property {number} req.query.limit - Limit number of casos to be returned.
 * @returns {Caso[]}
 */
function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Caso.list({ limit, skip })
        .then(casos => res.json(casos))
        .catch(e => next(e));
}

/**
 * Delete caso.
 * @returns {Caso}
 */
function remove(req, res, next) {
    const caso = req.caso;
    caso.remove()
        .then(deletedCaso => res.json(deletedCaso))
        .catch(e => next(e));
}

function getCasoPaciente(req, res) {
    console.log(req.params)
    return Caso.findOne({ 'paciente_id': req.params.pacienteId });
}

module.exports = { load, get, create, update, list, remove, getCasoPaciente };