import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function MainImageOfPage(props){
    return(<Box>
        <img className='w-100' src={props.img} alt={props.title} />
        <Typography style={{color: "white", position: 'absolute', top: "45%"}} className="text-center" variant="h1">{props.text}</Typography>
        </Box>)
}