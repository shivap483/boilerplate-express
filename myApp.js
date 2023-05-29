let express = require('express');
let app = express();

const absolutePath = __dirname + '/public'
app.use('/public', express.static(absolutePath))

app.get("/", (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})





































module.exports = app;
