const app = require('express')()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let users = {}
app.get('/api/:key', (req, res) => {
    if (users[req.params.key]){
        res.send(users[req.params.key])
    } else {
        res.sendStatus(403)
    }
    console.log(users)

})

app.post('/api/', (req, res) => {
    users[req.body.Key] = req.body.Value
    res.send(200)
    console.log(req.body)
})

app.put('/api/:key', (req, res) => {
    users[req.params.key] = req.body.Value
    res.send(200)
    // console.log()
})

app.delete('/api/:key', (req, res) => {
    // users[req.query.key] = req.body.Value
    delete users[req.params.key]
    console.log(users)
    res.send(200)
})


app.listen(1337,() => {
    console.log('Express server listening on port 1337');
})

