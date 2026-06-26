import { motion } from 'framer-motion'; // Importa framer-motion

function SkillsItem({ title, description, degree }) {
    return (


        <div className='p-4 activity-section'>
            <p className=''><strong>{title}:</strong> {description}</p>
        </div>


    )
}


export default SkillsItem