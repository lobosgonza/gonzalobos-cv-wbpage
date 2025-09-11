// src/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Img from "../assets/images/Gonzalo-lobos-Home-400x400.jpg";
import SectionTitle from '../components/SectionTitle';

function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6">
                <SectionTitle title={t('about.title')} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mt-12">
                    <motion.div className="md:col-span-1 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <img className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 object-cover" src={Img} alt={t('about.imageAlt')} />
                    </motion.div>
                    <div className="md:col-span-2 text-slate-600 dark:text-slate-300 space-y-4 text-lg">
                        <motion.p dangerouslySetInnerHTML={{ __html: t('about.introduction') }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} />
                        <motion.p dangerouslySetInnerHTML={{ __html: t('about.skills') }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} />
                        <motion.p className="font-semibold text-slate-800 dark:text-slate-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                            {t('about.callToAction')}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;