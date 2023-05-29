let express = require('express');
let app = express();
// port = 3000
// app.listen(port, () => {
//   console.log(`Node is listening on port ${port}...`);
// })
app.get("/", (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})





































module.exports = app;
