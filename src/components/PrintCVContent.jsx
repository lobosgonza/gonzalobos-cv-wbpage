// src/components/PrintCVContent.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function PrintCVContent() {
	const { t, i18n } = useTranslation();
	const isEn = i18n.language === 'en';

	const pastExperience = t('experience.past', { returnObjects: true }) || [];
	const currentExperience = t('experience.current', { returnObjects: true }) || {};
	const educationItems = t('studies.items', { returnObjects: true }) || [];

	const rawCategories = t('skills.categories', { returnObjects: true });
	const categories = Array.isArray(rawCategories) ? rawCategories : [];

	const rawAccreditations = t('skills.accreditations.items', { returnObjects: true });
	const accreditations = Array.isArray(rawAccreditations) ? rawAccreditations : [];

	const sectionTitleStyle = {
		fontSize: '9.5pt',
		fontWeight: '900',
		textTransform: 'uppercase',
		borderBottom: '1px solid #1a1816',
		paddingBottom: '1px',
		marginBottom: '6px',
		letterSpacing: '0.05em',
	};

	const textStyle = { fontSize: '7.5pt', lineHeight: '1.25', margin: '0', textAlign: 'justify' };

	return (
		<div id='print-cv-area' className='hidden'>
			{/* ENCABEZADO (Full Width - Abarca las dos columnas) */}
			<header id='print-cv-header'>
				<p style={{ fontSize: '20pt', fontWeight: '900', margin: '0 0 1px 0', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: '1.1' }}>{t('hero.name')}</p>
				<p style={{ fontSize: '10pt', fontWeight: '700', color: '#0d9488', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{t('hero.title')}</p>
				<p style={{ fontSize: '7.5pt', color: '#1a1816', fontWeight: '700', margin: '0 0 3px 0' }}>
					{isEn
						? 'Santiago, Chile (Open to Relocation to Mexico | On-site / Hybrid / Remote)'
						: 'Santiago, Chile (Disponibilidad de traslado a México | Modalidad Presencial / Híbrida / Remota)'}
				</p>
				<p style={{ fontSize: '7.5pt', color: '#333', margin: '0' }}>
					<strong>Email:</strong> gonzalo.lobos.ramirez@gmail.com {' | '}
					<strong>{isEn ? 'Portfolio:' : 'Portafolio:'}</strong> gonzalobos.com {' | '}
					<strong>LinkedIn:</strong> in/gonzalo-lobos-ram {' | '}
					<strong>WhatsApp:</strong> +56 9 6596 1086
				</p>
			</header>

			{/* COLUMNA IZQUIERDA (32% del ancho) */}
			<div id='print-cv-left-col'>
				{/* SOBRE MÍ */}
				<section>
					<p style={sectionTitleStyle}>{t('navbar.about')}</p>
					<p dangerouslySetInnerHTML={{ __html: t('about.introduction') }} style={textStyle} />
				</section>

				{/* CAJA DE HERRAMIENTAS (Skills) */}
				<section>
					<p style={sectionTitleStyle}>{t('skills.title')}</p>
					<div style={{ fontSize: '7.5pt', lineHeight: '1.3' }}>
						{categories.map((cat, i) => {
							const allTools = Array.isArray(cat.groups) ? cat.groups.flatMap((group) => (Array.isArray(group.tools) ? group.tools : [])) : [];
							return (
								<div key={i} style={{ marginBottom: '3px' }}>
									<strong style={{ color: '#0d9488' }}>{cat.name}:</strong>
									<br />
									{allTools.join(' • ')}
								</div>
							);
						})}
					</div>
				</section>

				{/* ACREDITACIONES */}
				{accreditations.length > 0 && (
					<section>
						<p style={sectionTitleStyle}>{t('skills.accreditations.title', 'Acreditaciones')}</p>
						<div style={{ fontSize: '7.5pt', lineHeight: '1.3' }}>
							{accreditations.map((acc, i) => (
								<div key={i} style={{ marginBottom: '3px' }}>
									<strong>{acc.title}</strong>
									<br />
									<span style={{ color: '#555' }}>{acc.issuer}</span>
								</div>
							))}
						</div>
					</section>
				)}
			</div>

			{/* COLUMNA DERECHA (68% del ancho) */}
			<div id='print-cv-right-col'>
				{/* EXPERIENCIA PROFESIONAL */}
				<section>
					<p style={sectionTitleStyle}>{t('experience.sectionTitle')}</p>

					{/* Cargo Actual (Expansis Pro) */}
					{currentExperience && currentExperience.title && (
						<div style={{ marginBottom: '7px' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '900', fontSize: '8.5pt' }}>
								<span>
									{currentExperience.title} | <em style={{ fontStyle: 'normal', color: '#0d9488' }}>{currentExperience.place}</em>
								</span>
								<span style={{ fontWeight: 'normal', fontSize: '7.5pt' }}>{isEn ? 'May 2026 — Present' : 'may. 2026 — Actualidad'}</span>
							</div>
							<ul style={{ margin: '2px 0 0 0', paddingLeft: '12px', fontSize: '7.5pt', lineHeight: '1.3' }}>
								{Array.isArray(currentExperience.responsibilities) &&
									currentExperience.responsibilities.map((resp, i) => <li key={i} style={{ marginBottom: '2px' }} dangerouslySetInnerHTML={{ __html: resp }} />)}
							</ul>
						</div>
					)}

					{/* Cargos Anteriores (Solo caja principal: responsibilities) */}
					{Array.isArray(pastExperience) &&
						pastExperience.map((job) => (
							<div key={job.id} style={{ marginBottom: '7px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '900', fontSize: '8.5pt' }}>
									<span>
										{job.title} | <em style={{ fontStyle: 'normal', color: '#0d9488' }}>{job.place}</em>
									</span>
									<span style={{ fontWeight: 'normal', fontSize: '7.5pt' }}>{job.duration ? job.duration.split(' (')[0] : ''}</span>
								</div>
								<ul style={{ margin: '2px 0 0 0', paddingLeft: '12px', fontSize: '7.5pt', lineHeight: '1.3' }}>
									{Array.isArray(job.responsibilities) &&
										job.responsibilities.map((resp, i) => <li key={`resp-${i}`} style={{ marginBottom: '2px' }} dangerouslySetInnerHTML={{ __html: resp }} />)}
								</ul>
							</div>
						))}
				</section>

				{/* EDUCACIÓN ACADÉMICA */}
				<section>
					<p style={sectionTitleStyle}>{t('studies.title')}</p>
					{Array.isArray(educationItems) &&
						educationItems.map((edu, i) => (
							<div key={i} style={{ marginBottom: '3px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', fontWeight: '900', fontSize: '8pt' }}>
									<span>
										{edu.title} <span style={{ fontWeight: 'normal', color: '#555' }}>— {edu.place}</span>
									</span>
									<span style={{ fontWeight: 'normal', fontSize: '7.5pt', whiteSpace: 'nowrap', flexShrink: 0 }}>{edu.duration}</span>
								</div>
							</div>
						))}
				</section>
			</div>
		</div>
	);
}

export default PrintCVContent;
