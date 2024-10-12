function Footer() {

    // Función para volver al top de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animación suave
        });
    };


    return (
        <footer className="section">
            <div className="content has-text-centered">
                <p>
                    <strong>Gonzalo Lobos</strong> &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </p>
                {/* Botón para volver al inicio */}
                <button onClick={scrollToTop} className="button" style={{ marginTop: '10px' }}>
                    <span className="icon">
                        <i className="fas fa-arrow-up"></i>
                    </span>
                    <span>Volver al Top</span>
                </button>
            </div>
        </footer>
    );
}

export default Footer