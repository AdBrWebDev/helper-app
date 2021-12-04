const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const dbcon = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    dbcon.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) => {
    const name = req.body.name;
    const sqlInsert = "INSERT INTO users (name) VALUES(?)";
    dbcon.query(sqlInsert, [name], (err, result) => {
        console.log(result)
    })
})


app.listen(3001, () => {
    console.log("Server running on 3001")
})