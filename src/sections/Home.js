
import React from 'react';
import Card from '../components/Card';



function Home({ onBtnClick }) {
    return (<>
        {/* Sección 1: Introducción */}
        <Card id='inicio' title='Gonzalo Lobos' isMainTitle={true} onClick={() => onBtnClick('About')}>
            <p className='has-text-centered' >Ecommerce | Project Management | Web Development</p>
            <div className="buttons is-centered">
                <button className="button" onClick={() => onBtnClick('About')}>¿Quién Soy?</button>
                <button className="button" onClick={() => onBtnClick('Experience')}>Experiencia</button>
                <button className="button" onClick={() => onBtnClick('Studies')}>Estudios</button>
                <button className="button" onClick={() => onBtnClick('Skills')}>Habilidades</button>
                <button className="button" onClick={() => onBtnClick('Contact')}>Contacto</button>

            </div>
        </Card>
    </>)
}


export default Home