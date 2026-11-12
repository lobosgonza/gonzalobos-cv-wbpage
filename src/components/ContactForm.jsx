// src/components/ContactForm.jsx
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Endpoint del servidor (Cloud Function vía rewrite de Firebase Hosting).
// La API Key de Resend NUNCA vive en el cliente.
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || 'https://contact-api.gonzalobos.com/api/contact';

// Debe coincidir con HONEYPOT_FIELD en functions/contact-handler.js
const HONEYPOT_FIELD = 'hp_website';

export const ContactForm = () => {
	const { t, i18n } = useTranslation();
	const isEn = i18n.language === 'en';
	const form = useRef();
	const [isSending, setIsSending] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		if (isSending) return;

		setIsSending(true);
		setIsSuccess(false);
		setIsError(false);

		const formData = new FormData(form.current);
		const payload = {
			user_name: (formData.get('user_name') || '').toString(),
			user_email: (formData.get('user_email') || '').toString(),
			user_company: (formData.get('user_company') || '').toString(),
			message: (formData.get('message') || '').toString(),
			[HONEYPOT_FIELD]: (formData.get(HONEYPOT_FIELD) || '').toString(),
		};

		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 15000);

		try {
			const response = await fetch(CONTACT_API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(payload),
				signal: controller.signal,
			});

			const data = await response.json().catch(() => ({ ok: false }));
			if (!response.ok || !data.ok) throw new Error(data.error || `HTTP ${response.status}`);

			setIsSuccess(true);
			form.current.reset();
		} catch (error) {
			console.error('ContactForm:', error);
			setIsError(true);
		} finally {
			clearTimeout(timeoutId);
			setIsSending(false);
		}
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
				<input type='text' name='user_name' id='user_name' className={inputClass} maxLength={100} autoComplete='name' required />
			</div>

			<div>
				<label htmlFor='user_email' className={labelClass}>
					{t('contact.formEmail')}
				</label>
				<input type='email' name='user_email' id='user_email' className={inputClass} maxLength={254} autoComplete='email' required />
			</div>

			<div>
				<label htmlFor='user_company' className={labelClass}>
					{t('contact.formCompany')}
				</label>
				<input type='text' name='user_company' id='user_company' className={inputClass} maxLength={120} autoComplete='organization' />
			</div>

			<div>
				<label htmlFor='message' className={labelClass}>
					{t('contact.formMessage')}
				</label>
				<textarea name='message' id='message' rows='4' className={inputClass} maxLength={5000} required />
			</div>

			{/* Honeypot anti-spam: invisible para personas y lectores de pantalla */}
			<div aria-hidden='true' style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
				<label htmlFor={HONEYPOT_FIELD}>Website</label>
				<input type='text' name={HONEYPOT_FIELD} id={HONEYPOT_FIELD} tabIndex={-1} autoComplete='off' defaultValue='' />
			</div>

			<div>
				<button
					type='submit'
					disabled={isSending}
					className='w-full py-3 px-4 bg-stone-800 hover:bg-[#0d9488] text-stone-100 text-xs font-black uppercase tracking-widest transition-colors duration-300 disabled:opacity-50 rounded-none shadow-none'>
					{isSending ? (isEn ? 'Sending...' : 'Enviando...') : t('contact.formSend')}
				</button>
			</div>

			<div aria-live='polite'>
				{isSuccess && <p className='text-emerald-700 font-bold text-center text-xs uppercase tracking-wide'>{t('contact.formSuccess')}</p>}
				{isError && <p className='text-red-700 font-bold text-center text-xs uppercase tracking-wide'>{t('contact.formError')}</p>}
			</div>
		</form>
	);
};
