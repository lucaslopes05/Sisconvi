const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')




//Configuracoes
    //Tamplete Engine 
        app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')

    //body-parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())   

    //Conecao com db Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/blogapp',{useNewUrlParser: true}).then(()=>{
            console.log('Conectado ao Mongo Db')
        }).catch((err)=>{
            console.log('Erro no mongoose: '+err);
        })
    

//Rotas


//Outros 
    //numero da posta da aplicacao 
    const PORT = 3030
    app.listen(PORT, ()=>{
        console.log("Servidor rodano... ")
    })