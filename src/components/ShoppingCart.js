import {useState} from 'react'
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

const Cart = () => {
    const [form, openForm] = useState(false)
    const [payment, setPayment] = useState('')
    const [delivery, setDelivery] = useState(0)
    const cart = useSelector((state) => state);
    console.log(cart)
    const dispatch = useDispatch();
    const addition = (acc, currentvalue) => {
       return acc+currentvalue.price*currentvalue.quantity;
    }
    const total = cart.reduce(addition, 0);
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
                    <Typography className="mx-5">{cart.title}</Typography> 
                    <Typography>Cena: {cart.price} €</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} xl={6} lg={6} className="d-flex my-auto mx-auto">
                <Box><Box><Button variant="contained" color="success" onClick={()=> dispatch({type: "INCREASE", payload: cart})}>+</Button></Box>
                <Typography>{cart.quantity}</Typography>
                <Box><Button variant="contained" color="success" onClick={()=> {
                    (cart.quantity > 1) ? dispatch({type: "DECREASE", payload: cart}) : dispatch({type: "REMOVE", payload: cart}) 
                }}>-</Button></Box></Box>
                <Box><Button className="mx-5 my-auto" variant="contained" color="error" onClick={() => dispatch({type: "REMOVE", payload: cart})}><i className="material-icons">delete_forever</i></Button></Box>
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
                        <Radio className="text-white h3 mx-5" value={'Hotovosť'}>Hotovosť</Radio>
                    </Radio.Group>
                    {payment}
                </Box>
                <Divider className="my-5" /><Typography className="text-white my-4" variant="h5">Cena spolu: {(total+delivery).toFixed(2)} €</Typography>
                <Typography variant="h5" className="text-white">Dokončiť objednávku s povinnosťou platby</Typography>
                <Button disabled={total < 1} variant="contained" color="success">Dokončiť objednávku</Button></Box>}
                </Card></Modal></Box>
    )
}

export default Cart;