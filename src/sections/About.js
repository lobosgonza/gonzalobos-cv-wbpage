import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion"; // Importa framer-motion
import { Trans, useTranslation } from "react-i18next"; // Importa react-i18next

function About() {
    const { t } = useTranslation(); // Hook de traducción

    return (
        <>
            <Card id="informacion-personal" title={t("about.title")}>
                <p>
                    <Trans i18nKey="about.introduction">
                        I am a <strong>Commercial Engineer specialized in E-commerce and Web Development</strong>, with solid experience leading high-impact projects in digital environments. My background includes <strong>managing e-commerce strategies</strong>, <strong>optimizing user experiences (UX/UI)</strong>, and <strong>implementing high-performance campaigns</strong> on websites and mobile applications. I have collaborated with global brands like <strong>Nespresso</strong>, developing digital solutions that increase conversion rates and enhance customer satisfaction.
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="about.skills">
                        My passion for technology and digital channels has allowed me to integrate <strong>technical and analytical skills</strong> to design user-centered shopping experiences and monitor performance through tools like <strong>Google Analytics</strong>. I also have experience in <strong>front-end development</strong>, where I combine my knowledge of <strong>design</strong> and <strong>programming</strong> to create functional and visually appealing interfaces.
                    </Trans>
                </p>
                <p>{t("about.callToAction")}</p>
                <div className="buttons is-centered"></div>
            </Card>
        </>
    );
}

export default About;
