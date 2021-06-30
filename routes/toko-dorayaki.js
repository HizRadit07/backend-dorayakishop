const router = require('express').Router();
let Toko_Dorayaki = require('../models/toko-dorayaki.model');

router.route('/').get((req,res) =>{
    Toko_Dorayaki.find()
        .then(tokodorayaki => res.json(tokodorayaki))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) => {
    const nama = req.body.nama;
    const jalan = req.body.jalan;
    const kecamatan = req.body.kecamatan;
    const provinsi = req.body.provinsi

    const newTokoDorayaki = new Toko_Dorayaki({
        nama,
        jalan,
        kecamatan,
        provinsi
    });

    newTokoDorayaki.save()
        .then(()=> res.json('Toko Dorayaki added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
    Toko_Dorayaki.findById(req.params.id)
        .then(tokodorayaki => res.json(tokodorayaki))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) =>{
    Toko_Dorayaki.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Toko Dorayaki deleted.'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Toko_Dorayaki.findById(req.params.id)
        .then(tokodorayaki => {
            tokodorayaki.nama = req.body.nama;
            tokodorayaki.jalan = req.body.jalan;
            tokodorayaki.kecamatan = req.body.kecamatan;
            tokodorayaki.provinsi = req.body.provinsi;

            tokodorayaki.save()
                .then(()=> res.json('Toko Dorayaki updated!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;