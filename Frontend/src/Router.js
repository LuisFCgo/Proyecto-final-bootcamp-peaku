import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Barra from './components/com-nav';

import home from './components/home';
import Login from './components/login';
import register from './components/register';
import blog from './components/blogger';
import Pago from './components/pago';
import Hotel_Italy from './components/hotels_italy';
import Hotel_France from './components/hotels_france';
import Hotel_Uk from './components/hotels_uk';
import Hotel_Spain from './components/hotels_spain';
import About_Us from './components/about_us';
import Carta3 from './components/carta3';
import Habitaciones_Artemide from './components/habitaciones-artemide';
import Habitaciones_Barroco from './components/habitaciones-barroco';
import Habitaciones_Calimala from './components/habitaciones-calimala';
import Habitaciones_Moresco from './components/habitaciones-moresco';
import Habitaciones_Lutetia from './components/habitaciones-lutetia';
import Habitaciones_Maison from './components/habitaciones-maison';
import Habitaciones_Royal from './components/habitaciones-royal';
import Habitaciones_Shangri from './components/habitaciones-shangri';
import Habitaciones_Artiem from './components/habitaciones-artiem';
import Habitaciones_Catalonia from './components/habitaciones-catalonia';
import Habitaciones_Gravina from './components/habitaciones-gravina';
import Habitaciones_Seventhy from './components/habitaciones-seventhy';
import Habitaciones_Chesterfield from './components/habitaciones-chesterfield';
import Habitaciones_Hampton from './components/habitaciones-hampton';
import Habitaciones_Lancaster from './components/habitaciones-lancaster';
import Habitaciones_Ocean from './components/habitaciones-ocean';
import Under_Construction from './components/under-const';
import { AuthProvider } from './context/AuthContext';
import { DateRangeProvider } from './context/DateRangerContext';
import tours from './components/tour'


class Router extends Component {
    
    render() {
        return (
            <AuthProvider>
                <DateRangeProvider>
                    <BrowserRouter>
                        <Barra />
                        <Routes>
                            <Route exact path='/' Component={home} />
                            <Route exact path='/home' Component={home} />
                            <Route exact path='/Login' Component={Login} />
                            <Route exact path='/blog' Component={blog} />
                            <Route exact path='/register' Component={register} />
                            <Route exact path='/Pago' Component={Pago} />
                            <Route exact path='/Hotel_Italy' Component={Hotel_Italy} />
                            <Route exact path='/Hotel_France' Component={Hotel_France} />
                            <Route exact path='/Hotel_Uk' Component={Hotel_Uk} />
                            <Route exact path='/Hotel_Spain' Component={Hotel_Spain} />
                            <Route exact path='/destination' Component={Carta3} />
                            <Route exact path='/about_us' Component={About_Us} />
                            <Route exact path='/tour' Component={tours} />
                            <Route exact path='/habitaciones-artemide' Component={Habitaciones_Artemide} />
                            <Route exact path='/habitaciones-barroco' Component={Habitaciones_Barroco} />
                            <Route exact path='/habitaciones-calimala' Component={Habitaciones_Calimala} />
                            <Route exact path='/habitaciones-moresco' Component={Habitaciones_Moresco} />
                            <Route exact path='/habitaciones-lutetia' Component={Habitaciones_Lutetia} />
                            <Route exact path='/habitaciones-maison' Component={Habitaciones_Maison} />
                            <Route exact path='/habitaciones-royal' Component={Habitaciones_Royal} />
                            <Route exact path='/habitaciones-shangri' Component={Habitaciones_Shangri} />
                            <Route exact path='/habitaciones-artiem' Component={Habitaciones_Artiem} />
                            <Route exact path='/habitaciones-catalonia' Component={Habitaciones_Catalonia} />
                            <Route exact path='/habitaciones-gravina' Component={Habitaciones_Gravina} />
                            <Route exact path='/habitaciones-seventhy' Component={Habitaciones_Seventhy} />
                            <Route exact path='/habitaciones-chesterfield' Component={Habitaciones_Chesterfield} />
                            <Route exact path='/habitaciones-hampton' Component={Habitaciones_Hampton} />
                            <Route exact path='/habitaciones-lancaster' Component={Habitaciones_Lancaster} />
                            <Route exact path='/habitaciones-ocean' Component={Habitaciones_Ocean} />
                            <Route exact path='/under-const' Component={Under_Construction} />
                        </Routes>
                    </BrowserRouter>
                </DateRangeProvider>
            </AuthProvider>
        );
    }
}

export default Router;
