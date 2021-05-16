import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Footer(){
    let status;
    window.addEventListener('offline', () => CheckStatus())
    window.addEventListener('online', () => CheckStatus())
    function CheckStatus(){
        if(navigator.onLine){
            status = <Box class='bg-success py-1'><i className="material-icons">wifi</i>online</Box>;
        }else{
            status = <Box class='bg-danger'><i className="material-icons">wifi_off</i>offline</Box>;;
        }
        return status;
    }

    return(
        <Box>
            <Typography className="text-center text-white">{CheckStatus()}</Typography>
        </Box>
    )
}