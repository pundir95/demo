const express = require("express")

const app = express();

app.get('/', (req, res) => {
    res.render('</p>I am your big fan</p>')
})

let PORT = 8080
app.listen(PORT, () => {
    console.log("server is working")
})