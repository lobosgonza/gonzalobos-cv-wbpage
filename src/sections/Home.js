
import React from 'react';
import Card from '../components/Card';


import { motion } from 'framer-motion'; // Importa framer-motion
import { useTranslation } from 'react-i18next'; // Hook para las traducciones

function Home({ onBtnClick }) {

    const { t, i18n } = useTranslation(); // Hook para usar las traducciones

    const changeLanguage = (lang) => {
        console.log(`Cambiando idioma a: ${lang}`);
        i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
    };


    return (<>
        {/* Sección 1: Introducción */}
        <Card id='inicio' title='Gonzalo Lobos' isMainTitle={true} onClick={() => onBtnClick('About')}>
            <p className='has-text-centered' >Ecommerce | Project Management | Web Development</p>
            {/* Button Group */}
            <div className="buttons has-addons is-centered">
                <button className="button" onClick={() => onBtnClick('About')}>{t('navbar.about')}</button>
                <button className="button" onClick={() => onBtnClick('Experience')}>{t('navbar.experience')}</button>
                <button className="button" onClick={() => onBtnClick('Studies')}>{t('navbar.studies')}</button>
                <button className="button" onClick={() => onBtnClick('Skills')}>{t('navbar.skills')}</button>
                <button className="button" onClick={() => onBtnClick('Contact')}>{t('navbar.contact')}</button>
            </div>
        </Card>
    </>)
}


export default Home