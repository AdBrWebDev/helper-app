const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const rounds = 10;

const dbcon = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pathfinder',
})

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'], 
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 1000*60*60*24}
}))

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

app.post('/natureForm', (req, res) => {
    const userId = req.body.user;
    const date = req.body.date;
    const pushToDb = "INSERT INTO nature_form (id_user, date) VALUES (?, ?)";
    dbcon.query(pushToDb, [userId, date], (err, result) => {
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
    bcrypt.hash(password, rounds, (err, hash) => {
        if(err){
            console.log(err)
        }
        dbcon.query("INSERT INTO users (id_user, name, surname, phone, country, city, street, age, is_admin, avatar, e_mail, password) VALUES(?,?,?,?,?,?,?,?,?,?,?, ?)", 
            ['',name, surname, phone, country, city, street,age, '', '', e_mail, hash], (err, result) => {
            console.log(err)
        })
    })
    })

app.post('/login', (req, res) => {
    const loginEmail = req.body.loginEmail;
    const loginPassword = req.body.loginPassword;
    dbcon.query("SELECT * FROM users WHERE e_mail = ?", [loginEmail], (err, result) => {
        console.log(result)
        if(err){
            res.send({err: err})
        }
        if(result.length > 0){
            bcrypt.compare(loginPassword, result[0].password, (error, response) => {
                if(response){
                    req.session.user = result;
                    console.log(req.session.user)
                    res.send(result)
                }else{
                    res.send({message: "Wrong users email or password!!"})
                }
            })
        }else{
            res.send({message: "User doesn't exit!"})
        }
    }); 
});

app.get("/login", (res, req) => {
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false, user: req.session.user})
    }
})


app.listen(3001, () => {
    console.log("Server running on 3001")
})