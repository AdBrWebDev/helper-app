import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AppInDevices from '../../components/AppInDevices'

export default function MainPage(){
    return(<Box className="w-100">
        <img src="/images/cyclingMain.jpg" className="w-100" alt="cycling" />
        <AppInDevices />
    </Box>)
}