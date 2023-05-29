let express = require('express');
let app = express();
port = 3000
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
})
app.get("/", (req, res) => {
    const message = 'Hello Express'
    console.log(`${message}`)
  res.send(message)
})





































module.exports = app;
