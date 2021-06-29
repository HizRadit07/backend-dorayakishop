const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dorayakiSchema = new Schema({
    rasa: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
        },
    deskripsi:{
        type: String,
        required: true
    },
    gambar:{
        //image url
        type: String,
        required: true
    }
    }, {
        timestamps: true,
});

const Dorayaki = mongoose.model('Dorayaki',dorayakiSchema);

module.exports = Dorayaki