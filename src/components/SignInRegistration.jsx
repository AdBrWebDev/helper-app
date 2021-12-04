import React, {useState} from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import '../App.css'
import Axios from 'axios'
import Button from '@mui/material/Button'

export default function SignInRegistration(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [age, setAge] = useState(0)
    const [phone, setPhone] = useState('')
    const [e_mail, setEmail] = useState('')

    const submit = () => {
        Axios.post('http://localhost:3001/api/insert', {name: name, surname: surname, phone: phone, country: country, city: city, street: street, age: age, e_mail: e_mail}).then(() => {alert("insert successful")})
    }

    return(<Box id="dark-background">
        <Container>
            <Card>
                <Typography>Registrácia</Typography>
                <Box component="form" className="text-center mx-auto">
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setName(e.target.value)}} label="meno" name="name" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setSurname(e.target.value)}} label="priezvisko" name="surname" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setPhone(e.target.value)}} label="telefon" name="phone" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setCountry(e.target.value)}} label="krajina" name="country" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setCity(e.target.value)}} label="mesto" name="city" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setStreet(e.target.value)}} label="ulica" name="street" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setAge(e.target.value)}} label="roky" name="age" />
                <TextField id="outlined-basic" variant="outlined" onChange={(e) => {setEmail(e.target.value)}} label="e-mail" name="e_mail" />
                <Button type="submit" variant="outlined" color="primary" onClick={() => submit()}>Registrovať</Button>
                </Box>
            </Card>
        </Container>
    </Box>);
}