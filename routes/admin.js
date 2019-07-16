const express = require('express');
const router = express();


router.get('/',(req,res)=>{
    res.render('admin/index')
    // res.send("Rota padrao admin")
})


module.exports = router;