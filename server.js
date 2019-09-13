const express = require("express")
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json()) // permitir pra que eu envie dados pra aplicação em formato json
app.use(cors()) // Dentro dos parenteses, definir quais dominios vc quer que tenha acesso. Sem nada, está disponivel pra ser acessada publicamente

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models')
// const product = mongoose.model('Product')
// use é tipo um coringa, irá receber todo tipo de requisição. GET POST etc.
// as rotas 
app.use('/api', require('./src/routes'))

app.listen(3001)