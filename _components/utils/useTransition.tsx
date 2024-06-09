'use client'

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const AppTransition = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <ul ref={ref}>
      {[100, 200, 300].map((delay, index) => (
        <motion.li
          key={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ delay: delay / 1000 }}
        >
          Item {index + 1}
        </motion.li>
      ))}
    </ul>
  );
};

export default AppTransition;
