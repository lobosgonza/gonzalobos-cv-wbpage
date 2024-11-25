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
