import React, {useState} from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import '../App.css'
import Axios from 'axios'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Cookies from 'js-cookie'
import Modal from '@mui/material/Modal'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import LazyHero from 'react-lazy-hero'
import {motion} from 'framer-motion'

export default function SignInRegistration(){
    const [form, openForm] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [age, setAge] = useState(null)
    const [phone, setPhone] = useState('')
    const [e_mail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState('')
    const [profile, openProfile] = useState(false)
    const [nick, setNick] = useState('')
    const [userData, setUserData] = useState([])
    const [orders, setOrders] = useState([])
    const [forumItems, setForumItems] = useState([])
    const [articles, setArticles] = useState([])
    const [selectedForm, selectForm] = useState('SinUp')
    const [openOptions, setOpenOptions] = useState(false)
    const [favArticles, getFavArticles] = useState([])
    const [FItems, openFItems] = useState(false)
    const [UOrders, openUOrders] = useState(false)
    const [UArticles, openUArticles] = useState(false)
    const [FArticles, openFArticles] = useState(false)
    const [UEdit, editData] = useState(false)
    const [Uedit, openUEdit] = useState(false)
    const [edit, setEdit] = useState([])
    const [editedT, setEdited] = useState('')
    const [oFavArticle, openFavArticle] = useState(false)
    const [InfoAOrder, getInfoAOrder] = useState([])
    const [selectedOrder, openSelectedOrder] = useState(false)
    const [EditUArticle ,openEditUArticle] = useState(false)
    const [articletext, setArticleText] = useState('')
    const [articlerating, setArticleRating] = useState(0)

    Axios.defaults.withCredentials = true;
    const submit = () => {
        Axios.post('http://localhost:3001/register', {name: name, surname: surname, phone: phone, country: country, city: city, street: street, age: age, e_mail: e_mail, password: password, nick: nick}).then(() => {alert("insert successful")})
    }

    const uploadSubmitedData = () => {
      Axios.post('http://localhost:3001/editData', {name: name || userData.name, surname: surname || userData.surname, phone: phone || userData.phone, country: country || userData.country, city: city || userData.city, street: street || userData.street, age: age || userData.age, e_mail: e_mail || userData.e_mail, nick: nick || userData.nickname, id_user: Cookies.get("id")}).then(() => {alert("edit successful")})
        
    }

    console.log(favArticles)

    const signUp = () => {
        Axios.post('http://localhost:3001/login', {loginEmail: loginEmail, loginPassword: loginPassword}).then((response) => {
            if(response.data.message){
                setUser(response.data.message)
                console.log(response.data.message)
            }else{
                Cookies.set("id", response.data[0].id_user, {expires: 2, secure: true})
                Cookies.set("user", response.data[0].nickname, {expires: 2, secure: true})
            }
        })
    }

    const userProfile = () => {
        openProfile(!profile)
        Axios.post("http://localhost:3001/user", {user_id: Cookies.get("id")}).then((response) => {
            console.log(response.data[0])
            setUserData(response.data[0])
        })
        Axios.post("http://localhost:3001/profileForum", {user_id: Cookies.get("id")}).then((response) =>{
            setForumItems(response.data)
            console.log(response.data)
        })
        Axios.post("http://localhost:3001/profileOrders", {user_id: Cookies.get("id")}).then((response) =>{
            setOrders(response.data)
            console.log(response.data)
        })
        Axios.post("http://localhost:3001/profileArticles", {user_id: Cookies.get("id")}).then((response) =>{
            setArticles(response.data)
            console.log(response.data)
        })
        Axios.post("http://localhost:3001/profileFavArticles", {user_id: Cookies.get("id")}).then((response) =>{
            getFavArticles(response.data)
            console.log(response.data)
        })
    }

    const logout = () => {Cookies.remove("id");
    Cookies.remove("user");}

    const ChangeForm = (e, form) => {
      selectForm(form)
    }

    const EditFItems = (id, txt) => {
        Axios.post("http://localhost:3001/EditProfileFItem", {id: id, text: txt})
        setEdited('')
    }

    const openOrder = (specialId) => {
        console.log(specialId)
        Axios.post("http://localhost:3001/getInfoAOrder", {specialId: specialId}).then((response) =>{
            getInfoAOrder(response.data)
            console.log(response.data)
        })
        openSelectedOrder(true)
    }

    const deleteOrder = (id) => {
        Axios.post("http://localhost:3001/deleteOrder", {id: id})
    }

    const editMyArticle = (id) => {
        Axios.post("http://localhost:3001/editMyArticle", {id: id, text: articletext, rating: articlerating})
    }

    return(<Box>{Cookies.get("id") != null ? <Box>
        <Button color="info" id="userOptions" aria-controls="userOptions" aria-haspopup="true" onClick={() => setOpenOptions(!openOptions)}><i className="material-icons mr-1">person</i> {Cookies.get("user")}</Button>
        <Dialog open={openOptions} onClose={() => setOpenOptions(false)}>
        <Box className="text-center">
        <DialogTitle>Menu</DialogTitle>
        <DialogContent>
            <List>
            <ListItem style={{'cursor': 'pointer'}} onClick={() => {userProfile(); setOpenOptions(false)}}>Môj profil</ListItem>
            <ListItem style={{'cursor': 'pointer'}} onClick={() => {logout(); setOpenOptions(false)}}>Odhlásenie</ListItem>
            </List>
        </DialogContent></Box></Dialog>
        </Box> : <Button variant="outlined" color="info" onClick={() => openForm(!form)}>Prihlásenie / registrácia</Button>}   
        <Modal open={profile} onClose={() => userProfile(false)}>
        <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
        <Card style={{'overflowY': 'scroll', 'height': '90%', 'marginTop': '2%', 'borderRadius': '30px'}} className="text-center text-white w-75 bg-dark text-dark p-5 border mx-auto border-dark" id="card">
                    <Avatar className="mx-auto my-4" sx={{width: 86, height: 86}} src="/images/pathfinder.jpg" />
                    <Typography variant="h5">{Cookies.get("user")}</Typography>
                    <Typography variant="h6">{userData.is_admin ? 'admin': 'užívatel'}</Typography>
                    <Typography><i className="material-icons">person</i> {userData.name} {userData.surname}</Typography>
                    <Typography><i className="material-icons">location_on</i>{userData.country}, {userData.city}</Typography>
                    <Button className="mt-2" onClick={() => {editData(true)}} variant="outlined" color="error"><i className="material-icons">edit</i></Button>
                    <Grid container className="my-5" spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                          <Card onClick={() => openFItems(true)} id="card" className="p-4 text-white" style={{'cursor': 'pointer'}}>
                              <Typography variant="h6">Príspevky vo fóre</Typography>
                              <Typography sx={{transform: 'scale(1.4)'}} className="my-5" variant="h4"><i className="material-icons">forum</i></Typography>
                              <Typography variant="h2"> {forumItems.length}</Typography></Card>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                          <Card onClick={() => openUOrders(true)} id="card" className="p-4 text-white" style={{'cursor': 'pointer'}}>
                              <Typography variant="h6">Objednávky</Typography>
                              <Typography sx={{transform: 'scale(1.4)'}} className="my-5" variant="h4"><i className="material-icons">local_shipping</i></Typography>
                              <Typography variant="h2"> {orders.length}</Typography></Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                          <Card onClick={() => openUArticles(true)} id="card" className="p-4 text-white" style={{'cursor': 'pointer'}}>
                              <Typography variant="h6">Vaše články</Typography>
                              <Typography sx={{transform: 'scale(1.4)'}} className="my-5" variant="h4"><i className="material-icons">auto_stories</i></Typography>
                              <Typography variant="h2"> {articles.length}</Typography></Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                          <Card onClick={() => openFavArticle(true)} id="card" className="p-4 text-white" style={{'cursor': 'pointer'}}>
                              <Typography variant="h6">Oblúbené články</Typography>
                              <Typography sx={{transform: 'scale(1.4)'}} className="my-5" variant="h4"><i className="material-icons">favorite</i></Typography>
                              <Typography variant="h2"> {favArticles.length}</Typography></Card>
                        </Grid>
                    </Grid>
                    <Modal open={UEdit} onClose={() => editData(false)}>
                    <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Card className="p-5 text-center mt-5 text-white border border-dark bg-dark container" id="card">
                <Typography variant="h3">Informácie o užívateľovi</Typography>
                <Grid container component="form" className="text-center mx-auto">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="meno" value={name === '' ? userData.name : name} onChange={(e) => {setName(e.target.value)}} name="name" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="priezvisko" value={surname === '' ? userData.surname: surname} onChange={(e) => {setSurname(e.target.value)}} name="surname" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="telefon" value={phone === '' ? userData.phone : phone} onChange={(e) => {setPhone(e.target.value)}} name="phone" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="krajina" value={country === '' ?userData.country : country} onChange={(e) => {setCountry(e.target.value)}} name="country" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="mesto" value={city === '' ? userData.city : city} onChange={(e) => {setCity(e.target.value)}} name="city" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="ulica" value={street === '' ? userData.street : street} onChange={(e) => {setStreet(e.target.value)}} name="street" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input type="number" className="form-control w-50 text-center text-white mx-auto" placeholder="vek" value={age === null ? userData.age : age} onChange={(e) => {setAge(e.target.value)}} name="age" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <input className="form-control w-50 text-center mx-auto text-white" placeholder="e-mail" value={ e_mail === '' ? userData.e_mail : e_mail } onChange={(e) => {setEmail(e.target.value)}} name="e_mail" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <input className="form-control w-50 text-center mx-auto text-white" placeholder="nick" value={nick === '' ? userData.nickname : nick} onChange={(e) => {setNick(e.target.value)}} name="nick" />
                </Grid>
                </Grid>
                <Button className="mx-auto mt-3" type="submit" variant="contained" color="primary" onClick={() => uploadSubmitedData()}>Upraviť údaje</Button></Card></motion.div>
                </Modal>
                    <Modal open={FItems} onClose={() => openFItems(false)}>
                    <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Paper className="card p-5 text-center bg-dark container text-white" style={{'marginTop': '5%', 'minHeight': '600px'}} id="card">
                        <Typography variant="h3">Aktivity vo fóre</Typography>
                <List>
              {forumItems.length < 1 ? <Typography variant="h5" className="text-white mx-auto text-center my-4">Žiadne príspevky vo fóre</Typography> : forumItems.map((fItem, index) => 
                <ListItem style={{'cursor': 'pointer'}} className="text-white" key={index}>
                  <ListItemAvatar><Avatar sx={{background: 'transparent'}}><i className="material-icons">forum</i></Avatar></ListItemAvatar>
                  <ListItemText primary={fItem.title} secondary={<React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: '13px' }}
                component="span"
                variant="body2"
                color="text.primary"
                className="text-white"
              >
                {fItem.text}
              </Typography>
            </React.Fragment>}/>
            <Button variant="outlined" color="error" onClick={() => {openUEdit(true); setEdit(fItem)}}><i className="material-icons">edit</i></Button>
            <Modal open={Uedit} onClose={() => openUEdit(false)}>
            <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Paper className="card bg-dark container text-white text-center p-5" style={{'marginTop': '8%'}} id="card">
                        <Typography variant="h3">{edit.title}</Typography>
                        <textarea className="form-control text-white my-5" onChange={(e) => setEdited(e.target.value)} value={editedT === '' ? edit.text : editedT} sx={{minHeight: '100px'}} rows="20"></textarea>
                        <Box className="my-5">
                        <Button variant="outlined" color="error" onClick={() => {EditFItems(edit.id_item, editedT); openUEdit(false)}}><i className="material-icons">edit</i> Upraviť</Button>
                        </Box>
                    </Paper></motion.div>
                </Modal>
                </ListItem>)}
            </List></Paper></motion.div></Modal>
            <Modal open={UOrders} onClose={() => openUOrders(false)}>
            <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Paper  className="card p-5 bg-dark container text-white text-center" style={{'marginTop': '5%', 'minHeight': '600px'}} id="card">
                                <Typography variant="h4" className="mb-3">Objednávky</Typography>
                                {orders.length < 1 ? <Typography variant="h5" className="text-white mx-auto text-center my-4">Zatial žiadne objednávky</Typography> : orders.map((order, index) => <Box><Grid spacing={2} style={{'cursor': 'pointer'}} className="my-2 p-5 bg-dark" id="card" key={index} container>
                                    <Grid className="d-flex" item xs={12} sm={6} md={6} xl={6} lg={6}><Typography className="mx-auto">Dátum vytvorenia: {new Date(order.order_created).getDate()}.{new Date(order.order_created).getMonth()+1}.{new Date(order.order_created).getFullYear()}</Typography>
                                    <Typography className="mx-auto">Suma: {order.total_price} €</Typography></Grid>
                                    <Grid className="d-flex" item xs={12} sm={6} md={6} xl={6} lg={6}><Typography className="mx-auto">Stav: {order.status}</Typography>
                                    <Button className="mx-auto" variant="outlined" color="error" onClick={() => openOrder(order.generatedOrderInt)}><i className="material-icons">info</i></Button></Grid></Grid>
                                    <Modal open={selectedOrder} onClose={() => openSelectedOrder(false)}>
                                    <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                                    <Paper className="card p-5 bg-dark container text-white text-center" style={{'marginTop': '8%'}} id="card">
                                        <Grid container spacing={2}>
                                            <Grid item sm={12} md={6} lg={6} xl={6}>
                                                <Typography>Číslo objednávky: {order.id_order}</Typography>
                                                <Typography className="mx-auto">Dátum vytvorenia: {new Date(order.order_created).getDate()}.{new Date(order.order_created).getMonth()+1}.{new Date(order.order_created).getFullYear()}</Typography>
                                                <Typography className="mx-auto">Dátum vytvorenia: {new Date(order.delivery_date).getDate()}.{new Date(order.delivery_date).getMonth()+1}.{new Date(order.delivery_date).getFullYear()}</Typography>
                                                <Typography>Platba: {order.payment}</Typography>
                                                <Typography>Stav: {order.status}</Typography>
                                                <Typography>Suma: {order.total_price} €</Typography>
                                            </Grid>
                                            <Grid item sm={12} md={6} lg={6} xl={6}>
                                                <Box><Button className="my-auto" variant="outlined" onClick={() => deleteOrder(order.id_order)} color="error" disabled={order.status !== 'V príprave'}><i className="material-icons">clear</i> Zrušiť objednávku</Button></Box>
                                            </Grid>
                                        </Grid>
                                        {InfoAOrder.map((orderItem, index) => <Grid className="mt-5" container spacing={2}>
                                            <Grid item sm={12} md={6} lg={4} xl={3}><img src={`images/${orderItem.image}`} alt={orderItem.title} style={{'height': '80px'}} /></Grid>
                                            <Grid item sm={12} md={6} lg={8} xl={9} className="d-flex">
                                            <Typography className="mx-auto my-auto">Množstvo: {orderItem.contain}</Typography>
                                            <Typography className="mx-auto my-auto">Produkt: {orderItem.title}</Typography>
                                            </Grid>
                                        </Grid>)}
                                    </Paper></motion.div>
                                    </Modal></Box>
                                    )}
                    </Paper></motion.div>
            </Modal>
            <Modal open={UArticles} onClose={() => openUArticles(false)}>
            <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Paper className="card p-5 text-white container bg-dark" style={{'marginTop': '5%', 'minHeight': '600px'}} id="card">
                                <Typography variant="h4" className="text-center">Články</Typography>
                                    <List>
              {articles.length < 1 ? <Typography variant="h5" className="text-white mx-auto text-center my-4">Žiadne napísané články</Typography> : articles.map((article, index) => <Box>
                <ListItem className="text-white p-5 w-75 mx-auto" style={{'cursor': 'pointer'}} key={index}>
                  <ListItemAvatar>
                      <Avatar sx={{backgroundColor: 'transparent'}}><i className="material-icons">auto_stories</i></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={article.title} secondary={<Typography className="text-white"><i className="material-icons" style={{'transform': 'scale(.8)'}}>thumb_up</i> {article.likes}</Typography>} />
                  <Button variant="outlined" color="error" onClick={() => openEditUArticle(true)}><i className="material-icons">edit</i></Button>
                </ListItem>
                <Modal open={EditUArticle} onClose={() => openEditUArticle(false)}>
                <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                <Paper className="card p-5 text-white container bg-dark text-center" style={{'marginTop': '3%'}} id="card">
                    <Typography variant="h2">{article.title}</Typography>
                    <Typography variant="h6">Náročnosť</Typography>
                    <input type="number" className="form-control w-25 mx-auto mb-4 text-white" value={articlerating === 0 ? article.rating : articlerating} onChange={(e) => setArticleRating(e.target.value)} />
                    <Typography variant="h6">Obsah článku</Typography>
                    <textarea className="mb-4 text-white" style={{'height': '350px'}} value={articletext === '' ? article.text : articletext} onChange={(e) => setArticleText(e.target.value)} />
                    <Box>
                        <Button variant="outlined" color="error" onClick={() => editMyArticle(article.id_article)}><i className="material-icons">edit</i> Upraviť článok</Button>
                    </Box>
                </Paper></motion.div>
                </Modal>
                </Box>)}</List>
                            </Paper></motion.div>
                            </Modal>
            <Modal open={oFavArticle} onClose={() => openFavArticle(false)}>
            <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                    <Paper  className="card p-5 container bg-dark text-white" style={{'marginTop': '5%', 'minHeight': '600px'}} id="card">
                                <Typography className="text-center" variant="h4">Oblúbené články</Typography>
                                <List>
              {favArticles.length < 1 ? <Typography variant="h5" className="text-white mx-auto text-center my-4">Nemáte oblúbené články</Typography> : favArticles.map((articles, index) => 
                <ListItem style={{'cursor': 'pointer'}} className="text-white" key={index}>
                  <ListItemAvatar><Avatar sx={{background: 'transparent'}}><i className="material-icons">forum</i></Avatar></ListItemAvatar>
                  <ListItemText primary={articles.title} /><Button onClick={() => openFArticles(true)} variant="outlined" color="error"><i className="material-icons">auto_stories</i></Button>
                  <Modal open={FArticles} onClose={() => openFArticles(false)}>
                  <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                <Card className="container border text-center border-dark mt-5 bg-dark" id="card" style={{'overflowY': 'scroll', 'height': '95%'}}>
                    <LazyHero color="#111111" minHeight="80vh" opacity="0.5" parallaxOffset={150} imageSrc={`/images/${articles.mainImg}`}>
                        <Box>
                            <Typography color="white" variant="h2">{articles.title}</Typography>
                        </Box>
                    </LazyHero>
                    <Box className="text-white container mx-auto">
                    <Typography style={{'font-size': '18px'}} className="w-75 mx-auto">{articles.text}</Typography>
                    <Typography variant="h2">Galeria</Typography>
                    </Box>
                </Card></motion.div> 
                </Modal></ListItem>)}</List>
                            </Paper></motion.div>
                            </Modal>
                                <Typography className="my-4"variant="h3">Aktivity</Typography>
                                <Box class="message is-info mt-3">
                                    <Typography class="message-body">Údaje sa synchronizujú prostredníctvom aplikácie Strava. Táto služba bude dostupná od 1.10.2022</Typography>
                                </Box>
                    </Card></motion.div></Modal>
            <Modal open={form} onClose={() => openForm(!form)}>
        <Container>
        <BottomNavigation sx={{ width: 500 }} className="mx-auto border border-dark" id="card" style={{'marginTop': 100, 'transform': 'scale(1.1)'}} value={selectedForm} onChange={ChangeForm}>
      <BottomNavigationAction className="text-white" label="Prihlásenie" value="SignUp" icon={<i className="material-icons">person</i>} />
      <BottomNavigationAction className="text-white" label="Registrácia" value="SignIn" icon={<i className="material-icons">person_add</i>}/>
    </BottomNavigation>
            {(selectedForm === 'SignIn') ?<Card className="p-5 text-center mt-5 text-white border border-dark bg-dark" id="card">
                <Typography variant="h3">Registrácia</Typography>
                <Grid container component="form" className="text-center mx-auto">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="meno" onChange={(e) => {setName(e.target.value)}} name="name" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="priezvisko" onChange={(e) => {setSurname(e.target.value)}} name="surname" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="telefon" onChange={(e) => {setPhone(e.target.value)}} name="phone" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="krajina" onChange={(e) => {setCountry(e.target.value)}} name="country" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="mesto" onChange={(e) => {setCity(e.target.value)}} name="city" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="ulica" onChange={(e) => {setStreet(e.target.value)}} name="street" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input type="number" className="form-control w-50 text-center mx-auto" placeholder="vek" onChange={(e) => {setAge(e.target.value)}} name="age" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <input className="form-control w-50 text-center mx-auto text-white" placeholder="heslo" onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <input className="form-control w-50 text-center mx-auto text-white" placeholder="e-mail" onChange={(e) => {setEmail(e.target.value)}} name="e_mail" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <input className="form-control w-50 text-center mx-auto text-white" placeholder="nick" onChange={(e) => {setNick(e.target.value)}} name="nick" />
                </Grid>
                <Button className="mx-auto mt-3" type="submit" variant="contained" color="primary" onClick={() => submit()}>Registrovať</Button>
                </Grid>
            </Card> :
            <Card className="mt-5 p-5 text-white text-center border border-dark bg-dark" id="card">
                <Typography variant="h3" className="my-3">Prihlásenie</Typography>
                <Grid container component="form" className="text-center mx-auto">
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="my-2"><input placeholder="E-mail" className="form-control w-50 text-center text-white mx-auto" onChange={(e) => {setLoginEmail(e.target.value)}} type="text" name="loginEmail" /></Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="my-2"><input placeholder="Heslo" className="form-control w-50 text-center text-white mx-auto" onChange={(e) => {setLoginPassword(e.target.value)}} type="password" name="loginPassword" /></Grid>
                </Grid>
                {user === null ? 'ok' : <Typography className="text-white">{user}</Typography>}
                <Button type="submit" variant="contained" color="primary" onClick={(e) => signUp(e.preventDefault())}>Prihlásiť</Button>
            </Card>}
        </Container>
    </Modal></Box>);
}