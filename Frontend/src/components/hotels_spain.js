import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Hotel_Spain extends Component {
    state = {
      hotel_spain: [
        {
          nombre: 'Seventhy Hotel',
          pais: 'Spain',
          imagen: 'Seventhy',
          calificacion: 'Exelent',
          habitacion: '/habitaciones-seventhy'
        },
        {
          nombre: 'Catalonia Hotel',
          pais: 'Spain',
          imagen: 'Catalonia',
          calificacion: 'Very good',
          habitacion: '/habitaciones-catalonia'
        },
        {
          nombre: 'Artiem Hotel',
          pais: 'Spain',
          imagen: 'Artiem',
          calificacion: 'Good',
          habitacion: '/habitaciones-artiem'
        },
  
        {
          nombre: 'Gravina Hotel',
          pais: 'Spain',
          imagen: 'Gravina',
          calificacion: 'Medium',
          habitacion: '/habitaciones-gravina'
        }
  
      ]
  
    };
  
  
    render() {
      return (
        <div className='contenedor-principal'>
          <h1>here´s some of the <span className='resaltado'>rated hotels</span> for you!!</h1>/
          <div className='container'>
          {
            this.state.hotel_spain.map((hotel_spain, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <img
                    className='imagen-hotel'
                    src={require(`../img/Hoteles/Hotel-Espania-${hotel_spain.imagen}.jpg`)}
                    /*alt='Foto de Emma'*/ />
                  <div className='contenedor-texto-testimonio'>
                    <p className='nombre-pais'>
                      <strong>{hotel_spain.pais}</strong>
                    </p><br/>
                    <p className='nombre-testimonio'>
                      <strong>{hotel_spain.nombre}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      <strong>{hotel_spain.calificacion}</strong>
                    </p>
                    <NavLink className="btn btn-warning"  type="submit" to={hotel_spain.habitacion}>See Rooms</NavLink>
                  </div>
                </div>
              )
  
            })
          }
          </div>
  
        </div>
      );
    }
  
  
  }
  
  
  export default Hotel_Spain;