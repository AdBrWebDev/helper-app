import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function MainImageOfPage(props){
    return(<Box className="text-center">
        {<img className='w-100' src={`/images/${props.img}`} alt={props.title} />}
        <Typography style={{color: "white", position: 'absolute', top: "45%"}} className="text-center mx-auto w-75" variant="h3">{props.text}</Typography>
        </Box>)
}