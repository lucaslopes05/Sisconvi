const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const usuariosRouter = require('./routes/usuario')
const adminRouter = require('./routes/admin')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')




//Configuracoes
    //Tamplete Engine 
        app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')
    // Sessao
        app.use(session({
            secret: "seguracaSenha",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())

    // Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')

            next()
        })
    //body-parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())   

    //Conecao com db Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/sisconvi',{useNewUrlParser: true}).then(()=>{
            console.log('Conectado ao Mongo Db')
        }).catch((err)=>{
            console.log('Erro no mongoose: '+err);
        })
    //Public
        app.use(express.static(path.join(__dirname,'public')))
    

//Rotas
        app.use('/usuarios',usuariosRouter)
        app.use('/admin',adminRouter)
        


//Outros 
    //numero da posta da aplicacao 
    const PORT = 3030
    app.listen(PORT, ()=>{
        console.log("Servidor rodano... ")
    })