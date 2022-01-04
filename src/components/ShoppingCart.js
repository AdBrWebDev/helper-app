import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import '../App.css'

const Cart = () => {
    const [form, openForm] = useState(false)
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
            {form && <Box id="dark-background" className="mb-5 mx-auto text-center">
            <Button variant="contained" color="error" onClick={() => openForm(!form)}>x</Button>
            <Card id="card" className="mt-4 p-5 container">
            {cart.map((cart, index) => <Card key={index} className="card text-white p-2 bg-dark">
                <Typography>{cart.title}</Typography> 
                <Typography>{cart.price}</Typography>
                <Typography>{cart.quantity}</Typography>
                <Button variant="contained" color="error" onClick={() => dispatch({type: "REMOVE", payload: cart})}>remove</Button>
                <Button variant="contained" color="success" onClick={()=> dispatch({type: "INCREASE", payload: cart})}>+</Button>
                <Button variant="contained" color="success" onClick={()=> {
                    (cart.quantity > 1) ? dispatch({type: "DECREASE", payload: cart}) : dispatch({type: "REMOVE", payload: cart}) 
                }}>-</Button>
                </Card>)}
                <Typography className="text-white" variant="h5">Cena spolu: {total} €</Typography>
                </Card></Box>}
        </Box>
    )
}

export default Cart;