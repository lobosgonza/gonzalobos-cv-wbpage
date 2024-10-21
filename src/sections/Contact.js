import React from "react";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <Card id="contacto" title={t("contact.title")}>
                <p>
                    <strong>{t("contact.email")}</strong>
                    <i className="fas fa-envelope" style={{ marginLeft: "10px", marginRight: "8px" }}></i>
                    gonzalo.lobos.ramirez@gmail.com
                </p>
                <p>
                    <strong>{t("contact.phone")}</strong>
                    <i className="fas fa-phone" style={{ marginLeft: "10px", marginRight: "8px" }}></i>
                    +569 659 610 86
                </p>
                <div className="buttons is-centered">
                    <a
                        href="https://wa.me/56965961086"
                        target="_blank"
                        className="button is-success"
                        rel="noopener noreferrer"
                    >
                        <span className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </span>
                        <span>{t("contact.whatsapp")}</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gonzalo-lobos-ram%C3%ADrez/"
                        target="_blank"
                        className="button is-info"
                        rel="noopener noreferrer"
                    >
                        <span className="icon">
                            <i className="fab fa-linkedin"></i>
                        </span>
                        <span>{t("contact.linkedin")}</span>
                    </a>

                    <a
                        href="https://github.com/lobosgonza"
                        target="_blank"
                        className="button is-dark"
                        rel="noopener noreferrer"
                    >
                        <span className="icon">
                            <i className="fab fa-github"></i>
                        </span>
                        <span>{t("contact.github")}</span>
                    </a>
                </div>
            </Card>
        </>
    );
}

export default Contact;
