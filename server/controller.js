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
    },
    getGoodAtApex: (req, res) => {
        const goodAtApex = ["You're alright I guess", "YOU'RE INSANE", "Do some aim training maybe?"]

        let randomIndex = Math.floor(Math.random() * goodAtApex.length)
        let randomGoodAtApex = goodAtApex[randomIndex]

        res.status(200).send(randomGoodAtApex)
    },
    getCouldYouBeBetter: (req, res) => {
        const couldYouBeBetter = ["You can always get better!"]

        let randomIndex = Math.floor(Math.random() * couldYouBeBetter.length)
        let randomCouldYouBeBetter = couldYouBeBetter[randomIndex]

        res.status(200).send(randomCouldYouBeBetter)
    },
    // getLogin: (req, res) => {
    //     const profile = ["Coming soon!"]

    //     let randomIndex = Math.floor(Math.random() * profile.length)
    //     let randomProfile = profile[randomIndex]

    //     res.status(200).send(randomProfile)
    // }
}