const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokodorayakiSchema = new Schema({
    nama: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
        },
    jalan:{
        type: String,
        required: true
    },
    kecamatan:{
        type: String,
        required: true
    },
    provinsi:{
        type: String,
        required: true
    }
    }, {
        timestamps: true,
});

const Toko_Dorayaki = mongoose.model('Toko_Dorayaki',tokodorayakiSchema);

module.exports = Toko_Dorayaki;