import React from "react";
import Card from "../components/Card";
import SkillsItem from "../components/SkillsItem";
import { useTranslation } from "react-i18next";

function Skills() {
    const { t } = useTranslation();
    const skills = t("skills.items", { returnObjects: true });

    return (
        <Card id="habilidades" title={t("skills.title")}>
            <div className="content">
                {skills.map((skill, index) => (
                    <SkillsItem
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        degree={skill.degree}
                    />
                ))}
            </div>
        </Card>
    );
}

export default Skills;
