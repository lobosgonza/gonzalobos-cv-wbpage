// src/sections/Contact.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import { FaGithub, FaLinkedin, FaClipboard, FaCheck } from 'react-icons/fa';
import { ContactForm } from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
	const { t } = useTranslation();
	const [isCopied, setIsCopied] = useState(false);
	const emailAddress = 'gonzalo.lobos.ramirez@gmail.com';

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(emailAddress).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		});
	};

	const socialLinks = [
		{ name: t('contact.linkedin'), icon: <FaLinkedin className='w-4 h-4' />, url: 'https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/' },
		{ name: t('contact.github'), icon: <FaGithub className='w-4 h-4' />, url: 'https://github.com/lobosgonza' },
	];

	// Modificado: Eliminado border-4 y añadidas transiciones grupales
	const blockClass =
		'group flex items-center justify-between space-x-4 p-4 rounded-none bg-white hover:bg-[#0d9488] transition-all duration-300 text-xs font-black uppercase tracking-widest text-structural';

	return (
		<section id='contact' className='py-16 sm:py-20 bg-concrete'>
			<AnimatedSection>
				<div className='container mx-auto px-6 max-w-5xl text-left'>
					<SectionTitle title={t('contact.title')} />
					<p className='text-left uppercase text-xs font-medium tracking-widest text-stone-500 mb-12 max-w-xl leading-relaxed'>{t('contact.subtitle')}</p>

					<div className='grid lg:grid-cols-2 gap-12 items-start'>
						<div className='space-y-4'>
							<button onClick={handleCopyEmail} className={`${blockClass} w-full text-left`}>
								<div className='flex items-center space-x-4 min-w-0 flex-grow'>
									<span
										className={
											isCopied ? 'text-emerald-700 group-hover:text-white flex-shrink-0 transition-colors' : 'text-primary group-hover:text-white flex-shrink-0 transition-colors'
										}>
										{isCopied ? <FaCheck className='w-4 h-4' /> : <FaClipboard className='w-4 h-4' />}
									</span>
									<span
										className={`uppercase text-xs font-black break-all ${isCopied ? 'text-emerald-700 group-hover:text-white' : 'text-structural group-hover:text-white'} transition-colors`}>
										{isCopied ? t('contact.copied') : emailAddress}
									</span>
								</div>
								{!isCopied && (
									<span className='text-[10px] text-stone-400 group-hover:text-white/80 font-black tracking-widest uppercase flex-shrink-0 pl-2 transition-colors'>Copiar</span>
								)}
							</button>

							{socialLinks.map((link, index) => (
								<a key={index} href={link.url} target='_blank' rel='noopener noreferrer' className={blockClass}>
									<div className='flex items-center space-x-4'>
										<span className='text-primary group-hover:text-white transition-colors'>{link.icon}</span>
										<span className='group-hover:text-white transition-colors'>{link.name}</span>
									</div>{' '}
									<span className='text-[10px] text-stone-400 group-hover:text-white/80 font-black tracking-widest uppercase flex-shrink-0 pl-2 transition-colors'>Entrar</span>
								</a>
							))}
						</div>

						<div className='bg-[#ffffff] p-8 rounded-none'>
							<h3 className='text-sm font-black uppercase tracking-widest text-structural mb-6 font-display'>{t('contact.sendMessage')}</h3>
							<ContactForm />
						</div>
					</div>
				</div>
			</AnimatedSection>
		</section>
	);
};

export default Contact;
