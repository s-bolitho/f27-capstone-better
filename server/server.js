const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    calcKd,
    grabHTML,
    grabJS,
    grabCSS
} = require('./controller.js')

app.post('/calcKd', calcKd)
app.get('/index.html', grabHTML)
app.get('/index.js', grabJS)
app.get('/styles.css', grabCSS)

const { getGoodAtApex } = require('./controller')

app.get("/api/goodAtApex", getGoodAtApex)

const { getCouldYouBeBetter } = require('./controller')

app.get("/api/couldYouBeBetter", getCouldYouBeBetter)

// const { getLogin } = require('./controller')

// app.get("/api/profile", getLogin)

app.listen(4004, () => console.log('Running on port 4004'))