import {useSelector, useDispatch} from 'react-redux'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

const Cart = () => {
    const cart = useSelector((state) => state);
    console.log(cart)
    const dispatch = useDispatch();

    return(
        <Box>
            {cart.map((cart, index) => <Card key={index} className="card text-white p-2 bg-dark">
                <Typography>{cart.title}</Typography> 
                <Typography>{cart.price}</Typography>
                <Button variant="contained" color="error" onClick={() => dispatch({type: "REMOVE", payload: cart})}>remove</Button>
                <Button variant="contained" color="success">+</Button>
                <Button variant="contained" color="success">-</Button>
                </Card>)}
        </Box>
    )
}

export default Cart;