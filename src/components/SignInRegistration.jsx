import React, {useState} from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import '../App.css'
import Axios from 'axios'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Cookies from 'js-cookie'
import Modal from '@mui/material/Modal'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function SignInRegistration(){
    const [form, openForm] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [age, setAge] = useState(0)
    const [phone, setPhone] = useState('')
    const [e_mail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState('')
    const [anchor, setAnchor] = useState(null)
    const [profile, openProfile] = useState(false)
    const [nick, setNick] = useState('')
    const [userData, setUserData] = useState([])
    const [orders, setOrders] = useState([])
    const [forumItems, setForumItems] = useState([])
    const [articles, setArticles] = useState([])
    const open = Boolean(anchor)
    const openMenu = (e) => {
        setAnchor(e.currentTarget)
    }
    const closeMenu = () => {
        setAnchor(null)
    }

    let avatar = null

    Axios.defaults.withCredentials = true;
    const submit = () => {
        Axios.post('http://localhost:3001/register', {name: name, surname: surname, phone: phone, country: country, city: city, street: street, age: age, e_mail: e_mail, password: password, nick: nick}).then(() => {alert("insert successful")})
    }

    const signUp = () => {
        Axios.post('http://localhost:3001/login', {loginEmail: loginEmail, loginPassword: loginPassword}).then((response) => {
            if(response.data.massage){
                setUser(response.data.massage)
                console.log(response.data.massage)
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
    }

    const logout = () => {Cookies.remove("id");
    Cookies.remove("user");}

    return(<Box>
        {Cookies.get("id") != null ? <Box>
        <Button id="userOptions" aria-controls="userOptions" aria-haspopup="true" aria-expanded={open ? 'true': undefined} onClick={openMenu}>{Cookies.get("user")}</Button>
        <Menu id="userOptions" anchorEl={anchor} open={open} onClose={closeMenu} MenuListProps={{
            'aria-labelledby': 'userOptions',
        }}>
            <MenuItem onClick={userProfile}>Môj profil</MenuItem>
            <MenuItem onClick={logout}>Odhlásenie</MenuItem>
        </Menu>
        </Box> :
        <Button variant="outlined" color="info" onClick={() => openForm(!form)}>Prihlásenie / registrácia</Button>}   
        <Modal open={profile} onClose={() => userProfile(false)}>
        <Card style={{'overflowY': 'scroll', 'height': '90%'}} className="text-center text-white p-5 border container border-dark" id="card">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Avatar className="mx-auto my-5" sx={{width: 86, height: 86}} src={avatar == null ? "/images/alien.png" : 'avatar'} />
                    <Typography variant="h5" className="text-white">{Cookies.get("user")}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography>Užívatel: {userData.name} {userData.surname}</Typography>
                    <Typography>Vek: {userData.age}</Typography>
                    <Typography>E-mail: {userData.e_mail}</Typography>
                    <Typography>Tel. č:{userData.phone}</Typography>
                    <Typography>Krajina: {userData.country}</Typography>
                    <Typography>Mesto: {userData.city}</Typography>
                    <Typography>Adresa: {userData.street}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="p-1">
                    <Paper  className="card p-5 text-center" id="card">
                        <Typography variant="h4">Aktivity vo fore</Typography>
                            {forumItems.map((fItem, index) => <Typography>{fItem.title}</Typography>)}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="p-1">
                    <Paper  className="card p-5" id="card">
                                <Typography variant="h4">Objednávky</Typography>
                                {orders.map((order, index) => <Grid container>
                                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6} key={index}>Vytvorená: {new Date(order.order_created).getDate()}.{new Date(order.order_created).getMonth()+1}.{new Date(order.order_created).getFullYear()}</Grid>
                                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6} key={index}>Stav: {order.status}</Grid>
                                </Grid>)}
                            </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Paper  className="card p-5" id="card">
                                <Typography variant="h4">Články</Typography>
                                {articles.map((article, index) => <Grid container>
                                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6} key={index}>Stav: {article.title}</Grid>
                                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6} key={index}>Stav: {article.likes}</Grid>
                                </Grid>)}
                            </Paper>
                    </Grid>
                </Grid>
            </Card></Modal>
            <Modal open={form} onClose={() => openForm(!form)}>
        <Container>
            <Card className="p-5 text-center bg-dark text-white border border-info border-2">
                <Typography variant="h3">Registrácia</Typography>
                <Grid container component="form" className="text-center mx-auto">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setName(e.target.value)}} label="meno" name="name" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setSurname(e.target.value)}} label="priezvisko" name="surname" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setPhone(e.target.value)}} label="telefon" name="phone" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setCountry(e.target.value)}} label="krajina" name="country" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setCity(e.target.value)}} label="mesto" name="city" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setStreet(e.target.value)}} label="ulica" name="street" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setAge(e.target.value)}} label="vek" name="age" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="my-2">
                    <TextField variant="outlined" onChange={(e) => {setPassword(e.target.value)}} label="heslo" type="password" name="password" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField variant="outlined" onChange={(e) => {setEmail(e.target.value)}} label="e-mail" name="e_mail" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField variant="outlined" onChange={(e) => {setNick(e.target.value)}} label="nick" name="nick" />
                </Grid>
                <Button className="mx-auto" type="submit" variant="outlined" color="primary" onClick={() => submit()}>Registrovať</Button>
                </Grid>
            </Card>
            <Card className="my-3 p-5 bg-dark text-white text-center border border-info border-2">
                <Typography variant="h3" className="my-3">Registrácia</Typography>
                <Grid container component="form" className="text-center mx-auto">
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="my-2"><TextField variant="outlined" onChange={(e) => {setLoginEmail(e.target.value)}} type="text" label="loginEmail" name="loginEmail" /></Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="my-2"><TextField variant="outlined" onChange={(e) => {setLoginPassword(e.target.value)}} type="password" label="loginPassword" name="loginPassword" /></Grid>
                </Grid>
                <Button type="submit" variant="outlined" color="primary" onClick={(e) => signUp(e.preventDefault())}>Prihlásiť</Button>
            </Card>
            <h1>{user}</h1>
        </Container>
    </Modal></Box>);
}