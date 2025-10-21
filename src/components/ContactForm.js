// src/components/ContactForm.js

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // --- IMPORTANTE ---
    // Debes reemplazar estos valores con los de tu cuenta de EmailJS
    const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    // --------------------

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsSuccess(false);
        setIsError(false);

        emailjs
            .sendForm(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                form.current,
                YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSending(false);
                    setIsSuccess(true);
                    form.current.reset(); // Resetea el formulario
                },
                (error) => {
                    console.log(error.text);
                    setIsSending(false);
                    setIsError(true);
                }
            );
    };

    // Clases de estilos reutilizables
    const inputClass = "w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 dark:text-white dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 transition-colors";
    const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";


    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
                <label htmlFor="user_name" className={labelClass}>
                    {t('contact.formName')}
                </label>
                <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    className={inputClass}
                    required
                />
            </div>

            <div>
                <label htmlFor="user_email" className={labelClass}>
                    {t('contact.formEmail')}
                </label>
                <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    className={inputClass}
                    required
                />
            </div>
            <div>
                <label htmlFor="user_company" className={labelClass}>
                    {t('contact.formCompany')}
                </label>
                <input
                    type="text"
                    name="user_company"
                    id="user_company"
                    className={inputClass}
                // Nota: Sin 'required'
                />
            </div>
            <div>
                <label htmlFor="message" className={labelClass}>
                    {t('contact.formMessage')}
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className={inputClass}
                    required
                />
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 disabled:opacity-50"
                >
                    {isSending ? 'Enviando...' : t('contact.formSend')}
                </button>
            </div>

            {/* Mensajes de éxito o error */}
            {isSuccess && (
                <p className="text-green-600 dark:text-green-400 text-center">
                    {t('contact.formSuccess')}
                </p>
            )}
            {isError && (
                <p className="text-red-600 dark:text-red-400 text-center">
                    {t('contact.formError')}
                </p>
            )}
        </form>
    );
};