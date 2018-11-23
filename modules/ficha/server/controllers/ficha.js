const Ficha = require('../../../../modules/ficha/server/models/ficha');

/**
 * Load ficha and append to req.
 */
function load(req, res, next, id) {
    Ficha.get(id)
        .then((ficha) => {
            req.ficha = ficha; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get ficha
 * @returns {Ficha}
 */
function get(req, res) {
    return res.json(req.ficha);
}

/**
 * Create new ficha
 * @property {string} req.body.fichaname - The fichaname of ficha.
 * @property {string} req.body.mobileNumber - The mobileNumber of ficha.
 * @returns {Ficha}
 */
function create(req, res, next) {
    const ficha = new Ficha(req.body);

    ficha.save()
        .then(savedFicha => res.json(savedFicha))
        .catch(e => next(e));
}

/**
 * Update existing ficha
 * @property {string} req.body.fichaname - The fichaname of ficha.
 * @property {string} req.body.mobileNumber - The mobileNumber of ficha.
 * @returns {Ficha}
 */
function update(req, res, next) {
    const ficha = req.ficha;
    ficha.estatura = req.body.estatura;
    ficha.peso = req.body.peso;
    ficha.presion_arterial = req.body.presion_arterial;
    ficha.grupo_sanguineo = req.body.grupo_sanguineo;
    ficha.alergias = req.body.alergias ? req.body.alergias : ficha.alergias;

    ficha.save()
        .then(savedFicha => res.json(savedFicha))
        .catch(e => next(e));
}

/**
 * Get ficha list.
 * @property {number} req.query.skip - Number of fichas to be skipped.
 * @property {number} req.query.limit - Limit number of fichas to be returned.
 * @returns {Ficha[]}
 */
function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Ficha.list({ limit, skip })
        .then(fichas => res.json(fichas))
        .catch(e => next(e));
}

/**
 * Delete ficha.
 * @returns {Ficha}
 */
function remove(req, res, next) {
    const ficha = req.ficha;
    ficha.remove()
        .then(deletedFicha => res.json(deletedFicha))
        .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };