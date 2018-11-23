const mongoose = require('mongoose');

/**
 * Ficha Schema
 */
const FichaSchema = new mongoose.Schema({
    paciente_id: {
        type: String,
        required: true
    },
    estatura: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    presion_arterial: {
        type: String,
        required: true
    },
    grupo_sanguineo: {
        type: String,
        required: true
    },
    alergias: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Statics
 */
FichaSchema.statics = {
    /**
     * Get ficha
     * @param {ObjectId} id - The objectId of ficha.
     * @returns {Promise<Ficha, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((ficha) => {
                if (ficha) {
                    return ficha;
                }
            });
    },

    /**
     * List fichas in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of fichas to be skipped.
     * @param {number} limit - Limit number of fichas to be returned.
     * @returns {Promise<Ficha[]>}
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
 * @typedef Ficha
 */
module.exports = mongoose.model('Ficha', FichaSchema);