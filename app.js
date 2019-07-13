const express = require('express')
const app = express()
const handlebars = require('express-handlebars')




//configuracoes
    //Tamplete Engine 
        app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')
    //Conecao com banco de dados
    

//rotas

//outros 




//numero da posta da aplicacao 
const POST = 3030
app.listen(POST, ()=>{
    console.log("Servidor rodano... ")
})