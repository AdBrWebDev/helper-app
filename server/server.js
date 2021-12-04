const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const dbcon = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pathfinder',
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
    const surname = req.body.surname;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const street = req.body.street;
    const age = req.body.age;
    const e_mail = req.body.e_mail;
    const sqlInsert = "INSERT INTO users (id_user, name, surname, phone, country, city, street, age, is_admin, avatar, e_mail) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
    dbcon.query(sqlInsert, ['',name, surname, phone, country, city, street,age, '', '', e_mail], (err, result) => {
        console.log(result)
    })
})


app.listen(3001, () => {
    console.log("Server running on 3001")
})