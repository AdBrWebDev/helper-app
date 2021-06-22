import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../App.css';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer(){
    let status;
    window.addEventListener('offline', () => CheckStatus())
    window.addEventListener('online', () => CheckStatus())
    function CheckStatus(){
        if(navigator.onLine){
            status = <Box class='bg-success py-1'><i className="material-icons my-auto mx-1">wifi</i>online</Box>;
        }else{
            status = <Box class='bg-danger'><i className="material-icons my-auto">wifi_off</i>offline</Box>;;
        }
        return status;
    }

    return(
        <Box className="bg-dark">
            <Typography className="text-center text-white">{CheckStatus()}</Typography>
            <Box className="p-5">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container className="text-center">
                        <Grid item xs={6}>
                            <Typography className="text-white mb-3" variant="h4">Sleduj nás na</Typography>
                            <Button id="footer-icons" variant="outlined" className="text-info"><i className="material-icons">facebook</i></Button>
                            <Button id="footer-icons" variant="outlined" className="text-white"><TwitterIcon /></Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="text-white mb-3" variant="h4">Appka aj v mobile</Typography>
                            <Button title="stiahnuť" id="footer-icons" variant="outlined" className="text-white my-auto" disabled="true"><i className="material-icons">shop</i></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </Box>
    )
}