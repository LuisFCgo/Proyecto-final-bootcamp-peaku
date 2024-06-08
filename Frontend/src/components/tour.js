import React, { Component } from "react";
/*import images from '../Exports/images'*/
import '../App.css'
/*import { motion } from 'framer-motion'*/
import HIB from '../img/Hoteles/Hotel-Italia-Barroco.jpg'
import HIA from '../img/Hoteles/Hotel-Italia-Artemide.jpg'
import HIC from '../img/Hoteles/Hotel-Italia-Calimala.jpg'
import HIM from '../img/Hoteles/Hotel-Italia-Moresco.jpg'
import HFL from '../img/Hoteles/Hotel-Francia-Lutetia.jpg'
import HFM from '../img/Hoteles/Hotel-Francia-Maison.jpg'
import HFR from '../img/Hoteles/Hotel-Francia-Royal.jpg'
import HFS from '../img/Hoteles/Hotel-Francia-Shangri.jpg'
import HEA from '../img/Hoteles/Hotel-Espania-Artiem.jpg'
import HEC from '../img/Hoteles/Hotel-Espania-Catalonia.jpg'
import HEG from '../img/Hoteles/Hotel-Espania-Gravina.jpg'
/*import HES from '../img/Hoteles/Hotel-Espania-Seventhy.jpg'*/
import HUC from '../img/Hoteles/Hotel-Uk-Chesterfield.jpg'
import HUH from '../img/Hoteles/Hotel-Uk-Hampton.jpg'
/*import HUL from '../img/Hoteles/Hotel-Uk-Lancaster.jpg'*/
import HUO from '../img/Hoteles/Hotel-Uk-Ocean.jpg'


/*const Slider = () => {
    return(
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right:700, left:-700}}>
            {images.map(image => (
                <motion.div className="item">
                    <img src={image} alt="" />
                </motion.div>
            ))}
            </motion.div>
        </motion.div>
    )
}

export default Slider*/

class tours extends Component {
    render() {
        return (
            <div className="container-tour">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={HIB} class="d-block w-100" alt="HIB"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HIA} class="d-block w-100" alt="HIA"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HIC} class="d-block w-100" alt="HIC"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HIM} class="d-block w-100" alt="HIM"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HFL} class="d-block w-100" alt="HFL"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HFM} class="d-block w-100" alt="HFM"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HFR} class="d-block w-100" alt="HFR"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HFS} class="d-block w-100" alt="HFS"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HEA} class="d-block w-100" alt="HEA"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HEC} class="d-block w-100" alt="HEC"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HEG} class="d-block w-100" alt="HEG"/>
                        </div>
                        {/* <div class="carousel-item"> */}
                            {/* <img src={HES} class="d-block w-100" alt="HES"/> */}
                        {/* </div> */}
                        <div class="carousel-item">
                            <img src={HUC} class="d-block w-100" alt="HUC"/>
                        </div>
                        <div class="carousel-item">
                            <img src={HUH} class="d-block w-100" alt="HUH"/>
                        </div>
                        {/* <div class="carousel-item"> */}
                            {/* <img src={HUL} class="d-block w-100" alt="HUL"/> */}
                        {/* </div> */}
                        <div class="carousel-item">
                            <img src={HUO} class="d-block w-100" alt="HUO"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default tours;