import React, {useState, useEffect, lazy} from 'react';
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
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'
import Cookies from 'js-cookie'
const ShoppingCart = lazy(() => import('./ShoppingCart'))

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
    const [nature, setForm] = useState([])

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
            setForumItems(response.data[0])
            console.log(response.data[0])
        })
        Axios.post("http://localhost:3001/profileForm", {user_id: Cookies.get("id")}).then((response) =>{
            setForm(response.data[0])
            console.log(response.data[0])
        })
        Axios.post("http://localhost:3001/profileOrders", {user_id: Cookies.get("id")}).then((response) =>{
            setOrders(response.data)
            console.log(response.data)
        })
        Axios.post("http://localhost:3001/profileArticles", {user_id: Cookies.get("id")}).then((response) =>{
            setArticles(response.data[0])
            console.log(response.data[0])
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
        <Button variant="outlined" color="info" onClick={() => openForm(!form)}>Prihlásenie / registrácia {user}</Button>}   
        {profile &&<Box id="dark-background"> 
        <Box className="text-center">
        <Button variant="contained" color="error" className="my-3" onClick={() => openProfile(!profile)}>x</Button>
        </Box>
        <Card style={{'overflowY': 'scroll', 'height': '90%'}} className="container text-center text-white p-5 border border-dark" id="card">
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
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Paper  className="card p-5" id="card">
                                <Typography>Vaše objednávky</Typography>
                                {orders.map((order, index) => {<Typography key={index}>{order[0].status}</Typography>})}
                            </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>

                    </Grid>
                </Grid>
                <Paper className="bg-dark text-white">
                <Typography variant="h4">Vaše objednávky</Typography>
                <List>
                    <ListItem className="text-center">
                        <ListItemText primary="žiadne objednávky" />
                    </ListItem>
            </List>
                </Paper>
                <Paper className="bg-dark text-white">
                <Typography className="bg-dark text-white" variant="h4">Vaše članky</Typography>
                <List>
                    <ListItem className="text-center">
                        <ListItemText primary="žiadne aktivity" />
                    </ListItem>
            </List>
                </Paper>
                <Paper className="bg-dark text-white">
                <Typography className="bg-dark text-white" variant="h4">Vaše aktivity vo fóre</Typography>
                <List>
                    <ListItem className="text-center">
                        <ListItemText primary="žiadne aktivity" />
                    </ListItem>
            </List>
                </Paper>
                <ShoppingCart />
            </Card></Box>}
        {form && <Box id="dark-background" style={{'overflowY': 'scroll'}}>
        <Container>
            <Card className="p-3 text-center bg-dark text-white border border-info border-2">
                <Box>
                <Button className="mx-auto my-3" color="error" variant="outlined" onClick={() => openForm(!form)}>x</Button>
                </Box>
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
            <Card className="my-3 bg-dark text-white text-center border border-info border-2">
                <Typography variant="h3" className="my-3">Registrácia</Typography>
                <Grid container component="form" className="text-center mx-auto">
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="my-2"><TextField variant="outlined" onChange={(e) => {setLoginEmail(e.target.value)}} type="text" label="loginEmail" name="loginEmail" /></Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12} lg={12} className="my-2"><TextField variant="outlined" onChange={(e) => {setLoginPassword(e.target.value)}} type="password" label="loginPassword" name="loginPassword" /></Grid>
                </Grid>
                <Box>
                <Button variant="outlined" color="error">Ešte niesom registrovaný</Button>
                </Box>
                <Button type="submit" variant="outlined" color="primary" onClick={(e) => signUp(e.preventDefault())}>Prihlásiť</Button>
            </Card>
            <h1>{user}</h1>
        </Container>
    </Box>}</Box>);
}