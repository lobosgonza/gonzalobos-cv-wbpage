import React from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion
import { useTranslation } from 'react-i18next'; // Hook para las traducciones

function Navbar({ onBtnClick }) {
    const { t, i18n } = useTranslation(); // Hook para usar las traducciones

    const changeLanguage = (lang) => {
        console.log(`Cambiando idioma a: ${lang}`);
        i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
    };

    return (
        <motion.nav
            className='navbar'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <nav className='navbar' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a className='navbar-item' href='#inicio' onClick={() => onBtnClick('Home')}>
                        <strong>Gonzalo Lobos</strong>
                    </a>
                </div>
                <div id='navbarMenu' className='navbar-menu'>
                    <div className='navbar-end'>
                        <a className='navbar-item' onClick={() => onBtnClick('About')}>
                            {t('navbar.about')}
                        </a>
                        <a className='navbar-item' onClick={() => onBtnClick('Experience')}>
                            {t('navbar.experience')}
                        </a>
                        <a className='navbar-item' onClick={() => onBtnClick('Studies')}>
                            {t('navbar.studies')}
                        </a>
                        <a className='navbar-item' onClick={() => onBtnClick('Skills')}>
                            {t('navbar.skills')}
                        </a>
                        <a className='navbar-item' onClick={() => onBtnClick('Contact')}>
                            {t('navbar.contact')}
                        </a>

                        {/* Botones para cambiar el idioma */}
                        <div className='navbar-item'>
                            <button className='button is-small' onClick={() => changeLanguage('es')}>
                                Español
                            </button>
                            <button className='button is-small' onClick={() => changeLanguage('en')}>
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.nav>
    );
}

export default Navbar;
