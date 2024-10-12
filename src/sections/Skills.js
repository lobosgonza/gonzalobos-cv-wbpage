import React from "react";
import Card from "../components/Card";
import ActivityItem from "../components/ActivityItem";
import SkillsItem from "../components/SkillsItem";



function Skills() {
    const skills = [
        {
            title: 'Inglés',
            description: 'Medio.',
            degree: '5',

        }, {
            title: 'Desarrollo Web',
            description: 'HTML, CSS, JS.',
            degree: '8',
        }, {
            title: 'Diseño',
            description: 'Photoshop, Illustrator, Lightroom, Capture One.',
            degree: '8',
        }
        , {
            title: 'Negocios y Organización',
            description: 'Gestión de proyectos, Análisis de negocios, Planificación estratégica.',
            degree: '8',
        }
    ]


    return (
        <Card id='habilidades' title='Habilidades'>
            <div className='content'>


                {skills.map((skills, index) => (
                    <SkillsItem
                        key={index}
                        title={skills.title}
                        description={skills.description}
                        degree={skills.degree}


                    />
                ))}


            </div>

        </Card>
    )
}


export default Skills