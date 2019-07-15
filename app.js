const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')




//configuracoes
    //Tamplete Engine 
        app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')

    //body-parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())   

    //Conecao com banco de dados
    

//rotas


//outros 
    //numero da posta da aplicacao 
    const PORT = 3030
    app.listen(PORT, ()=>{
        console.log("Servidor rodano... ")
    })