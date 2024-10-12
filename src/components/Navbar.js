import React from "react";
import { motion } from 'framer-motion'; // Importa framer-motion


function Navbar({ onBtnClick }) {


    return (
        <motion.nav
            className='navbar'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <nav className='navbar' role="navigation" aria-label="main navigation">

                <div className='navbar-brand'>
                    <a className='navbar-item' href='#inicio' onClick={() => onBtnClick('Home')}>
                        <strong>Gonzalo Lobos</strong>
                    </a>
                </div>
                <div id='navbarMenu' className='navbar-menu'>
                    <div className='navbar-end'>
                        <a className='navbar-item' onClick={() => onBtnClick('About')}>¿Quién Soy?</a>
                        <a className='navbar-item' onClick={() => onBtnClick('Experience')}>Experiencia</a>
                        <a className='navbar-item' onClick={() => onBtnClick('Studies')}>Estudios</a>
                        <a className='navbar-item' onClick={() => onBtnClick('Skills')}>Habilidades</a>
                        <a className='navbar-item' onClick={() => onBtnClick('Contact')}>Contacto</a>
                    </div>
                </div>
            </nav>
        </motion.nav>
    );
}

export default Navbar;