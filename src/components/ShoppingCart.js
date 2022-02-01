import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import '../App.css'
import Divider from '@mui/material/Divider'
import Modal from '@mui/material/Modal'
import {Radio} from 'antd'
import Axios from 'axios'
import Cookies from 'js-cookie'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Cart = () => {
    const [form, openForm] = useState(false)
    const [payment, setPayment] = useState('')
    const [delivery, setDelivery] = useState(0)
    const [open, setOpen] = useState(false);
    const cart = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(cart)
    const addition = (acc, currentvalue) => {
       return acc+currentvalue.price*currentvalue.quantity;
    }
    const total = cart.reduce(addition, 0);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const sendOrder = () => {

        const specialId = new Date() + Cookies.get("id").toString()
        Axios.post('http://localhost:3001/createOrder', {id_user: Cookies.get("id"), created: new Date(), specialId: specialId, delivery: new Date(), payment: payment, shipping: delivery, total: total})
        for(let o = 0; o < cart.length; o++){
            Axios.post('http://localhost:3001/createOrderProducts', {specialId: specialId, id_product: cart[o].id_product, contain: cart[o].quantity, title: cart[o].title, image: cart[o].image})
        }
        cart.splice(0,cart.length)
        setTimeout(() => openForm(false), 5000)
    }

    return(
        <Box>
            <Button onClick={() => openForm(!form)}><span className="material-icons text-white">shopping_cart</span></Button>
            <Modal open={form} onClose={() => openForm(false)}>
            <Card id="card" className="mt-4 p-5 container text-center mt-5" style={{'height': '90%', 'overflowY': 'scroll'}}>
            <Typography variant="h3" className="text-white">Nákupný košík</Typography>
            <Divider className="my-3" />
            { total > 0 ?
            cart.map((cart, index) => <Card key={index} id="card" className="card p-2">
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} xl={6} lg={6} className="d-flex my-auto p-5">
                    <img style={{'height': '80px'}} src={`images/${cart.image}`} alt={cart.title} />
                    <Typography variant="h6" className="mx-5 my-auto mx-auto">{cart.title}</Typography> 
                    <Typography variant="h6" className="mx-5 my-auto">Cena: {cart.price} €</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} xl={6} lg={6} className="d-flex my-auto mx-auto">
                <Box className="d-flex mx-auto"><Box><Button className="mx-5" variant="outlined" color="success" onClick={()=> dispatch({type: "INCREASE", payload: cart})}>+</Button></Box>
                <Typography className="my-auto">{cart.quantity}</Typography>
                <Box><Button className="mx-5" variant="outlined" color="error" onClick={()=> {
                    (cart.quantity > 1) ? dispatch({type: "DECREASE", payload: cart}) : dispatch({type: "REMOVE", payload: cart}) 
                }}>-</Button></Box></Box>
                <Button className="mx-5 my-auto" variant="outlined" color="error" onClick={() => dispatch({type: "REMOVE", payload: cart})}><i className="material-icons">delete_forever</i></Button>
                </Grid></Grid>
                </Card>): <Box className="text-white"><i className="material-icons" style={{'transform': 'scale(7)', 'marginTop': 150, 'marginBottom': 80}}>shopping_cart</i><Typography variant="h3">Košík je prázdny</Typography></Box>}
                {total < 1 ? null : <Box>
                <Box>
                    <Typography variant="h3" className="text-white">Doprava a platba</Typography>
                    <Typography className="text-white">Vyberte spôsob doručenia</Typography>
                    <Radio.Group onChange={(e) => setDelivery(e.target.value)} value={delivery}>
                        <Radio className="text-white h3 mx-5" value={4.90}>GLS - 4,90</Radio>
                        <Radio className="text-white h3 mx-5" value={3.80}>Slovenská pošta - 3,80</Radio>
                    </Radio.Group>  
                </Box>
                <Box>
                <Typography className="text-white">Vyberte spôsob platby</Typography>
                    <Radio.Group onChange={(e) => setPayment(e.target.value)} value={payment}>
                        <Radio className="text-white h3 mx-5" value={'Paypal'}>Paypal</Radio>
                        <Radio className="text-white h3 mx-5" value={'Prevod'}>Prevodom</Radio>
                        <Radio className="text-white h3 mx-5" value={'Pri dobierke'}>Pri dobierke</Radio>
                    </Radio.Group>
                </Box>
                <Divider className="my-5" /><Typography className="text-white my-4" variant="h5">Spôsob platby: {payment}</Typography>
                <Typography className="text-white my-4" variant="h5">Cena spolu: {(total+delivery).toFixed(2)} €</Typography>
                <Typography variant="h5" className="text-white mb-3">Dokončiť objednávku s povinnosťou platby</Typography>
                <Button disabled={total < 1} variant="contained" color="success" onClick={() => {sendOrder(); handleClick()}}>Dokončiť objednávku</Button></Box>}
                <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <Typography>Objednávka bola odoslaná</Typography>
        </Alert>
      </Snackbar>
                </Card>
                </Modal></Box>
    )
}

export default Cart;