const path = require('path')
require('dotenv').config()







module.exports = {
    grabHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },
    grabJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.js'))
    },
    grabCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },
    calcKd: (req, res) => {
        console.log("got here")
        console.log(req.body)
        let { kills, deaths } = req.body

        let answer = +kills / +deaths

        let newKd = {
            kd: answer
        }
        res.status(200).send(newKd)
        console.log(newKd.kd)
    }
}