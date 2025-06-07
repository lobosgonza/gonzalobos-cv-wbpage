// src/data/es/content.js

export const content = {
    navbar: {
        about: "¿Quién soy?",
        experience: "Experiencia",
        studies: "Estudios",
        skills: "Habilidades",
        contact: "Contacto"
    },
    hero: {
        name: "Gonzalo Lobos",
        title: "Ingeniero Comercial especialista en E-commerce y Desarrollo Web.",
        subtitle: "Convierto estrategias de negocio en experiencias digitales que impulsan el crecimiento y la conversión.",
        primaryButton: "Ver Casos de Estudio",
        secondaryButton: "Contacto"
    },
    about: {
        title: "Sobre Mí",
        introduction: "Soy Ingeniero Comercial de la UAI, y mi pasión es construir los puentes entre la <strong>estrategia de negocio y la tecnología</strong>. Mi experiencia en el dinámico mundo del e-commerce, especialmente liderando iniciativas para una marca global como <strong>Nespresso</strong>, me ha enseñado que las mejores soluciones digitales nacen de una profunda comprensión del cliente y los objetivos comerciales. No se trata solo de vender online, sino de crear <strong>experiencias de usuario memorables</strong> que impulsan la conversión y fomentan la lealtad.",
        skills: "Mi enfoque es <strong>data-driven</strong>. Utilizo herramientas como <strong>Google Analytics</strong> para obtener insights y transformarlos en acción, optimizando cada punto de contacto del funnel de ventas. Esta visión analítica se complementa con mi experiencia en <strong>desarrollo front-end</strong>, lo que me permite no solo diseñar la estrategia, sino también prototipar, validar ideas y colaborar eficazmente con los equipos técnicos para asegurar que la visión se ejecute con <strong>precisión y calidad</strong>. Este portafolio, construido por mí desde cero con React, es un ejemplo de esa pasión por la ejecución técnica.",
        callToAction: "Busco conectar con equipos innovadores donde pueda aportar esta visión híbrida para crear productos digitales excepcionales. Si mi perfil resuena contigo, hablemos."
    },
    experience: {
        sectionTitle: "Experiencia",
        jobTitle: "E-commerce Merchandising Specialist",
        company: "Nestlé Nespresso SA",
        startDate: "2021-12-01",
        since: "{{years}} años y {{months}} meses",
        pastExperienceTitle: "Experiencia Previa",
        responsibilities: [
            "Liderazgo de la estrategia de e-commerce de Nespresso.com.",
            "Implementación de mejoras UX/UI.",
            "Monitoreo del proceso de compra en Nespresso.cl.",
            "Desarrollo de campañas online como Cyber Day y Black Friday.",
            "Seguimiento de KPI a través de Google Analytics.",
            "Mejora del posicionamiento SEO del sitio web."
        ],
        pastExperiences: [
            {
                id: 1,
                title: "Gestión de Desarrollo de Capacitaciones",
                place: "Todo Mejora",
                type: "Jornada completa",
                duration: "marzo de 2021 - diciembre de 2021 (10 meses)",
                location: "Santiago, Región Metropolitana de Santiago, Chile",
                responsibilities: [
                    "Coordinación de capacitaciones en salud y educación.",
                    "Control de ingresos y gastos.",
                    "Coordinación de pagos con instituciones."
                ]
            },
            {
                id: 2,
                title: "Desarrollador de Front-End",
                place: "Simple y Creativo",
                type: "Jornada completa",
                duration: "marzo de 2020 - febrero de 2021 (1 año)",
                location: "Santiago, Región Metropolitana de Santiago, Chile",
                responsibilities: [
                    "Coordinación con clientes para generar mockups y wireframes acordes a sus necesidades para el desarrollo de las páginas web solicitadas."
                ]
            },
            {
                id: 3,
                title: "Técnico en Fotografía",
                place: "Estudio FE",
                type: "Contrato de prácticas",
                duration: "octubre de 2019 - febrero de 2021 (1 año y 5 meses)",
                location: "Santiago, Región Metropolitana de Santiago, Chile",
                responsibilities: [
                    "Asistencia en producciones fotográficas y audiovisuales para grandes marcas.",
                    "Coordinación de casting para proyectos fotográficos y audiovisuales."
                ]
            },
            {
                id: 4,
                title: "Marketing Product Management",
                place: "Grupo Copesa",
                type: "Contrato de prácticas",
                duration: "octubre de 2018 - febrero de 2019 (5 meses)",
                location: "Santiago, Región Metropolitana de Santiago, Chile",
                responsibilities: [
                    "Coordinación para la implementación de material gráfico en La Tercera, La Hora, Motores y Paula.",
                    "Coordinación con el área de diseño para la construcción de material gráfico para campañas de suscripción al periódico La Tercera.",
                    "Coordinación con el área de diagramación para la implementación de gráficos en el periódico en las fechas establecidas.",
                    "Generación de contratos con diferentes proveedores para productos de suscripción al periódico.",
                    "Control de ingresos y gastos del área de suscripciones de La Tercera."
                ]
            }
        ]
    },
    studies: {
        title: "Estudios",
        items: [
            {
                id: 1,
                title: "Magíster en Psicología Organizacional",
                place: "Universidad Adolfo Ibáñez",
                duration: "2016 - 2017",
                location: "Santiago, Chile"
            },
            {
                id: 2,
                title: "Ingeniería Comercial, Mención en Administración de Empresas",
                place: "Universidad Adolfo Ibáñez",
                duration: "2011 - 2015",
                location: "Santiago, Chile"
            },
            {
                id: 3,
                title: "Técnico en Fotografía Publicitaria",
                place: "Instituto Profesional ARCOS",
                duration: "2018 - 2020",
                location: "Santiago, Chile"
            },
            {
                id: 4,
                title: "The Complete 2024 Web Development Bootcamp",
                place: "Udemy",
                duration: "2020",
                location: "Curso Online"
            }
        ]
    },
    skills: {
        title: "Caja de Herramientas", // Un título más original que "Habilidades"
        // Nueva estructura de items en 3 categorías claras
        items: {

            // Columna 1: Habilidades de alto nivel
            strategy: [
                {
                    title: "Estrategia E-commerce",
                    description: "Definición de hoja de ruta, gestión de P&L y liderazgo de campañas de alto impacto (Cyber, Black Friday)."
                },
                {
                    title: "Optimización de la Conversión (CRO)",
                    description: "Análisis del funnel de ventas, A/B testing y mejora continua de la experiencia de usuario (UX/UI)."
                },
                {
                    title: "Marketing Digital y SEO",
                    description: "Estrategias de posicionamiento orgánico, SEM y automatización de marketing para la fidelización (CRM)."
                },
                {
                    title: "Gestión de Proyectos Digitales",
                    description: "Coordinación de equipos multidisciplinarios para la ejecución de proyectos tecnológicos y comerciales."
                }
            ],

            // Columna 2: Habilidades de desarrollo y código
            technical: [
                "React.js",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Git & GitHub",
                "SQL para análisis de datos"
            ],

            // Columna 3: Software y plataformas específicas
            tools: [
                "Google Analytics 4",
                // "Salesforce Commerce Cloud", // <--- EJEMPLO, aquí iría la que me digas
                "Photoshop",
                "Illustrator",
                "Lightroom",
                "Capture One",
                "Inglés Profesional (B2/C1)"
            ]
        }
    },
    caseStudies: [
        {
            id: 1,
            title: "Optimización del Funnel de Conversión",
            tags: ["CRO", "A/B Testing", "Google Analytics", "UX"],
            problem: "La tasa de conversión en la página de producto era un 8% inferior al promedio de la industria, generando una pérdida de ventas potenciales.",
            objective: "Mi objetivo era incrementar la tasa de conversión en un 10% en 3 meses, sin afectar el ticket promedio.",
            actions: [
                "Analicé el comportamiento de los usuarios con mapas de calor y Google Analytics, identificando cuellos de botella.",
                "Lideré una serie de tests A/B en los llamados a la acción (CTA) y las descripciones de producto.",
                "Colaboré con el equipo de desarrollo para implementar un nuevo módulo de 'Compra Rápida'."
            ],
            results: [
                "Incremento del 12% en la tasa de conversión.",
                "Reducción del 20% en la tasa de rebote de la página."
            ]
        },
        {
            id: 2,
            title: "Reducción de la Tasa de Abandono con Acciones Segmentadas",
            tags: ["CRM", "Segmentación", "Fidelización"],
            problem: "Se detectó una alta tasa de abandono de clientes recurrentes, representando un riesgo para los ingresos sostenidos del canal.",
            objective: "Diseñar e implementar una estrategia de incentivos segmentados para disminuir la tasa de abandono en un 15%.",
            actions: [
                "Lideré la creación de campañas personalizadas dirigidas a segmentos específicos de usuarios, ofreciendo beneficios exclusivos para incentivar la recompra a través del canal online."
            ],
            results: [
                "Disminución de la tasa de abandono en un 15%, fortaleciendo la lealtad de los clientes y asegurando los ingresos recurrentes."
            ]
        },
        {
            id: 3,
            title: "Potenciación del Canal Pickup y Autoservicio",
            tags: ["Omnicanalidad", "UX", "Eficiencia Operacional"],
            problem: "Existía la oportunidad de mejorar la experiencia omnicanal y reducir la carga operativa del equipo de soporte al cliente.",
            objective: "Fortalecer el sistema de retiro en tienda (pickup) y comunicar eficazmente las herramientas de autoservicio para los clientes.",
            actions: [
                "Optimicé el flujo de compra para la modalidad pickup, resultando en una experiencia más fluida.",
                "Se mejoró la comunicación, invitando a los clientes a vivir la experiencia en la boutique.",
                "Finalmente, se optimizaron los correos transaccionales para agilizar el retiro de pedidos, disminuyendo así su tiempo de permanencia en tienda."
            ],
            results: [
                "Aumento del 15% en órdenes con modalidad pickup.",
                "La adopción de estas iniciativas como buenas prácticas por la gerencia global de Nespresso.",
            ]
        }
    ],
    contact: {
        title: "Contacto",
        email: "Correo Electrónico: ",
        phone: "Teléfono: ",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub"
    },
    footer: {
        rights: "Todos los derechos reservados.",
        button: "Volver al inicio"
    }
};