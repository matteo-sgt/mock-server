const https = require("https")
const express = require("express")
const fs = require("fs")
const cors = require('cors');

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true, limit: '3mb'}))
app.use(cors());

app.get("/raiteche/rest-async", (req, res) => {
    console.log("GET - /raiteche/rest-async");
    setTimeout(() => {
        res.status(200).json({
            res: "OK"
        });
    }, 1000);
})

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const PORT = process.env.PORT || 3000
https.createServer(options, app).listen(PORT, console.log(`server runs on port ${PORT}`))