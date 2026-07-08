// src/sections/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const navLinks = [
	{ id: 'about', labelKey: 'navbar.about' },
	{ id: 'projects', labelKey: 'navbar.projects' },
	{ id: 'caseStudies', labelKey: 'navbar.caseStudies' },
	{ id: 'experience', labelKey: 'navbar.experience' },
	{ id: 'studies', labelKey: 'navbar.studies' },
	{ id: 'skills', labelKey: 'navbar.skills' },
	{ id: 'contact', labelKey: 'navbar.contact' },
];

function Navbar() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const handleScrollLink = (e, targetId) => {
		e.preventDefault();
		closeMenu();
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({ top: targetPosition, behavior: 'smooth' });
		}
	};

	return (
		/* 1. CONTROL DE COLOR EN SCROLL: Forzamos el color concreto/piedra de tu marca (#eae7e2) 
		   para que nunca pierda identidad visual ni contraste frente al contenido */
		<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#eae7e2] border-b border-stone-300/80 shadow-sm' : 'bg-concrete'}`}>
			<div className='container mx-auto px-6 py-4 flex justify-between items-center max-w-5xl'>
				<a href='#home' onClick={(e) => handleScrollLink(e, '#home')} className='uppercase text-xl font-black text-structural font-display tracking-tighter'>
					Gonzalo Lobos
				</a>

				<ul className='hidden md:flex items-center space-x-5 text-xs font-black uppercase tracking-wider'>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} onClick={(e) => handleScrollLink(e, `#${link.id}`)} className='text-structural hover:text-primary transition-colors duration-200'>
								{t(link.labelKey)}
							</a>
						</li>
					))}
				</ul>

				<div className='flex items-center space-x-4'>
					<div className='hidden md:block'>
						<LanguageSwitcher />
					</div>
					<div className='md:hidden'>
						<button onClick={toggleMenu} className='z-50 relative text-structural focus:outline-none' aria-label='Menu'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
								{isOpen ? <path d='M6 18L18 6M6 6l12 12' /> : <path d='M4 6h16M4 12h16m-7 6h7' />}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* 2. CONTROL INTERACTIVO DE CIERRE EN MOBILE */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* BACKDROP: Capa translúcida de fondo que detecta el clic/toque afuera del menú */}
						<motion.div
							className='fixed inset-0 bg-black/40 z-30 md:hidden'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={closeMenu} // Al tocar fuera, colapsa el menú
						/>

						{/* MENÚ DESPLEGABLE MOBILE */}
						<motion.div
							className='md:hidden absolute top-0 left-0 w-full bg-[#eae7e2] border-b-4 border-primary pt-20 pb-8 px-6 text-left z-40 shadow-xl'
							initial={{ opacity: 0, y: '-100%' }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: '-100%' }}
							transition={{ duration: 0.25, ease: 'easeOut' }}>
							<ul className='flex flex-col items-start space-y-4 uppercase text-lg font-black tracking-tight'>
								{navLinks.map((link) => (
									<li key={link.id} onClick={closeMenu}>
										<a href={`#${link.id}`} onClick={(e) => handleScrollLink(e, `#${link.id}`)} className='text-structural hover:text-primary transition-colors'>
											{t(link.labelKey)}
										</a>
									</li>
								))}
								<li className='pt-4 border-t border-stone-300 w-full flex justify-start'>
									<LanguageSwitcher />
								</li>
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
}

export default Navbar;
