import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {gsap, TimelineLite, Power3} from 'gsap';
import React, {useEffect, useState, lazy} from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../App.css'
const Sections = lazy(() => import('../components/Sections')) 

export default function Nature(){
    const [form, openForm] = useState(false);

    const sections = [
        {img: '/images/jacket.jpg', text: 'Hneď prvý bod sa zdá byť celkom jednoduchý, ale aj tak máme problém ho dodržiavať. Hmm...ani ja nie som dobrým príkladom. Pozerám, že aj u mňa v predsieni sa zbytočne svieti. Neváham sa postaviť a vypínam svetlo.Je jeseň, zima klope na dvere a stmieva sa oveľa skôr. Preto v tomto období míňame elektriny viac. V lete toľko svetla nepotrebujeme, ale zase spotrebujeme energiu na iné - keď kosíme trávu, keď sa chceme schladiť - pustíme si ventilátor, alebo keď čistíme bazén, atď. Preto treba aspoň dávať pozor a elektrinu nenechať prúdiť, keď netreba... no každý musí začať od seba.', title: 'Šetri elektrickou energiou'},
        {img: '/images/jacket.jpg', text: 'Aj tebe sa stáva, že dokým vyhodíš niečo do kontajnera, rozmýšľaš: „Kam toto a kam tamto vlastne patrí?“ Možno také plastové fľaše tiež premýšľajú v obchode, čo s nimi bude, ak ich niekto kúpi, ale vôbec netuší, kam po vypití vody patria. Ja som natrafila na tento vtipný EkoKomiks, verím, že pobaví aj teba.', title: 'Trieď odpad'},
        {img: '/images/jacket.jpg', text: 'Ak by celý svet spotreboval toľko papiera v priemere na obyvateľa ako Nemecko za posledný rok, tak by len Číne nestačila celá dnešná svetová produkcia papiera. To je sila, však? Skús preto vždy predtým ako zahodíš papier do koša popremýšľať, či je využitý na 100%.', title: 'Používaj papier z oboch strán'},
        {img: '/images/jacket.jpg', text: 'Nie je to myslené, že by sme teraz mali piť menej vody alebo nepiť vôbec. To určite nie. Skôr by sme si mali uvedomiť, koľko hektolitrov vody denne pretečie zbytočne z kohútikov v kuchyni, v kúpeľni, na záhrade, či v hoteli, alebo na športoviskách, atď.', title: 'Šetri vodou'},
        {img: '/images/jacket.jpg', text: 'Rozmýšľala si niekedy nad tým, koľkokrát týždenne ideš do obchodu? Iba na obyčajný nákup potravín. Ak počítam, že v priemere by sme chodievali na nákup 2x do týždňa a použili iba jednu nákupnú tašku, tak jeden človek minie za jeden rok 106 igelitových tašiek. Kde sú ešte občasné nákupy oblečenia. Sviatky. Darčeky. Vianoce. A všetky tie príležitosti, kedy si domov nesieme opäť ďalšiu tašku. Dokonca sme ochotní si za ňu zaplatiť. Každý každučký raz, keď nemáme žiadnu tašku poruke. A to sa bavíme zatiaľ len o igelitových taškách.', title: 'Nos na nákupy vlastnú tašku'},
        {img: '/images/jacket.jpg', text: 'Ak ti zdravie slúži, nemáš problémy s končatinami a ani do práce to nemáš ďaleko, zameň auto aspoň raz za čas za chôdzu. Neváhaj tak urobiť. Chôdza je liek pre naše telo i myseľ. Daj si cieľ, že každý deň prejdeš aspoň 8 000 - 10 000 krokov. Samozrejme, je iné ak máš prácu, v ktorej celý deň stojíš alebo si stále v pohybe, ako keď máš sedavé zamestnanie. Ani jeden extrém však nie je dobrý.Ak máš do práce ďaleko, tak vezmi bicykel a keď ti počasie praje, tak to využi. Okysličíš svoj mozog a budeš sa cítiť perfektne. Pri chôdzi alebo bicyklovaní, je to rovnako ako pri športe. ', title: 'Menej jazdi autom, používaj bicykel'},
        {img: '/images/jacket.jpg', text: 'Zvyknem dvakrát do roka triediť svoj šatník. Pred letom a pred zimou. Ty koľkokrát? Čo robíš s vecami, ktoré už nechceš? Vyhodíš ich len tak do kontajnera? Alebo ti je ľúto ich vyhodiť a škrečkuješ ich doma až dovtedy, pokiaľ tvoja skriňa nepraská od preplnenia?', title: 'Daruj to, čo nepotrebuješ'},
        {img: '/images/jacket.jpg', text: 'Plast je úplne najväčšou hrozbou pre našu planétu. Oceány sú plné plastového odpadu. Ročne sa do neho vyhodí viac ako 9 miliónov ton plastu. Pôsobením rôznych vplyvov ako je slnko, vlny, či baktérie sa plast mení na malé častice. Živočíchy, ktoré v oceánoch žijú si tieto rozdrobené časti plastu zamieňajú s potravou. Ryby, ktoré potom my konzumujeme obsahujú v sebe plast.', title: 'Investuj do vlastnej fľašky na vodu či kávu'},
        {img: '/images/jacket.jpg', text: 'Niekomu z vás sa to bude zdať zvláštne, že: „Jedz menej mäsa, aby si zachránila planétu Zem.“ To čo je? Čo má záchrana planéty spoločné s jedením či nejedením mäsa? Veď to je každého osobná vec a niekto je vegetarián alebo vegán a iný zase nie. Áno, je to slobodné rozhodnutie každého z nás, no niektoré fakty, ktoré ti teraz prezradím, možno zmenia tvoj názor.To čo ješ má veľký vplyv na tvoje zdravie a na prostredie, v ktorom žiješ. Položila si si niekedy otázky... Aké to je mäso, ktoré konzumujem? Aký je to chov, odkiaľ mám to mäso?', title: 'Jedz menej mäsa'},
        {img: '/images/jacket.jpg', text: 'Je tvoja chladnička plná každý týždeň? Ale aj tvoj smetný kôš je často plný? Taký je väčšinou obraz slovenských domácností. V obchodoch nás vyzývajú rôznymi zľavami a akciami k čo najväčšiemu nákupu a veľakrát sa stane, že kúpime niečo, čo ani nestihneme skonzumovať. Končí to kde? No, v smetnom koši.Plytváme časom, peniazmi, jedlom a ešte aj odpadom, ktorý je v tomto prípade zbytočný a len preto, že nám v obchode „jedia oči“ a hádžeme do košíka všetko zaradom.', title: 'Neplytvaj jedlom'}
    ]

    let tl = new TimelineLite();

    useEffect(() => {
        tl.from('img', {y: 200, opacity: 0, ease: Power3.zoomIn, delay: .5});
    })

    return(
        <Box className="text-white text-center">
            <Box>
                <img className='w-100' src='/images/forest.jpg' alt='forest' />
                <Typography style={{color: "white", position: 'absolute', top: "45%"}} className="text-center" variant="h1">Pomôž nám ochrániť prírodu</Typography>
            </Box>
            <Box className='level is-mobile mt-5 py-3'>
                <Box className="level-item has-text-centered">
                     <Box>
                         <Typography className="heading">Je nás už</Typography>
                         <Typography variant="h2" className="title text-white">50</Typography>
                     </Box>
                </Box>
                <Box className="level-item has-text-centered">
                     <Box>
                         <Typography className="heading">Chývajúce podpisy</Typography>
                         <Typography variant="h2" className="title text-white">799 950</Typography>
                     </Box>
                </Box>
            </Box>
            <Container>
                <Typography variant="h3">Aké sú naše ciele</Typography>
                <Card className="border border-success bg-transparent text-white my-5 p-5" id="nature-border">
                    <Typography variant="h6" className="py-3 mt-4">36% zníženie tažby dreva</Typography>
                    <Typography variant="h6" className="py-3">Vysadenie 17 miliónov stromov ročne</Typography>
                    <Typography variant="h6" className="py-3">10% zníženie lovu zveri</Typography>
                    <Typography variant="h6" className="py-3">Viac ako 100 km nových cyklotrás každý rok</Typography>
                    <Typography variant="h6" className="py-3">Zvýšenie dotácii pre kupu elektromobilov</Typography>
                    <Typography variant="h6" className="py-3 mb-5">10% zníženie ťažby nerastných surovín</Typography>
                    <Divider className="my-5" />
                    <Typography variant="h5" className="py-2">Chceš nám pomôcť? <Button onClick={() => openForm(!form)} className="ml-5"variant="outlined" color="success"><i className="material-icons">park</i></Button></Typography>
                    <Typography className="mt-4" style={{'opacity': .3, 'fontSize': '12px'}}>Platí pre územie slovenskej republiky</Typography>
                </Card>
                {form && 
                <Box id="dark-background">
                <Card className="my-5 container p-5 bg-dark border border-success" id='nature-border'>
                <Button variant="outlined" color="error" style={{'top': -10, 'right': 0, 'position': 'relative', 'float': 'right'}} onClick={() => openForm(!form)}>x</Button>
                    <Box autoComplete="off" className="row container text-center p-5">
                        <input label="Meno" className="text-center" variant="standard" placeholder="Meno" />
                        <input label="Priezvisko" variant="standard" className="my-1" />
                        <input label="E-mail" variant="standard" className="my-1" />
                        <input label="Telefónne číslo" className="my-1" variant="standard" />
                        <Box><Button variant='contained' color='error' className="my-4">Odoslať</Button></Box>
                    </Box>
                </Card></Box>}
            </Container>
            <Typography variant="h3" className="my-3 mt-5 pt-5">Chceš pomôcť viac?</Typography>
            <Box>
                {sections.map((section, index) => <Sections index={index} img={section.img} title={section.title} text={section.text} />)}
            </Box>
        </Box>
    )
}