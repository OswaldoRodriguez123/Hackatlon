const Medico = require('../models/medico');

/**
 * Load medico and append to req.
 */
function load(req, res, next, id) {
    Medico.get(id)
        .then((medico) => {
            req.medico = medico; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get medico
 * @returns {Medico}
 */
function get(req, res) {
    return res.json(req.medico);
}

/**
 * Create new medico
 * @property {string} req.body.mediconame - The mediconame of medico.
 * @property {string} req.body.mobileNumber - The mobileNumber of medico.
 * @returns {Medico}
 */
function create(req, res, next) {
    const medico = new Medico(req.body);

    medico.save()
        .then(savedMedico => res.json(savedMedico))
        .catch(e => next(e));
}

/**
 * Update existing medico
 * @property {string} req.body.mediconame - The mediconame of medico.
 * @property {string} req.body.mobileNumber - The mobileNumber of medico.
 * @returns {Medico}
 */
function update(req, res, next) {
    const medico = req.medico;
    medico.run = req.body.run;
    medico.nombre = req.body.nombre;
    medico.apellidos = req.body.apellidos;
    medico.direccion = req.body.direccion;
    medico.email = req.body.email;
    medico.telefono = req.body.telefono;
    medico.fecha_nacimiento = req.body.fecha_nacimiento;
    medico.genero = req.body.genero;

    medico.save()
        .then(savedMedico => res.json(savedMedico))
        .catch(e => next(e));
}

/**
 * Get medico list.
 * @property {number} req.query.skip - Number of medicos to be skipped.
 * @property {number} req.query.limit - Limit number of medicos to be returned.
 * @returns {Medico[]}
 */
function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Medico.list({ limit, skip })
        .then(medicos => res.json(medicos))
        .catch(e => next(e));
}

/**
 * Delete medico.
 * @returns {Medico}
 */
function remove(req, res, next) {
    const medico = req.medico;
    medico.remove()
        .then(deletedMedico => res.json(deletedMedico))
        .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };