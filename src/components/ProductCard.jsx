import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ProductCard(props){
    return(<Box>
        <Box className="card bg-dark border border-info border-2" id="card" key={props.index}>
                    <Box className="card-image">
                        <figure className="image is 4by3 m-2">
                            <img style={{"maxHeight": 300}} src={props.img} alt={props.title} />
                        </figure>
                    </Box>
                    <Box className="card-content text-center">
                        <Box className="content">
                            <Typography className="text-white" variant="h3">{props.title}</Typography>
                            <Typography className="text-white" variant="h4">{props.price} €</Typography>
                            <Button variant="outlined" color="info" className="mr-1"><i className="material-icons">shopping_cart</i></Button>
                            <Button variant="outlined" color="info" className="ml-1"><i className="material-icons">info</i></Button>
                        </Box>
                    </Box>
                </Box>
    </Box>);
}