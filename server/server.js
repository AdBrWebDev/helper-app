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

app.get('/signs', (req, res) => {
    dbcon.query("SELECT COUNT(id_user) AS sum FROM nature_form", (err, result) => {
        res.send(result)
    })
})

app.post('/findDetails', (req, res) => {
    const header = req.body.search;
    dbcon.query(`SELECT * FROM pathfinderplus WHERE header = ?`, [header], (err, result) => {
        res.send(result)
    })
})

app.post('/getInfo', (req, res) => {
    dbcon.query("SELECT * FROM e_shop_products WHERE id_product = ?", [req.body.product], (err, result) => {
        res.send(result)
    })
})

app.post('/forumUserInfo', (req, res) => {
    dbcon.query("SELECT nickname, avatar FROM users WHERE id_user =?", [req.body.id], (err, result) => {
        res.send(result)
    })
})

app.get('/products', (req, res) => {
    dbcon.query("SELECT * FROM e_shop", (err, result) => {
        res.send(result)
    })
})

app.post('/pathPlus', (req, res) => {
    const SelectPlus = "SELECT DISTINCT(header) FROM pathfinderplus WHERE theme = ?";
    dbcon.query(SelectPlus, [req.body.search], (err, result) => {
        res.send(result)
    })
})

app.post('/addComment', (req, res) => {
    const insertComment = "INSERT INTO forum (id_item, id_user, dateOfPublic, title, text, image, theme) VALUES (?,?,?,?,?,?,?)";
    let date = new Date();
    dbcon.query(insertComment, ['', req.body.id_user, date ,req.body.txt, req.body.text, req.body.img, req.body.theme], (err, result) => {
        res.send(result)
    })
})

app.get('/sponsors', (req, res) => {
    dbcon.query("SELECT * FROM sponsors", (err, result) => {
        res.send(result)
    })
})

app.post('/articles', (req, res) => {
    const SelectPlus = "SELECT * FROM articles WHERE theme = ?";
    dbcon.query(SelectPlus, [req.body.title], (err, result) => {
        res.send(result)
    })
})

app.post('/articlesData', (req, res) => {
    const SelectPlus = "SELECT * FROM articlesData WHERE id = ?";
    dbcon.query(SelectPlus, [req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/fUserData', (req, res) => {
    const SelectPlus = "SELECT nickname,avatar FROM users WHERE id_user = ?";
    dbcon.query(SelectPlus, [req.body.user], (err, result) => {
        res.send(result)
    })
})

app.post('/forumItems', (req, res) => {
    dbcon.query("SELECT DISTINCT(title) FROM forum WHERE theme = ?", [req.body.theme], (err, result) => {
        res.send(result)
    })
})

app.post('/findItems', (req, res) => {
    dbcon.query("SELECT * FROM forum WHERE title = ?", [req.body.txt], (err, result) => {
        res.send(result)
    })
})

app.post('/forumNewItem', (req, res) => {
    const id_user = req.body.id_user;
    const dateOfPublic = req.body.dateOfPublic;
    const title = req.body.title;
    const text = req.body.text;
    const theme = req.body.theme;
    const newForumItem = "INSERT INTO forum (id_item ,id_user, dateOfPublic, title, text, image, theme) VALUES (?, ?, ?, ?, ?, ?, ?)";
    dbcon.query(newForumItem, ['',id_user, dateOfPublic, title, text, '', theme], (err, result) => {
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
    const nick = req.body.nick;
    bcrypt.hash(password, rounds, (err, hash) => {
        if(err){
            console.log(err)
        }
        dbcon.query("INSERT INTO users (id_user, name, surname, phone, country, city, street, age, is_admin, avatar, e_mail, password, nick) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", 
            ['',name, surname, phone, country, city, street,age, '', '', e_mail, hash, nick], (err, result) => {
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