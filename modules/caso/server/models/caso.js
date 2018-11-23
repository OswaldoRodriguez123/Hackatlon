const mongoose = require('mongoose');

/**
 * Caso Schema
 */
const CasoSchema = new mongoose.Schema({
    paciente_id: {
        type: String,
        required: true
    },
    medico_id: {
        type: String,
        required: true
    },
    tipo_atencion: {
        type: String,
        required: true
    },
    anamnesis: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Statics
 */
CasoSchema.statics = {
    /**
     * Get caso
     * @param {ObjectId} id - The objectId of caso.
     * @returns {Promise<Caso, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((caso) => {
                if (caso) {
                    return caso;
                }
            });
    },

    /**
     * List casos in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of casos to be skipped.
     * @param {number} limit - Limit number of casos to be returned.
     * @returns {Promise<Caso[]>}
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
 * @typedef Caso
 */
module.exports = mongoose.model('Caso', CasoSchema);