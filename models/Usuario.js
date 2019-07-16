const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = new Schema({
    nome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    },
    eadmin:{
        type:Number,
        default: 0
    },
    senha: {
        type: String,
        required: true
    }

})

mongoose.model('Usuario', Usuario)