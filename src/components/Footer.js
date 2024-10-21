import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    // Función para volver al top de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Animación suave
        });
    };

    return (
        <footer className="section">
            <div className="content has-text-centered">
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
