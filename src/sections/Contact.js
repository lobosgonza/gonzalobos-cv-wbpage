// src/sections/Contact.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import { FaGithub, FaLinkedin, FaWhatsapp, FaClipboard, FaCheck } from 'react-icons/fa';
import { ContactForm } from '../components/ContactForm';

const Contact = () => {
    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);
    const emailAddress = 'gonzalo.lobos.ramirez@gmail.com';

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailAddress).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }, (err) => {
            console.error('No se pudo copiar el texto: ', err);
        });
    };
    const socialLinks = [
        {
            name: t('contact.whatsapp'),
            icon: <FaWhatsapp className="w-5 h-5" />,
            url: 'https://wa.me/56965961086',
        },
        {
            name: t('contact.linkedin'),
            icon: <FaLinkedin className="w-5 h-5" />,
            url: 'https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/',
        },
        {
            name: t('contact.github'),
            icon: <FaGithub className="w-5 h-5" />,
            url: 'https://github.com/lobosgonza',
        },
    ];

    const linkBaseClass = "flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition duration-300 group shadow-sm";
    return (
        <section id="contact" className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4">
                <SectionTitle title={t('contact.title')} />
                <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                </p>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">

                    {/* Columna Izquierda: Links */}
                    <div className="space-y-6">

                        <button
                            onClick={handleCopyEmail}
                            className={`${linkBaseClass} w-full text-left`}
                        >
                            <span className={`transition-colors ${isCopied ? 'text-green-500' : 'text-primary dark:text-primary-light'}`}>
                                {isCopied ? <FaCheck className="w-5 h-5" /> : <FaClipboard className="w-5 h-5" />}
                            </span>

                            {/* --- INICIO DE LA CORRECCIÓN DE ESTILO --- */}
                            {/* Usamos un condicional (ternario) para mostrar 
                                el email O el mensaje de "Copiado", pero no ambos.
                            */}
                            {isCopied ? (
                                <span className="flex-1 text-green-600 dark:text-green-400 font-medium">
                                    {t('contact.copied')}
                                </span>
                            ) : (
                                <span className="flex-1 text-slate-700 dark:text-slate-300 font-medium">
                                    {emailAddress}
                                </span>
                            )}
                            {/* --- FIN DE LA CORRECCIÓN DE ESTILO --- */}

                            {/* Ya no necesitamos el <span> absoluto que se superponía.
                                Lo hemos eliminado. 
                            */}
                        </button>

                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${linkBaseClass} group`}
                            >
                                <span className="text-primary dark:text-primary-light">
                                    {link.icon}
                                </span>
                                <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Columna Derecha: Formulario */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-text-dark dark:text-text-light mb-6">
                            {t('contact.sendMessage')}
                        </h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;