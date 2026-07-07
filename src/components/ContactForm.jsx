// src/components/ContactForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
	const { t } = useTranslation();
	const form = useRef();
	const [isSending, setIsSending] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
	const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSending(true);
		setIsSuccess(false);
		setIsError(false);

		emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY).then(
			() => {
				setIsSending(false);
				setIsSuccess(true);
				form.current.reset();
			},
			() => {
				setIsSending(false);
				setIsError(true);
			},
		);
	};

	// Asignamos la clase aislada y limpia
	const inputClass = 'contact-input';
	const labelClass = 'block text-[10px] font-black uppercase tracking-widest text-stone-500 mb-1';

	return (
		<form ref={form} onSubmit={sendEmail} className='space-y-5'>
			<div>
				<label htmlFor='user_name' className={labelClass}>
					{t('contact.formName')}
				</label>
				<input type='text' name='user_name' id='user_name' className={inputClass} required />
			</div>

			<div>
				<label htmlFor='user_email' className={labelClass}>
					{t('contact.formEmail')}
				</label>
				<input type='email' name='user_email' id='user_email' className={inputClass} required />
			</div>

			<div>
				<label htmlFor='user_company' className={labelClass}>
					{t('contact.formCompany')}
				</label>
				<input type='text' name='user_company' id='user_company' className={inputClass} />
			</div>

			<div>
				<label htmlFor='message' className={labelClass}>
					{t('contact.formMessage')}
				</label>
				<textarea name='message' id='message' rows='4' className={inputClass} required />
			</div>

			<div>
				<button
					type='submit'
					disabled={isSending}
					className='w-full py-3 px-4 bg-stone-800 hover:bg-[#0d9488] text-stone-100 text-xs font-black uppercase tracking-widest transition-colors duration-300 disabled:opacity-50 rounded-none shadow-none'>
					{isSending ? 'Enviando...' : t('contact.formSend')}
				</button>
			</div>

			{isSuccess && <p className='text-emerald-700 font-bold text-center text-xs uppercase tracking-wide'>{t('contact.formSuccess')}</p>}
			{isError && <p className='text-red-700 font-bold text-center text-xs uppercase tracking-wide'>{t('contact.formError')}</p>}
		</form>
	);
};
