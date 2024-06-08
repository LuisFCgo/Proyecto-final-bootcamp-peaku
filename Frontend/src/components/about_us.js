import React, { Component } from 'react';

class About_Us extends Component {
  state = {
    about: [
      {
        title: 'Who we are',
        paragraph: 'We are a company with more than 10 years in the market of the experieces about trips around the world, improving each day the relations with customers and new users',
        imagen: 'polinesiaV1'
      },
      {
        title: 'Our vision',
        paragraph: 'Our vision is to bring our experience to all people who wants unforgettable trips around the world and love to travel to different amazing places ',
        imagen: 'vistamarV1'
      }
    ]

  };


  render() {
    return (
      <div className='contenedor-principal'>
        <div className='container'>
          {
            this.state.about.map((about, i) => {
              return (
                <div className='contenedor-testimonio-about'>
                  <img
                  className='imagen-back'
                  src={require(`../img/Hoteles/${about.imagen}.png`)}
                  alt='Foto de Emma' />
                  <div className='contenedor-texto-about'>
                    <p className='nombre-title'>
                      <strong>{about.title}</strong>
                    </p>
                    <p className='nombre-parrafo'>
                      <strong>{about.paragraph}</strong>
                    </p>
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


export default About_Us;