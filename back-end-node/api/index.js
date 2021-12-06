const express = require('express')
const cors = require('cors')

const routes = require("./routes")

const app = express()
const port = 4000
app.use(cors("*"));


routes(app)

app.listen(port, () => console.log(`tudo ok na porta ${port}`))

module.exports = app