import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Box from '@mui/material/Box'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default function Sponsors(){
    const [sponsors, setSponsors] = useState([])

    useEffect(() => Axios.get('http://localhost:3001/sponsors').then((response) => {
        console.log(response.data)
        setSponsors(response.data)
    }), [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return(
        <Box>
    <Slider {...settings}>
    {sponsors.map((sponsor, index) => <Box key={index} className="my-auto"><img height="150" width="150"src={`pathfinderImages/${sponsor.img}`} alt={sponsor.title} /></Box>)}
    </Slider>
    </Box>
    )
}