const express = require("express")

const app = express();

app.get('/hello', (req, res) => {
    res.send({ message: "hello" })
});

let PORT = 8081
app.listen(PORT, () => {
    console.log(`server is working${PORT}`)
})