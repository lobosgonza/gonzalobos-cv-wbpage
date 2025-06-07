// src/sections/About.jsx  (o .js si prefieres)

import React from "react";
import { motion } from "framer-motion";
// 1. Importamos nuestro objeto 'content'
import { content } from "../data/es/content.js";
// 2. Importamos la imagen
import Img from "../assets/images/Gonzalo-lobos-Home-400x400.jpg";
// 3. (Opcional) Importamos un componente de título reutilizable
import SectionTitle from '../components/SectionTitle';

// El componente Card ya no es necesario si esta es una sección principal, 
// pero si lo usas, asegúrate de que no tenga dependencias de i18next.
// Asumiré que esta es una sección completa por ahora.

function About() {
    // 4. Extraemos los datos que necesitamos de nuestro objeto 'content'
    const { about, navbar } = content;

    return (
        // Usamos un <section> para la semántica de HTML5
        <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">

                {/* Usamos un título de sección */}
                <SectionTitle title={about.title} />

                {/* Contenedor principal con layout de grid para la imagen y el texto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mt-12">

                    {/* Columna de la Imagen */}
                    <motion.div
                        className="md:col-span-1 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 object-cover"
                            src={Img}
                            alt="Foto de Gonzalo Lobos"
                        />
                    </motion.div>

                    {/* Columna del Texto */}
                    <div className="md:col-span-2 text-slate-600 dark:text-slate-300 space-y-4 text-lg">
                        {/* 5. Renderizamos el texto que contiene HTML (<strong>)
                           usando 'dangerouslySetInnerHTML'. Es la forma correcta en React.
                        */}
                        <motion.p
                            dangerouslySetInnerHTML={{ __html: about.introduction }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <motion.p
                            dangerouslySetInnerHTML={{ __html: about.skills }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <motion.p
                            className="font-semibold text-slate-800 dark:text-slate-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {about.callToAction}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;