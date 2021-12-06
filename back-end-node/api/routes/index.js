const bodyParser = require('body-parser')
const cafes = require('./cafeRota')
const bolos = require('./boloRota')
const categoria = require('./categoriaRota')
const login = require('./loginRota')

module.exports = app => {
    app.use(bodyParser.json())
    app.use("/cafe", cafes)
    app.use("/bolo", bolos)
    app.use("/categoria", categoria)
    app.use("/login", login)
}