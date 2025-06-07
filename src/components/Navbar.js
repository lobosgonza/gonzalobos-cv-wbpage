import React from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion
import { useTranslation } from 'react-i18next'; // Hook para las traducciones

function Navbar({ onBtnClick }) {
    const { t, i18n } = useTranslation(); // Hook para usar las traducciones

    const changeLanguage = (lang) => {
        console.log(`Cambiando idioma a: ${lang}`);
        i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
    };
    const [isActive, setisActive] = React.useState(false);
    // return (
    //     // <motion.nav
    //     //     className=''
    //     //     initial={{ opacity: 0 }}
    //     //     animate={{ opacity: 1 }}
    //     //     transition={{ duration: 1 }}
    //     // >
    //     <nav className='navbar' role='navigation' aria-label='main navigation'>

    //         <div className="navbar-brand">
    //             <a className="navbar-item" href='#inicio' onClick={() => onBtnClick('Home')}>
    //                 Gonzalo Lobos
    //             </a>
    //             <div className="navbar-burger js-burger" data-target="navbarBasicExample">
    //                 <span ></span>
    //                 <span ></span>
    //                 <span ></span>
    //                 <span ></span>
    //             </div>

    //         </div>

    //         <div id="navbarBasicExample" className="navbar-menu">

    //             <div className="navbar-start">
    //                 <a className="navbar-item" onClick={() => onBtnClick('About')}>
    //                     {t('navbar.about')}
    //                 </a>  <a className="navbar-item" onClick={() => onBtnClick('Experience')}>
    //                     {t('navbar.experience')}
    //                 </a>
    //                 <a className="navbar-item" onClick={() => onBtnClick('Studies')}>
    //                     {t('navbar.studies')}
    //                 </a>  <a className="navbar-item" onClick={() => onBtnClick('Skills')}>
    //                     {t('navbar.skills')}
    //                 </a>  <a className="navbar-item" onClick={() => onBtnClick('Contact')}>
    //                     {t('navbar.contact')}
    //                 </a>



    //             </div>

    //             <div className="navbar-end">
    //                 <div className='navbar-item'>

    //                     <a className="button is-primary" onClick={() => changeLanguage('es')}>
    //                         Español
    //                     </a><a className="button is-primary" onClick={() => changeLanguage('en')}>
    //                         English
    //                     </a>

    //                 </div>
    //             </div>
    //         </div>

    //     </nav>


    // );

    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <a className="navbar-item" href='#inicio' onClick={() => onBtnClick('Home')}>
                    Gonzalo Lobos
                </a>

                <a
                    onClick={() => {
                        setisActive(!isActive);
                    }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >
                <div className="navbar-start">
                    <a className="navbar-item" onClick={() => onBtnClick('About')}>
                        {t('navbar.about')}
                    </a>  <a className="navbar-item" onClick={() => onBtnClick('Experience')}>
                        {t('navbar.experience')}
                    </a>
                    <a className="navbar-item" onClick={() => onBtnClick('Studies')}>
                        {t('navbar.studies')}
                    </a>  <a className="navbar-item" onClick={() => onBtnClick('Skills')}>
                        {t('navbar.skills')}
                    </a>  <a className="navbar-item" onClick={() => onBtnClick('Contact')}>
                        {t('navbar.contact')}
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">

                            <a className="button" onClick={() => changeLanguage('es')}>
                                Español
                            </a>
                            <a className="button" onClick={() => changeLanguage('en')}>
                                English
                            </a>
                        </div>
                    </div>

                </div>


            </div>
        </nav>


    )

}

export default Navbar;
