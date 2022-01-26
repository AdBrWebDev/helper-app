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
import Badge from '@mui/material/Badge';

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
    const [profile, openProfile] = useState(false)
    const [nick, setNick] = useState('')
    const [userData, setUserData] = useState([])
    const [orders, setOrders] = useState([])
    const [forumItems, setForumItems] = useState([])
    const [articles, setArticles] = useState([])
    const [selectedForm, selectForm] = useState('SinUp')
    const [openOptions, setOpenOptions] = useState(false)
    const [portfolioForm, setPForm] = useState('favArticles')

    let avatar = null

    Axios.defaults.withCredentials = true;
    const submit = () => {
        Axios.post('http://localhost:3001/register', {name: name, surname: surname, phone: phone, country: country, city: city, street: street, age: age, e_mail: e_mail, password: password, nick: nick}).then(() => {alert("insert successful")})
    }

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
    }

    const ChangeForm = (e, newValue) => {
        selectForm(newValue)
    }

    const setportfolioForm = (e, FORM) => {
        setPForm(FORM);
    }

    const logout = () => {Cookies.remove("id");
    Cookies.remove("user");}

    return(<Box>
        {Cookies.get("id") != null ? <Box>
        <Button id="userOptions" aria-controls="userOptions" aria-haspopup="true" onClick={() => setOpenOptions(!openOptions)}>{Cookies.get("user")}</Button>
        <Dialog
        open={openOptions}
        onClose={() => setOpenOptions(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className="text-center">
        <DialogTitle>Menu</DialogTitle>
        <DialogContent>
            <List>
            <ListItem style={{'cursor': 'pointer'}} onClick={() => {userProfile(); setOpenOptions(false)}}>Môj profil</ListItem>
            <ListItem style={{'cursor': 'pointer'}} onClick={() => {logout(); setOpenOptions(false)}}>Odhlásenie</ListItem>
            </List>
        </DialogContent>
        </Box>
      </Dialog>
        </Box> :
        <Button variant="outlined" color="info" onClick={() => openForm(!form)}>Prihlásenie / registrácia</Button>}   
        <Modal open={profile} onClose={() => userProfile(false)}>
        <Card style={{'overflowY': 'scroll', 'overflowX': 'auto', 'height': '90%', 'marginTop': '2%'}} className="text-center text-dark p-5 border container border-white" id="card">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={3} xl={3} id="card" className="bg-white border border-dark py-5" >
                    <Badge color="error" badgeContent={<i className="material-icons" variant="dot" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>edit</i>}>
                    <Avatar className="mx-auto my-5" sx={{width: 86, height: 86}} src={avatar == null ? "/images/alien.png" : 'avatar'} />
                    </Badge>
                    <Typography variant="h5">{Cookies.get("user")}</Typography>
                    <Typography variant="h6">{userData.is_admin ? 'admin': 'užívatel'}</Typography>
                    <Typography>Užívatel: {userData.name} {userData.surname}</Typography>
                    <Typography>Vek: {userData.age}</Typography>
                    <Typography>E-mail: {userData.e_mail}</Typography>
                    <Typography>Tel. č:{userData.phone}</Typography>
                    <Typography>Krajina: {userData.country}</Typography>
                    <Typography>Mesto: {userData.city}</Typography>
                    <Typography>Adresa: {userData.street}</Typography>
                    </Grid>
                <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                <BottomNavigation sx={{ width: 700 }} className="mx-auto border border-dark p-3 bg-white" id="card" style={{'marginTop': 30}} value={portfolioForm} onChange={setportfolioForm}>
      <BottomNavigationAction className="text-dark"
        label="Aktivity vo fóre"
        value="forumItems"
        icon={<i className="material-icons">forum</i>}
      />
      <BottomNavigationAction className="text-dark"
        label="Objednávky"
        value="orders"
        icon={<i className="material-icons">local_shipping</i>}
      />
      <BottomNavigationAction className="text-dark"
        label="Napísané články"
        value="usersArticles"
        icon={<i className="material-icons">auto_stories</i>}
      />
      <BottomNavigationAction className="text-dark"
        label="Oblúbené články"
        value="favArticles"
        icon={<i className="material-icons">auto_stories</i>}
      />
      <BottomNavigationAction className="text-dark"
        label="Aktivity"
        value="activities"
        icon={<i className="material-icons">person_add</i>}
      />
    </BottomNavigation>
                {(portfolioForm === 'forumItems') ?
                    <Paper  className="card p-5 text-center bg-white" id="card">
                        <Typography variant="h4">Aktivity vo fore</Typography>
            <List>
              {forumItems.map((fItem, index) => 
                <ListItem style={{'cursor': 'pointer'}} key={index}>
                  <ListItemAvatar>
                      <Avatar>
                      <i className="material-icons">forum</i>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={fItem.title ? fItem.title : 'žiadne aktivity vo fóre'}
                  />
                </ListItem>)}
            </List>
                        </Paper> : (portfolioForm === 'orders') ?
                    <Paper  className="card p-5" id="card">
                                <Typography variant="h4">Objednávky</Typography>
                                {orders.map((order, index) => <Grid key={index} container>
                                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>Vytvorená: {new Date(order.order_created).getDate()}.{new Date(order.order_created).getMonth()+1}.{new Date(order.order_created).getFullYear()}</Grid>
                                    <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>Stav: {order.status}</Grid></Grid>)}
                            </Paper> : (portfolioForm === 'usersArticles') ?
                    <Paper  className="card p-5" id="card">
                                <Typography variant="h4">Články</Typography>
                                    <List>
              {articles.map((article, index) =>
                <ListItem className="text-white" style={{'cursor': 'pointer'}} key={index}>
                  <ListItemAvatar>
                      <Avatar>
                      <i className="material-icons">auto_stories</i>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={article.title}
                    secondary={article.likes}
                  />
                </ListItem>,
              )}
            </List>
                            </Paper>
                    : (portfolioForm === 'favArticles') ?
                    <Paper  className="card p-5" id="card">
                                <Typography variant="h4">Oblúbené články</Typography>
                                
                            </Paper> :
                    <Paper  className="card p-5" id="card">
                                <Typography variant="h4">Aktivity</Typography>
                                <Box class="message is-info mt-3">
                                    <Typography class="message-body">Údaje sa synchronizujú prostredníctvom aplikácie strava. Táto služba bude dostupná od 1.10.2022</Typography>
                                </Box>
                            </Paper>}
                    </Grid></Grid></Card></Modal>
            <Modal open={form} onClose={() => openForm(!form)}>
        <Container>
        <BottomNavigation sx={{ width: 500 }} className="mx-auto border border-dark" id="card" style={{'marginTop': 100, 'transform': 'scale(1.1)'}} value={selectedForm} onChange={ChangeForm}>
      <BottomNavigationAction className="text-white"
        label="Prihlásenie"
        value="SignUp"
        icon={<i className="material-icons">person</i>}
      />
      <BottomNavigationAction className="text-white"
        label="Registrácia"
        value="SignIn"
        icon={<i className="material-icons">person_add</i>}
      />
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
                <Button type="submit" variant="contained" color="primary" onClick={(e) => signUp(e.preventDefault())}>Prihlásiť</Button>
            </Card>}
            <h1>{user}</h1>
        </Container>
    </Modal></Box>);
}