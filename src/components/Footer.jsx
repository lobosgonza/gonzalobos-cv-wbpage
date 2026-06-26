import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();

    // Función para volver al top de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Animación suave
        });
    };

    return (
        <footer className="section">
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

            {/* Botones para cambiar el idioma */}
            <div className="content has-text-centered" style={{ marginTop: "10px" }}>
                <p className="has-text-white"><a className="has-text-white" onClick={() => i18n.changeLanguage('en')}>
                    English
                </a> | <a className="has-text-white" onClick={() => i18n.changeLanguage('es')}>
                        Español
                    </a></p>
                <p>
                    <strong>Gonzalo Lobos</strong> &copy; {new Date().getFullYear()} {t("footer.rights")}
                </p>
                {/* Botón para volver al inicio */}
                <button onClick={scrollToTop} className="button" style={{ marginTop: "10px" }}>
                    <span className="icon">
                        <i className="fas fa-arrow-up"></i>
                    </span>
                    <span>{t("footer.button")}</span>
                </button>


            </div>


        </footer>
    );
}

export default Footer;
