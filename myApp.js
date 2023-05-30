require('dotenv').config();
let express = require('express');
let app = express();

const absolutePath = __dirname + '/public'
app.use('/public', express.static(absolutePath))

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





































module.exports = app;
