const routes = require('express').Router()

routes.get('/users', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})


module.exports = routes