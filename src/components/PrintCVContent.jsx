// src/components/PrintCVContent.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function PrintCVContent() {
	const { t, i18n } = useTranslation();
	const isEn = i18n.language === 'en';

	const pastExperience = t('experience.past', { returnObjects: true }) || [];
	const currentExperience = t('experience.current', { returnObjects: true }) || {};
	const educationItems = t('studies.items', { returnObjects: true }) || [];
	const strategySkills = t('skills.items.strategy', { returnObjects: true }) || [];
	const technicalSkills = t('skills.items.technical', { returnObjects: true }) || [];
	const toolsSkills = t('skills.items.tools', { returnObjects: true }) || [];

	return (
		<div id='print-cv-area' className='hidden'>
			{/* ENCABEZADO ULTRA-COMPACTO */}
			<header style={{ borderBottom: '1.5px solid #1a1816', paddingBottom: '6px', marginBottom: '10px' }}>
				<h1 style={{ fontSize: '20pt', fontWeight: '900', margin: '0 0 1px 0', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: '1.1' }}>{t('hero.name')}</h1>
				<h2 style={{ fontSize: '10.5pt', fontWeight: '700', color: '#0d9488', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{t('hero.title')}</h2>

				{/* ENLACES INTERACTIVOS ACCESIBLES */}
				<p style={{ fontSize: '8pt', color: '#333', margin: '0', lineHeight: '1.3' }}>
					<strong>Email:</strong>{' '}
					<a href='mailto:gonzalo.lobos.ramirez@gmail.com' style={{ color: '#000', textDecoration: 'none' }}>
						gonzalo.lobos.ramirez@gmail.com
					</a>{' '}
					{' | '}
					<strong>{isEn ? 'Portfolio:' : 'Portafolio:'}</strong>{' '}
					<a href='https://gonzalobos.com' target='_blank' rel='noreferrer' style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>
						gonzalobos.com
					</a>{' '}
					{' | '}
					<strong>LinkedIn:</strong>{' '}
					<a href='https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/' target='_blank' rel='noreferrer' style={{ color: '#000', textDecoration: 'none' }}>
						in/gonzalo-lobos-ramírez
					</a>{' '}
					{' | '}
					<strong>WhatsApp:</strong>{' '}
					<a
						href='https://api.whatsapp.com/send/?phone=56965961086&text&type=phone_number&app_absent=0'
						target='_blank'
						rel='noreferrer'
						style={{ color: '#000', textDecoration: 'none' }}>
						+56 9 6596 1086
					</a>
				</p>
			</header>

			{/* PERFIL PROFESIONAL */}
			<section style={{ marginBottom: '10px' }}>
				<h3
					style={{
						fontSize: '9.5pt',
						fontWeight: '900',
						textTransform: 'uppercase',
						borderBottom: '1px solid #1a1816',
						paddingBottom: '1px',
						marginBottom: '4px',
						letterSpacing: '0.05em',
					}}>
					{t('navbar.about')}
				</h3>
				<p dangerouslySetInnerHTML={{ __html: t('about.introduction') }} style={{ fontSize: '8pt', margin: '0 0 3px 0', textAlign: 'justify', lineHeight: '1.3' }} />
				<p dangerouslySetInnerHTML={{ __html: t('about.skills') }} style={{ fontSize: '8pt', margin: '0', textAlign: 'justify', lineHeight: '1.3' }} />
			</section>

			{/* EXPERIENCIA PROFESIONAL */}
			<section style={{ marginBottom: '10px' }}>
				<h3
					style={{
						fontSize: '9.5pt',
						fontWeight: '900',
						textTransform: 'uppercase',
						borderBottom: '1px solid #1a1816',
						paddingBottom: '1px',
						marginBottom: '6px',
						letterSpacing: '0.05em',
					}}>
					{t('experience.sectionTitle')}
				</h3>

				{/* Cargo Actual */}
				{currentExperience && currentExperience.title && (
					<div style={{ marginBottom: '6px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '8.5pt' }}>
							<span>
								{currentExperience.title} — <em style={{ fontStyle: 'normal', color: '#333' }}>{currentExperience.place}</em>
							</span>
							<span style={{ float: 'right', fontWeight: 'normal', fontSize: '8pt' }}>{isEn ? 'May 2026 – Present' : 'may. 2026 – Actualidad'}</span>
						</div>
						<ul style={{ margin: '2px 0 0 0', paddingLeft: '12px', fontSize: '8pt', lineHeight: '1.25' }}>
							{currentExperience.responsibilities?.map((resp, i) => (
								<li key={i} style={{ marginBottom: '1px' }}>
									{resp}
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Cargos Anteriores */}
				{pastExperience.map((job) => (
					<div key={job.id} style={{ marginBottom: '6px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '8.5pt' }}>
							<span>
								{job.title} — <em style={{ fontStyle: 'normal', color: '#333' }}>{job.place}</em>
							</span>
							<span style={{ float: 'right', fontWeight: 'normal', fontSize: '8pt' }}>{job.duration.split(' (')[0]}</span>
						</div>
						<ul style={{ margin: '2px 0 0 0', paddingLeft: '12px', fontSize: '8pt', lineHeight: '1.25' }}>
							{job.responsibilities?.slice(0, 4).map((resp, i) => (
								<li key={i} style={{ marginBottom: '1px' }}>
									{resp}
								</li>
							))}
						</ul>
					</div>
				))}
			</section>

			{/* EDUCACIÓN ACADÉMICA */}
			<section style={{ marginBottom: '10px' }}>
				<h3
					style={{
						fontSize: '9.5pt',
						fontWeight: '900',
						textTransform: 'uppercase',
						borderBottom: '1px solid #1a1816',
						paddingBottom: '1px',
						marginBottom: '6px',
						letterSpacing: '0.05em',
					}}>
					{t('studies.title')}
				</h3>
				{educationItems.map((edu, i) => (
					<div key={i} style={{ marginBottom: '4px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '8.5pt' }}>
							<span>
								{edu.title} — <span style={{ fontWeight: 'normal' }}>{edu.place}</span>
							</span>
							{/* CORRECCIÓN: Renderizado directo de la fecha completa de inicio a fin desde el JSON */}
							<span style={{ float: 'right', fontWeight: 'normal', fontSize: '8pt' }}>{edu.duration}</span>
						</div>
					</div>
				))}
			</section>

			{/* HABILIDADES & IA STACK */}
			<section style={{ marginBottom: '0' }}>
				<h3
					style={{
						fontSize: '9.5pt',
						fontWeight: '900',
						textTransform: 'uppercase',
						borderBottom: '1px solid #1a1816',
						paddingBottom: '1px',
						marginBottom: '4px',
						letterSpacing: '0.05em',
					}}>
					{t('skills.title')}
				</h3>
				<div style={{ fontSize: '8pt', lineHeight: '1.35' }}>
					<div style={{ marginBottom: '2px' }}>
						<strong>{t('skills.strategyTitle')}:</strong> {strategySkills.map((s) => s.title).join(', ')}
					</div>
					<div style={{ marginBottom: '2px' }}>
						<strong>{t('skills.technicalTitle')}:</strong> {technicalSkills.join(', ')}
					</div>
					<div>
						<strong>{t('skills.toolsTitle')}:</strong> {toolsSkills.join(', ')}
					</div>
				</div>
			</section>
		</div>
	);
}

export default PrintCVContent;
