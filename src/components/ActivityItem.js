
import { motion } from 'framer-motion'; // Importa framer-motion

function ActivityItem({ title, place, type, duration, location, responsibilities }) {
    return (

        <div className='p-4 activity-section'>
            <h4 className=''>{title}</h4>
            <p>
                <strong>{place}</strong> · {duration}
            </p>
            <p>{location}</p>
            <ul>
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>

    );
}

export default ActivityItem  