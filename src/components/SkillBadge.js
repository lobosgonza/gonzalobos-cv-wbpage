// src/components/SkillBadge.jsx

import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name }) => {
    const badgeVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-3 py-1 rounded-md text-sm"
            variants={badgeVariants}
        >
            {name}
        </motion.div>
    );
};

export default SkillBadge;