const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stokSchema = new Schema({
    nama: {
        type: String,
        required: true,
        },
    rasa:{
        type: String,
        required: true
    },
    jumlah:{
        type: Number,
        required: true,
        minimum: 0
    }
    }, {
        timestamps: true,
});

const Stok = mongoose.model('Stok',stokSchema);

module.exports = Stok;