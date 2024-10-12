import React from "react";
import Card from "../components/Card";
import ActivityItem from "../components/ActivityItem";



function Studies() {
    const studies = [
        {
            title: 'Magíster en Psicología Organizacional',
            place: 'Universidad Adolfo Ibáñez',
            type: '',
            duration: '2016 - 2017',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: []

        }, {
            title: 'Ingeniería Comercial, Mención en Administración de Empresas',
            place: 'Universidad Adolfo Ibáñez',
            type: '',
            duration: '2011 - 2015',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: []
        }, {
            title: 'Técnico en Fotografía Publicitaria',
            place: 'Instituto Profesional ARCOS',
            type: '',
            duration: '2018 - 2020',
            location: 'Santiago, Región Metropolitana de Santiago, Chile',
            responsibilities: []
        }
    ]




    return (
        <Card id='estudios' title='Estudios'>
            <div className='content'>


                {studies.map((study, index) => (
                    <ActivityItem
                        key={index}
                        title={study.title}
                        place={study.place}
                        type={study.type}
                        duration={study.duration}
                        location={study.location}
                        responsibilities={study.responsibilities}

                    />
                ))}


            </div>

        </Card>
    )
}


export default Studies