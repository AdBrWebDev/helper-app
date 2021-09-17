import Box from '@mui/material/Box'
import AppInDevices from '../../components/AppInDevices'

export default function MainPage(){
    return(<Box className="w-100">
        <img src="/images/cyclingMain.jpg" className="w-100" alt="cycling" />
        <AppInDevices />
    </Box>)
}