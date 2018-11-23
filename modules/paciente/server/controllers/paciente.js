const Paciente = require('../../../../modules/paciente/server/models/paciente');

/**
 * Load paciente and append to req.
 */
function load(req, res, next, id) {
    Paciente.get(id)
        .then((paciente) => {
            req.paciente = paciente; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}

/**
 * Get paciente
 * @returns {Paciente}
 */
function get(req, res) {
    return res.json(req.paciente);
}

/**
 * Create new paciente
 * @property {string} req.body.pacientename - The pacientename of paciente.
 * @property {string} req.body.mobileNumber - The mobileNumber of paciente.
 * @returns {Paciente}
 */
function create(req, res, next) {
    const paciente = new Paciente(req.body);

    paciente.save()
        .then(savedPaciente => res.json(savedPaciente))
        .catch(e => next(e));
}

/**
 * Update existing paciente
 * @property {string} req.body.pacientename - The pacientename of paciente.
 * @property {string} req.body.mobileNumber - The mobileNumber of paciente.
 * @returns {Paciente}
 */
function update(req, res, next) {
    const paciente = req.paciente;
    paciente.run = req.body.run;
    paciente.nombre = req.body.nombre;
    paciente.apellidos = req.body.apellidos;
    paciente.direccion = req.body.direccion;
    paciente.email = req.body.email;
    paciente.telefono = req.body.telefono;
    paciente.fecha_nacimiento = req.body.fecha_nacimiento;
    paciente.genero = req.body.genero;

    paciente.save()
        .then(savedPaciente => res.json(savedPaciente))
        .catch(e => next(e));
}

/**
 * Get paciente list.
 * @property {number} req.query.skip - Number of pacientes to be skipped.
 * @property {number} req.query.limit - Limit number of pacientes to be returned.
 * @returns {Paciente[]}
 */
function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    Paciente.list({ limit, skip })
        .then(pacientes => res.json(pacientes))
        .catch(e => next(e));
}

/**
 * Delete paciente.
 * @returns {Paciente}
 */
function remove(req, res, next) {
    const paciente = req.paciente;
    paciente.remove()
        .then(deletedPaciente => res.json(deletedPaciente))
        .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };