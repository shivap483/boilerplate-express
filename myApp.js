require('dotenv').config();
let express = require('express');
const bodyParser = require('body-parser')
let app = express();

const absolutePath = __dirname + '/public'
app.use('/public', express.static(absolutePath))
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})

app.get("/json", (req, res) => {
    const obj = {message: "Hello json"};
    const upperCase = process.env.MESSAGE_STYLE
    if(upperCase == "uppercase") {
        const message = obj.message
        obj.message = message.toUpperCase();
    }
    res.json(obj)
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    const responseObj = {
        time: req.time
    }
    res.json(responseObj)
})

app.get('/:word/echo', (req, res) => {
    const responseObj = {
        echo: req.params.word
    }
    res.json(responseObj)
})

app.route('/name').get((req, res) => {
    const firstName = req.query.first
    const lastName = req.query.last
    const responseObj = {
        name: `${firstName} ${lastName}`
    }
    res.json(responseObj)
}).post((req, res) => {
    const firstName = req.body.first
    const lastName = req.body.last
    const responseObj = {
        name: `${firstName} ${lastName}`
    }
    res.json(responseObj)
})




































module.exports = app;
