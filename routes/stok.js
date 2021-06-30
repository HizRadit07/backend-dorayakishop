const router = require('express').Router();
let Stok = require('../models/stok.model');

router.route('/').get((req,res) =>{
    Stok.find()
        .then(stok => res.json(stok))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) => {
    const nama = req.body.nama;
    const rasa = req.body.rasa;
    const jumlah = Number(req.body.jumlah);

    const newStok = new Stok({
        nama,
        rasa,
        jumlah
    });

    newStok.save()
        .then(()=> res.json('Stok added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
    Stok.findById(req.params.id)
        .then(stok => res.json(stok))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/findname/:nama').get((req,res) => {
    Stok.find({nama: req.params.nama})
        .then(stok => res.json(stok))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) =>{
    Stok.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Stok deleted.'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Stok.findById(req.params.id)
        .then(stok => {
            stok.nama = req.body.nama;
            stok.rasa = req.body.rasa;
            stok.jumlah = Number(req.body.jumlah);

            stok.save()
                .then(()=> res.json('Stok updated!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});


module.exports = router;