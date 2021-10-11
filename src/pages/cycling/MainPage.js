import Box from '@mui/material/Box'
import AppInDevices from '../../components/AppInDevices'
import MainImageOfPage from '../../components/MainImageOfPage'

export default function MainPage(){
    return(<Box className="w-100">
        <MainImageOfPage img="/images/cyclingMain.jpg" text="" />
        <AppInDevices />
    </Box>)
}