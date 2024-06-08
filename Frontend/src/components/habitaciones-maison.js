import React, {Component} from "react";
import '../App.css'
import { NavLink } from 'react-router-dom';
import DateRangePicker from "./DateRangePicker";

class Rooms extends Component {
    state = {
      Room_type: [
        {
          nombre: 'Executive',
          distribucuion: '1 room, 1 bathroom',
          imagen: 'Maison1',
          pricePerDay: 90 
        },
        {
          nombre: 'Senior',
          distribucuion: '1 room, 1 bathroom, 1 desk',
          imagen: 'Maison2',
          pricePerDay: 110
        },
        {
          nombre: 'Suite',
          distribucuion: '2 room, 2 bathroom, 1 desk',
          imagen: 'Maison3',
          pricePerDay: 150
        },
  
      ]
  
    };


    render() {
        return (
          <div className='contenedor-principal'>
            <h1>Pick your best place <span className='resaltado'>to rest</span> on vacation!!</h1>/
            <div className='container'>
            {
              this.state.Room_type.map((room, i) => {
                return (
                  <div className='contenedor-testimonio-habitacion'>
                    <img
                      className='imagen-hotel'
                      src={require(`../img/Hoteles/Hotel-Francia/Habitacion-${room.imagen}.jpg`)}
                      alt='Foto de Emma' />
                    <div className='contenedor-texto-testimonio'>
                      <p className='nombre-testimonio'>
                        <strong>{room.nombre}</strong><br/>
                        {room.distribucuion}
                      </p>
                      <DateRangePicker pricePerDay={room.pricePerDay}/>
                      <p><span className='resaltado'>{room.pricePerDay}</span> &euro; / day</p>
                      <NavLink className="btn btn-warning"  type="submit" to="/pago">Payment</NavLink>
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
        
    export default Rooms;