import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';
import CaseStudyCard from '../components/CaseStudyCard';
import CardSlider from '../components/CardSlider'; // Slider de 1 item (móvil)
import CaseStudySlider from '../components/CaseStudySlider'; // Slider de 3 items (desktop)
import AnimatedSection from '../components/AnimatedSection';

function CaseStudies() {
    const { t } = useTranslation();
    const caseStudies = t('caseStudies.items', { returnObjects: true }) || [];

    const validCaseStudies = Array.isArray(caseStudies)
        ? caseStudies.filter(item => item && typeof item === 'object')
        : [];

    const DESKTOP_SLIDER_THRESHOLD = 4;
    const studiesCount = validCaseStudies.length;

    // Esta función renderiza la card.
    // La envolvemos en un div 'h-full' para que Swiper alinie las alturas.
    const renderSlideCard = (study) => (
        <div className="h-full">
            <CaseStudyCard key={study.id} study={study} />
        </div>
    );

    return (
        <section id="caseStudies" className="py-16 sm:py-20 bg-background-light dark:bg-background-dark">
            <AnimatedSection>
                <div className="container mx-auto px-6">
                    <SectionTitle title={t('caseStudies.title')} subtitle={t('caseStudies.subtitle')} />

                    {/* --- CASO 1: Grid (Solo para Desktop y si hay MENOS de 4 items) --- */}
                    {studiesCount < DESKTOP_SLIDER_THRESHOLD && (
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {validCaseStudies.map(renderSlideCard)}
                        </div>
                    )}

                    {/* --- CASO 2: Slider (Solo para Móvil) --- */}
                    <div className="md:hidden">
                        <CardSlider
                            items={validCaseStudies}
                            renderItem={renderSlideCard}
                        />
                    </div>

                    {/* --- CASO 3: Slider Multi-Item (Solo para Desktop y si hay 4 O MÁS items) --- */}
                    {studiesCount >= DESKTOP_SLIDER_THRESHOLD && (
                        <div className="hidden md:block">
                            <CaseStudySlider
                                items={validCaseStudies}
                                renderItem={renderSlideCard}
                            />
                        </div>
                    )}

                </div>
            </AnimatedSection>
        </section>
    );
}

export default CaseStudies;