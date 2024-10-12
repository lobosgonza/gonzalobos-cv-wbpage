import React from "react";
import Card from "../components/Card";


function Contact() {
    return (<>
        {/* Sección 4: Contacto */}
        <Card id='contacto' title='Contacto'>
            <p>
                <strong>Correo Electrónico:</strong>
                {/* Ícono de sobre para el correo */}
                <i className='fas fa-envelope' style={{ marginLeft: '10px' }}></i> gonzalo.lobos.ramirez@gmail.com
            </p>
            <p>
                <strong>Teléfono:</strong>
                {/* Ícono de teléfono */}
                <i className='fas fa-phone' style={{ marginLeft: '10px' }}></i> +569 659 610 86
            </p>
            {/* Botones para redes y contacto */}
            <div className='buttons is-centered'>
                <a
                    href='https://wa.me/56965961086'
                    target='_blank'
                    className='button is-success'
                    rel='noopener noreferrer'
                >
                    {/* Ícono de WhatsApp */}
                    <span className='icon'>
                        <i className='fab fa-whatsapp'></i>
                    </span>
                    <span>WhatsApp</span>
                </a>

                <a
                    href='https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/'
                    target='_blank'
                    className='button is-info'
                    rel='noopener noreferrer'
                >
                    {/* Ícono de LinkedIn */}
                    <span className='icon'>
                        <i className='fab fa-linkedin'></i>
                    </span>
                    <span>LinkedIn</span>
                </a>
                {/* Nuevo Botón de GitHub */}
                <a
                    href='https://github.com/lobosgonza'
                    target='_blank'
                    className='button is-dark'
                    rel='noopener noreferrer'
                >
                    {/* Ícono de GitHub */}
                    <span className='icon'>
                        <i className='fab fa-github'></i>
                    </span>
                    <span>GitHub</span>
                </a>
            </div>
        </Card>
    </>)
}


export default Contact