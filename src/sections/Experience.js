
import Card from "../components/Card";
import ActivityItem from "../components/ActivityItem";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion


// Función para calcular la experiencia laboral
function calculateExperience(startDate) {
    const start = new Date(startDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    // Si el mes actual es anterior al mes de inicio, restar un año y sumar los meses restantes
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
}

function ExperienceSection() {
    const [experience, setExperience] = useState({ years: 0, months: 0 });

    useEffect(() => {
        const { years, months } = calculateExperience('2021-12-01'); // Fecha de inicio en Nestlé
        setExperience({ years, months });
    }, []);

    return (
        // <motion.div
        //     className='p-4 experience-section'
        //     initial={{ opacity: 0, y: 20 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 1 }}
        // >
        <div className='experience-section'>
            <h4 className='subtitle'>Ecommerce Merchandising Specialist</h4>
            <p>
                <strong className=''>Nestlé Nespresso SA</strong> · Jornada completa
            </p>
            <p>diciembre 2021 - actualidad ({`${experience.years} años y ${experience.months} meses`})</p>
            <p>Santiago, Región Metropolitana de Santiago, Chile · Híbrido</p>
            <ul>
                <li>Liderar la estrategia de Ecommerce de nespresso.com, asegurando una correcta experiencia de compra y procesos de activación de campañas en el sitio web y app.</li>
                <li>Implementación de mejoras UX/UI en plataformas digitales de Nespresso.</li>
                <li>Monitoreo del proceso de compra en Nespresso.cl para asegurar una correcta realización de acuerdo al journey establecido.</li>
                <li>Desarrollar e implementar campañas online como Cyber Day, Cyber Monday y Black Friday, lideradas por el equipo de Ecommerce.</li>
                <li>Seguimiento de KPIs (sesiones, impresiones, compras, entre otros) a través de Google Analytics.</li>
                <li>Implementación de acciones para mejorar el posicionamiento orgánico (SEO) del sitio web de Nespresso.cl.</li>
            </ul>
        </div>
        // </motion.div>
    );
}





function Experience() {
    const experiences = [

        {
            title: 'Gestión de Desarrollo de Capacitaciones',
            place: 'Todo Mejora',
            type: 'Jornada Completa',
            duration: 'marzo de 2021 - diciembre de 2021 (10 meses)',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: [
                'Coordinación de capacitaciones para instituciones de salud y educación en el área de diversidad sexual y de género.',
                'Generación de control y registro de ingresos y gastos de la operación.',
                'Coordinación con instituciones para generar pagos dentro de los plazos establecidos.',
            ],
        },
        {
            title: 'Desarrollador de front-end',
            place: 'Simple y Creativo',
            type: 'Jornada completa',
            duration: 'marzo de 2020 - febrero de 2021 (1 año)',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: [
                'Coordinación con clientes para generar Mockups y Wireframes acordes a sus necesidades para el desarrollo de páginas web solicitadas.',
            ],
        },
        {
            title: 'Técnico en Fotografía',
            place: 'Estudio FE',
            type: 'Práctica Profesional',
            duration: 'octubre de 2019 - diciembre de 2019 (3 meses)',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: [
                'Asistencia en producciones fotográficas y audiovisuales para grandes marcas.',
                'Coordinación de casting para proyectos fotográficos y audiovisuales.',
            ],
        },
        {
            title: 'Marketing Product Management',
            place: 'Grupo Copesa',
            type: 'Proyecto',
            duration: 'junio de 2015 - diciembre de 2015 (7 meses)',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: [
                'Coordinación para la implementación de material gráfico en La Tercera, La Hora, Motores y Paula.',
                'Coordinación con el área de diseño para la construcción de material gráfico para campañas de suscripción al periódico La Tercera.',
                'Coordinación con el área de diagramación para la implementación de gráficos en el periódico en las fechas establecidas.',
                'Generación de contratos con diferentes proveedores para productos de suscripción al periódico.',
                'Control de ingresos y gastos del área de suscripciones de La Tercera.',
            ],
        },
    ];



    return (<>
        {/* Sección 3: Experiencia */}
        <Card id='experiencia' title='Experiencia'>
            <div className='content'>
                <ExperienceSection />
                {experiences.map((experience, index) => (
                    <ActivityItem
                        key={index}
                        title={experience.title}
                        place={experience.place}
                        type={experience.type}
                        duration={experience.duration}
                        location={experience.location}
                        responsibilities={experience.responsibilities}
                    />
                ))}
            </div>
        </Card>


    </>)
}

export default Experience