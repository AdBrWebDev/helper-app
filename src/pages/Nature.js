import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import React, {useState, lazy} from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../App.css'
import Axios from 'axios';
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import {motion} from 'framer-motion'
const Sections = lazy(() => import('../components/Sections')) 
const MainImageOfPage = lazy(() => import('../components/MainImageOfPage'))

export default function Nature(){
    const [form, openForm] = useState(false);
    const [signs, setSigns] = useState([]);
    const [error, showError] = useState(false)
    const [user, setUser] = useState('')

    function Signs() {
        Axios.get('http://localhost:3001/signs').then(result => setSigns(result.data[0].sum)
        )}

    Signs()

    const sections = [
        {img: 'saveEnergy.png', text: 'Hneď prvý bod sa zdá byť celkom jednoduchý, ale aj tak máme problém ho dodržiavať. Hmm...ani ja nie som dobrým príkladom. Pozerám, že aj u mňa v predsieni sa zbytočne svieti. Neváham sa postaviť a vypínam svetlo.Je jeseň, zima klope na dvere a stmieva sa oveľa skôr. Preto v tomto období míňame elektriny viac. V lete toľko svetla nepotrebujeme, ale zase spotrebujeme energiu na iné - keď kosíme trávu, keď sa chceme schladiť - pustíme si ventilátor, alebo keď čistíme bazén, atď. Preto treba aspoň dávať pozor a elektrinu nenechať prúdiť, keď netreba... no každý musí začať od seba.', title: 'Šetri elektrickou energiou'},
        {img: 'rubish.png', text: 'Aj tebe sa stáva, že dokým vyhodíš niečo do kontajnera, rozmýšľaš: „Kam toto a kam tamto vlastne patrí?“ Možno také plastové fľaše tiež premýšľajú v obchode, čo s nimi bude, ak ich niekto kúpi, ale vôbec netuší, kam po vypití vody patria. Ja som natrafila na tento vtipný EkoKomiks, verím, že pobaví aj teba.', title: 'Trieď odpad'},
        {img: 'paper.png', text: 'Ak by celý svet spotreboval toľko papiera v priemere na obyvateľa ako Nemecko za posledný rok, tak by len Číne nestačila celá dnešná svetová produkcia papiera. To je sila, však? Skús preto vždy predtým ako zahodíš papier do koša popremýšľať, či je využitý na 100%.', title: 'Používaj papier z oboch strán'},
        {img: 'waterSaving.png', text: 'Nie je to myslené, že by sme teraz mali piť menej vody alebo nepiť vôbec. To určite nie. Skôr by sme si mali uvedomiť, koľko hektolitrov vody denne pretečie zbytočne z kohútikov v kuchyni, v kúpeľni, na záhrade, či v hoteli, alebo na športoviskách, atď.', title: 'Šetri vodou'},
        {img: 'ecoBag.png', text: 'Rozmýšľala si niekedy nad tým, koľkokrát týždenne ideš do obchodu? Iba na obyčajný nákup potravín. Ak počítam, že v priemere by sme chodievali na nákup 2x do týždňa a použili iba jednu nákupnú tašku, tak jeden človek minie za jeden rok 106 igelitových tašiek. Kde sú ešte občasné nákupy oblečenia. Sviatky. Darčeky. Vianoce. A všetky tie príležitosti, kedy si domov nesieme opäť ďalšiu tašku. Dokonca sme ochotní si za ňu zaplatiť. Každý každučký raz, keď nemáme žiadnu tašku poruke. A to sa bavíme zatiaľ len o igelitových taškách.', title: 'Nos na nákupy vlastnú tašku'},
        {img: 'ecoRide.png', text: 'Ak ti zdravie slúži, nemáš problémy s končatinami a ani do práce to nemáš ďaleko, zameň auto aspoň raz za čas za chôdzu. Neváhaj tak urobiť. Chôdza je liek pre naše telo i myseľ. Daj si cieľ, že každý deň prejdeš aspoň 8 000 - 10 000 krokov. Samozrejme, je iné ak máš prácu, v ktorej celý deň stojíš alebo si stále v pohybe, ako keď máš sedavé zamestnanie. Ani jeden extrém však nie je dobrý.Ak máš do práce ďaleko, tak vezmi bicykel a keď ti počasie praje, tak to využi. Okysličíš svoj mozog a budeš sa cítiť perfektne. Pri chôdzi alebo bicyklovaní, je to rovnako ako pri športe. ', title: 'Menej jazdi autom, používaj bicykel'},
        {img: 'donateClothes.png', text: 'Zvyknem dvakrát do roka triediť svoj šatník. Pred letom a pred zimou. Ty koľkokrát? Čo robíš s vecami, ktoré už nechceš? Vyhodíš ich len tak do kontajnera? Alebo ti je ľúto ich vyhodiť a škrečkuješ ich doma až dovtedy, pokiaľ tvoja skriňa nepraská od preplnenia?', title: 'Daruj to, čo nepotrebuješ'},
        {img: 'bottle.png', text: 'Plast je úplne najväčšou hrozbou pre našu planétu. Oceány sú plné plastového odpadu. Ročne sa do neho vyhodí viac ako 9 miliónov ton plastu. Pôsobením rôznych vplyvov ako je slnko, vlny, či baktérie sa plast mení na malé častice. Živočíchy, ktoré v oceánoch žijú si tieto rozdrobené časti plastu zamieňajú s potravou. Ryby, ktoré potom my konzumujeme obsahujú v sebe plast.', title: 'Investuj do vlastnej fľašky na vodu či kávu'},
        {img: 'meat.png', text: 'Niekomu z vás sa to bude zdať zvláštne, že: „Jedz menej mäsa, aby si zachránila planétu Zem.“ To čo je? Čo má záchrana planéty spoločné s jedením či nejedením mäsa? Veď to je každého osobná vec a niekto je vegetarián alebo vegán a iný zase nie. Áno, je to slobodné rozhodnutie každého z nás, no niektoré fakty, ktoré ti teraz prezradím, možno zmenia tvoj názor.To čo ješ má veľký vplyv na tvoje zdravie a na prostredie, v ktorom žiješ. Položila si si niekedy otázky... Aké to je mäso, ktoré konzumujem? Aký je to chov, odkiaľ mám to mäso?', title: 'Jedz menej mäsa'},
        {img: 'waste.png', text: 'Je tvoja chladnička plná každý týždeň? Ale aj tvoj smetný kôš je často plný? Taký je väčšinou obraz slovenských domácností. V obchodoch nás vyzývajú rôznymi zľavami a akciami k čo najväčšiemu nákupu a veľakrát sa stane, že kúpime niečo, čo ani nestihneme skonzumovať. Končí to kde? No, v smetnom koši.Plytváme časom, peniazmi, jedlom a ešte aj odpadom, ktorý je v tomto prípade zbytočný a len preto, že nám v obchode „jedia oči“ a hádžeme do košíka všetko zaradom.', title: 'Neplytvaj jedlom'}
    ]

    const goals = ['36% zníženie tažby dreva', 'Vysadba 17 miliónov stromov ročne', '10% zníženie lovu zveri', 'Viac ako 100 km nových cyklotrás každý rok', 'Zvýšenie dotácii pre kupu elektromobilov', '10% zníženie ťažby nerastných surovín', 'zrušenie uhoľných elektrární']

    useEffect(() => {
        if(Cookies.get('id')){
        Axios.post('http://localhost:3001/natureUser', {user: Cookies.get('id')}).then((response) => {
                    setUser(response.data[0].id_user) 
            })}
    })

    const submitNatureForm = () => {
        if(!Cookies.get("id")){
            showError(true)
            setTimeout(() => showError(false), 6000)
        }
        else{
            let date = new Date()
            Axios.post('http://localhost:3001/natureForm', {user: Cookies.get('id'), date: date})}
            openForm(false)  
    }
    return(<motion.div initial={{y: 200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
        <Box className="text-white text-center">
            <MainImageOfPage id="mainImg" img="forest.jpg" text="Pomôž nám ochrániť prírodu" href="" />
            <Box className='level is-mobile mt-5 py-3' data-aos="fade-up" data-aos-offset="200">
                <Box className="level-item has-text-centered">
                     <Box>
                         <Typography className="heading">Počet podpisov</Typography>
                         <Typography variant="h2" className="title text-white">{signs}</Typography>
                     </Box>
                </Box>
                <Box className="level-item has-text-centered">
                     <Box>
                         <Typography className="heading">Chývajúce podpisy</Typography>
                         <Typography variant="h2" className="title text-white">{signs < 800000 ? (800000-signs).toString() : 'Dosiahli sme cieľ'}</Typography>
                     </Box>
                </Box>
            </Box>
            <Container>
                <Typography variant="h3" data-aos="fade-up">Aké sú naše ciele</Typography>
                <Card className="border border-success bg-transparent text-white py-3 my-5" data-aos="fade-up" data-aos-offset="200" id="nature-border">
                    <Box id="section" className="my-5 py-1">
                        {goals.map((goal, index) => <Typography data-aos="fade-up" variant="h6" key={index} className="py-3">{goal}</Typography>)}
                    </Box>
                    <Divider className="m-5" />
                    <Typography data-aos="flip-down" variant="h5" className="py-2">Chceš nám pomôcť? {(user === parseInt(Cookies.get("id"))) ? <Box class="message is-primary my-3 w-75 mx-auto">
  <Typography class="message-body">
      Ďakujeme za tvoju podporu <i className="material-icons text-success">done</i>
  </Typography>
</Box> : <Button onClick={() => openForm(!form)} className="ml-5"variant="contained" color="success"><i className="material-icons">park</i></Button>}</Typography>
                    <Typography className="mt-4" style={{'opacity': .3, 'fontSize': '12px'}}>Platí pre územie slovenskej republiky</Typography>
                </Card>
                <Modal open={form} onClose={() => openForm(!form)}>
                <motion.div className="container h-100" initial={{y: -200, opacity: 0, transform: "scale(0)"}} animate={{y: 0, opacity: 1, transform: "scale(1)"}} transition={{default: {duration: 1}}}>
                <Card className="my-5 container p-5 bg-dark border text-center border-success" id='nature-border'>
                <Box className="w-25 h-25 mx-auto my-3">
                    <img src="/images/sEarth.png" alt="save nature" />
                    </Box>
                    <Typography variant="h5" color="white">Pomôcť zelenšej budúcnosti, môžeš aj ty. Stačí jeden klik.</Typography>
                    <Button variant='outlined' color='success' className="my-4" onClick={submitNatureForm}>Podpisať</Button>
                    {error && <Box class="message is-danger">
  <Typography class="message-body">
    Pre úspešné podpísanie sa musíte prihlásiť!
  </Typography>
</Box>}
                </Card></motion.div></Modal>
            </Container>
            <Typography variant="h3" className="my-3 mt-5 pt-5" data-aos="fade-up">Top 10 ako pomôcť prírode</Typography>
            <Box>
                {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} text={section.text} />)}
            </Box>
        </Box></motion.div>
    )
}