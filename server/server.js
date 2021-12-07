const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
/*const cookieParser = require('cookie-parser');
const session = require('express-session');*/
const bcrypt = require('bcrypt');
const rounds = 10;

const dbcon = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pathfinder',
})

app.use(cors());
app.use(express.json());
app.get('/api/get-user', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    dbcon.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/eshop-products', (req, res) => {
    const sqlSelect = "SELECT * FROM e_shop";
    dbcon.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/register', (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const phone = req.body.phone;
    const country = req.body.country;
    const city = req.body.city;
    const street = req.body.street;
    const age = req.body.age;
    const e_mail = req.body.e_mail;
    const password = req.body.password;
    const sqlInsert = "INSERT INTO users (id_user, name, surname, phone, country, city, street, age, is_admin, avatar, e_mail, password) VALUES(?,?,?,?,?,?,?,?,?,?,?, ?)";
    dbcon.query(sqlInsert, ['',name, surname, phone, country, city, street,age, '', '', e_mail, password], (err, result) => {
        console.log(result)
    })
})

app.post('/login', (req, res) => {
    const loginEmail = req.body.loginEmail;
    const loginPassword = req.body.loginPassword;
    const sqlInsert = "SELECT * FROM users WHERE e_mail = ? AND password = ?";
    dbcon.query(sqlInsert, [loginEmail, loginPassword], (err, result) => {
        if(err){
            res.send({err: err})
        }
        if(result){
            res.send(result)
        }else{
            res.send("Wrong users login")
        }
    })  
})


app.listen(3001, () => {
    console.log("Server running on 3001")
})