const express = require('express');
const router = express();
const {eAdmin} = require('../helpers/eAdmin')


router.get('/',(req,res)=>{
    res.render('admin/index')
    // res.send("Rota padrao admin")
})

router.get('/admin',eAdmin, (req,res)=>{
    res.send('Somente para ADMIN')
})

router.get('/teste',(req,res)=>{
    res.render('layouts/principal')
})


module.exports = router;