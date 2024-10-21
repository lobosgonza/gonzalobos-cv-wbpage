import React from "react";
import Card from "../components/Card";
import ActivityItem from "../components/ActivityItem";
import { useTranslation } from "react-i18next";

function Studies() {
    const { t } = useTranslation();
    const studies = t("studies.items", { returnObjects: true });

    return (
        <Card id="estudios" title={t("studies.title")}>
            <div className="content">
                {studies.map((study, index) => (
                    <ActivityItem
                        key={index}
                        title={study.title}
                        place={study.place}
                        duration={study.duration}
                        location={study.location}
                        responsibilities={study.responsibilities || []}
                    />
                ))}
            </div>
        </Card>
    );
}

export default Studies;
