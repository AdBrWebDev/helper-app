import {useSelector, useDispatch} from 'react-redux'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

const Cart = () => {
    const cart = useSelector((state) => state);
    console.log(cart)
    const dispatch = useDispatch();
    const addition = (acc, currentvalue) => {
       return acc+currentvalue.price*currentvalue.quantity;
    }
    const total = cart.reduce(addition, 0);

    return(
        <Box>
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
        </Box>
    )
}

export default Cart;