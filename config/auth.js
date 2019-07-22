const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')

// Model de usuario
require('../models/Usuario')
const Usuario = mongoose.model('Usuario')

module.exports = function(passport){

    passport.use(new localStrategy ({usernameField: 'email' ,passwordField: 'senha'},(email,senha,done)=>{

        Usuario.findOne({email: email }).then((usuario)=>{
            if(!usuario){
                console.log("usuario nao existe ========>")
                return done(null,false,{message: 'Esta conta nao existe'})
            }

            bcrypt.compare(senha, usuario.senha,(erro,batem)=>{
                if(batem){
                    return done(null, usuario)
                }else{
                    return done(null,false,{message: 'Senha incorreta'})
                }
            })
        })
    }))

    // Manter os dados do usuario em uma sessao

        passport.serializeUser((usuario, done)=>{
            done(null, usuario.id)
        })


        passport.deserializeUser ((id,done)=>{
            
            Usuario.findById(id,(err,usuario)=>{
                done(err,usuario)
            })
        })

}

