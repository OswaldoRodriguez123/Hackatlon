const mongoose = require('mongoose');

/**
 * Paciente Schema
 */
const PacienteSchema = new mongoose.Schema({
    run: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'El correo no es valido.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Statics
 */
PacienteSchema.statics = {
    /**
     * Get paciente
     * @param {ObjectId} id - The objectId of paciente.
     * @returns {Promise<Paciente, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((paciente) => {
                if (paciente) {
                    return paciente;
                }
            });
    },

    /**
     * List pacientes in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of pacientes to be skipped.
     * @param {number} limit - Limit number of pacientes to be returned.
     * @returns {Promise<Paciente[]>}
     */
    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
};

/**
 * @typedef Paciente
 */
module.exports = mongoose.model('Paciente', PacienteSchema);