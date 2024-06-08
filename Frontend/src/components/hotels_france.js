import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Hotel_France extends Component {
    state = {
      hotel_france: [
        {
          nombre: 'Shangri Hotel',
          pais: 'France',
          imagen: 'Shangri',
          calificacion: 'Exelent',
          habitacion: '/habitaciones-shangri'
        },
        {
          nombre: 'Maison Hotel',
          pais: 'France',
          imagen: 'Maison',
          calificacion: 'Very good',
          habitacion: '/habitaciones-maison'
        },
        {
          nombre: 'Lutetia Hotel',
          pais: 'France',
          imagen: 'Lutetia',
          calificacion: 'Good',
          habitacion: '/habitaciones-lutetia'
        },
  
        {
          nombre: 'Royal Hotel',
          pais: 'France',
          imagen: 'Royal',
          calificacion: 'Medium',
          habitacion: '/habitaciones-royal'
        }
  
      ]
  
    };
  
  
    render() {
      return (
        <div className='contenedor-principal'>
          <h1>here´s some of the <span className='resaltado'>rated hotels</span> for you!!</h1>/
          <div className='container'>
          {
            this.state.hotel_france.map((hotel_france, i) => {
              return (
                <div className='contenedor-testimonio'>
                  <img
                    className='imagen-hotel'
                    src={require(`../img/Hoteles/Hotel-Francia-${hotel_france.imagen}.jpg`)}
                    alt='Foto de Emma' />
                  <div className='contenedor-texto-testimonio'>
                  <p className='nombre-pais'>
                      <strong>{hotel_france.pais}</strong>
                    </p><br/>
                    <p className='nombre-testimonio'>
                      <strong>{hotel_france.nombre}</strong>
                    </p>
                    <p className='cargo-testimonio'>
                      <strong>{hotel_france.calificacion}</strong>
                    </p>
                    <NavLink className="btn btn-warning"  type="submit" to={hotel_france.habitacion}>See Rooms</NavLink>
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
  
  
  export default Hotel_France;