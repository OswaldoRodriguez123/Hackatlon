const mongoose = require('mongoose');

/**
 * Medico Schema
 */
const MedicoSchema = new mongoose.Schema({
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
MedicoSchema.statics = {
    /**
     * Get medico
     * @param {ObjectId} id - The objectId of medico.
     * @returns {Promise<Medico, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((medico) => {
                if (medico) {
                    return medico;
                }
            });
    },

    /**
     * List medicos in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of medicos to be skipped.
     * @param {number} limit - Limit number of medicos to be returned.
     * @returns {Promise<Medico[]>}
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
 * @typedef Medico
 */
module.exports = mongoose.model('Medico', MedicoSchema);