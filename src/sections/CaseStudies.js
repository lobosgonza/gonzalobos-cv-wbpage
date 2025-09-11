import React from 'react';
import { useTranslation } from 'react-i18next';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = () => {
    const { t } = useTranslation();
    const caseStudies = t('caseStudies.items', { returnObjects: true }) || [];

    return (
        <section id="caseStudies" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                        {t('caseStudies.title')}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        {t('caseStudies.subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.isArray(caseStudies) && caseStudies.map((study) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;