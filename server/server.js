const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const rounds = 10;
const multer = require('multer'); 
require("dotenv").config()
const port = process.env.PORT || 3001

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

app.post('/publicateImg', upload.single('mainImg'))

app.post('/publicateImages', upload.array('images'))

app.post("/user", (req, res) => {
    dbcon.query("SELECT * FROM users WHERE id_user = ?", [req.body.user_id], (err, result) => {
        res.send(result)
    })
})

app.post('/profileOrders', (req, res) => {
    dbcon.query("SELECT * FROM orders WHERE id_user = ?", [req.body.user_id], (err, result) => {
        res.send(result)
    })
})

app.post('/profileArticles', (req, res) => {
    dbcon.query("SELECT * FROM articles WHERE id_user = ?", [req.body.user_id], (err, result) => {
        res.send(result)
    })
})

app.post('/profileForum', (req, res) => {
    dbcon.query("SELECT * FROM forum WHERE id_user = ?", [req.body.user_id], (err, result) => {
        res.send(result)
    })
})
 
app.post('/EditProfileFItem', (req, res) => {
    dbcon.query("UPDATE forum SET text = ? WHERE id_item = ?", [req.body.text ,req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/editMyArticle', (req, res) => {
    dbcon.query("UPDATE articles SET text = ?, rating = ? WHERE id_article = ?", [req.body.text, req.body.rating, req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/deleteOrder', (req, res) => {
    dbcon.query("UPDATE orders SET status = ? WHERE id_order = ?", ['Zrušená' ,req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/profileForm', (req, res) => {
    dbcon.query("SELECT id_user FROM nature_form WHERE id_user = ?", [req.body.user_id], (err, result) => {
        res.send(result)
    })
})

app.post('/createOrder', (req, res) => {
    dbcon.query("INSERT INTO orders (id_order, id_user, order_created, delivery_date, generatedOrderInt, payment, shipping, total_price, status) VALUES (?,?,?,?,?,?,?,?,?)", 
    ['', req.body.id_user, req.body.created, req.body.delivery, req.body.specialId, req.body.payment, req.body.shipping, req.body.total, 'V príprave'], (err, result) => {
        res.send(result)
    })
})

app.post('/createOrderProducts', (req, res) => {
    dbcon.query("INSERT INTO ordered_products (specialOrderId, id_product, contain, image, title) VALUES (?,?,?,?,?)", 
    [req.body.specialId, req.body.id_product, req.body.contain, req.body.image, req.body.title], (err, result) => {
        res.send(result)
    })
})

app.post('/profileFavArticles', (req, res) => {
    dbcon.query("SELECT articles.text, articles.mainImg, articles.title, articles.rating, articles.likes, articles.date FROM favarticles RIGHT JOIN articles ON favarticles.article_id = articles.id_article WHERE favarticles.id_user = ?", [req.body.user_id], (err, result) => {
        res.send(result)
    })
})

app.get('/signs', (req, res) => {
    dbcon.query("SELECT COUNT(id_user) AS sum FROM nature_form", (err, result) => {
        res.send(result)
    })
})

app.post('/findDetails', (req, res) => {
    dbcon.query(`SELECT * FROM pathfinder_plus WHERE header = ?`, [req.body.search], (err, result) => {
        res.send(result)
    })
})

app.post('/getInfoAOrder', (req, res) => {
    dbcon.query(`SELECT * FROM ordered_products WHERE specialOrderId = ?`, [req.body.specialId], (err, result) => {
        res.send(result)
    })
})

app.post('/getInfo', (req, res) => {
    dbcon.query("SELECT * FROM product_properties WHERE id_product = ?", [req.body.product], (err, result) => {
        res.send(result)
    })
})

app.post('/addLike', (req, res) => {
    dbcon.query("UPDATE articles SET likes = ? WHERE id_article = ?", [req.body.like, req.body.id], (err, result) => {
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
    const SelectPlus = "SELECT DISTINCT(header) FROM pathfinder_plus WHERE theme = ?";
    dbcon.query(SelectPlus, [req.body.search], (err, result) => {
        res.send(result)
    })
})

app.post('/addComment', (req, res) => {
    const insertComment = "INSERT INTO forum (id_item, id_user, dateOfPublic, title, text, theme) VALUES (?,?,?,?,?,?)";
    let date = new Date();
    dbcon.query(insertComment, ['', req.body.id_user, date ,req.body.txt, req.body.text, req.body.theme], (err, result) => {
        res.send(result)
    })
        })

app.get('/sponsors', (req, res) => {
    dbcon.query("SELECT * FROM sponsors", (err, result) => {
        res.send(result)
    })
})

app.post('/addToFav', (req, res) => {
    dbcon.query("INSERT INTO favarticles (id_user ,article_id) VALUES (?, ?)", [req.body.user, req.body.id], (err, result) => {
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
    const SelectPlus = "SELECT likes, text, date, id_article FROM articles WHERE id_article = ?";
    dbcon.query(SelectPlus, [req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/articlesDataGalery', (req, res) => {
    const SelectPlus = "SELECT image FROM articles_galery WHERE id_article = ?";
    dbcon.query(SelectPlus, [req.body.id], (err, result) => {
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
    const newForumItem = "INSERT INTO forum (id_item ,id_user, dateOfPublic, title, text, theme) VALUES (?, ?, ?, ?, ?, ?)";
    dbcon.query(newForumItem, ['',req.body.id_user, req.body.dateOfPublic, req.body.title, req.body.text, req.body.theme], (err, result) => {
        res.send(result)
    })
})

app.post('/natureForm', (req, res) => {
    const pushToDb = "INSERT INTO nature_form (id_user, date) VALUES (?, ?)";
    dbcon.query(pushToDb, [req.body.user, req.body.date], (err, result) => {
        res.send(result)
    })
})

app.post('/publicate', (req, res) => {
    const PublicInsert = "INSERT INTO articles (id_user, id_article, mainImg, title, rating, likes, text, theme, date, specialId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    dbcon.query(PublicInsert, [req.body.id_user, '', '', req.body.sign, req.body.rating, 0, req.body.text, req.body.theme, new Date(), req.body.specialId], (err, result) => {
        res.send(result)
    })
})

app.post('/editData', (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const phone = req.body.phone;
    const country = req.body.country; 
    const city = req.body.city;
    const street = req.body.street;
    const age = req.body.age;
    const e_mail = req.body.e_mail;
    const nick = req.body.nick;
    const id_user = req.body.id_user;
    dbcon.query("UPDATE users SET name = ?, surname = ?, phone = ?, country = ?, city = ?, street = ?, age = ?, avatar = ?, e_mail = ?, nickname = ? WHERE id_user = ?", 
            [name, surname, phone, country, city, street,age, '', e_mail, nick, id_user])})

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
        dbcon.query("SELECT e_mail FROM users WHERE e_mail = ?", [e_mail], (err, result) => {
            console.log(result)
            if(result.length > 0){
                res.send({message: "Užívateľ už existuje!"})
            }else if(result.length === 0){
                dbcon.query("INSERT INTO users (id_user, name, surname, phone, country, city, street, age, is_admin, avatar, e_mail, password, nickname) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", 
            ['',name, surname, phone, country, city, street,age, '', '', e_mail, hash, nick]);
            res.send({message: "Registrácia bola úspešná"})
            }
        })
    })
    })

    app.post('/login', (req, res) => {
        dbcon.query("SELECT * FROM users WHERE e_mail = ?", [req.body.loginEmail], (err, result) => {
            if(err){
                res.send({err: err})
            }
            if(result.length > 0){
                bcrypt.compare(req.body.loginPassword, result[0].password, (error, response) => {
                    if(response){
                        /*req.session.user = result;
                        console.log(req.session.user)*/
                        res.send(result)
                    }else{
                        res.send({message: "Nesprávny e-mail alebo heslo!"})
                    }
                })
            }else{
                res.send({message: "Užívatel neexistuje!"})
            }
        }); 
    });

app.post('/natureUser', (req, res) => {
    dbcon.query("SELECT id_user from nature_form WHERE id_user = ?", [req.body.user], (err, result) => {
        if(result){
            res.send(result)
        }else{
            res.send({message: "Neevidovane"})
        }
    })
})

app.listen(port, () => {
    console.log("Server running on"+port || 3001)
})