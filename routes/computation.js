const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(req.query)


    if (Object.keys(req.query).length === 0) {

        console.log("entered")
        let abso = Math.random()
        res.render('computation', { value: `abso applied to ${abso} is ${Math.abs(abso)}` })
    }
    else
        for (let a in req.query) {
            {
                console.log(a)
                res.render('computation', { value: `abso applied to ${req.query[a]} is ${Math.abs(req.query[a])}` })
            }
        }



})



module.exports = router