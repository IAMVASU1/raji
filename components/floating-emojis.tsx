'use client';

import { motion } from 'framer-motion';

const EMOJIS = ['🌹', '🦋', '🌸', '🌺', '🌻', '🌷', '💐', '🌹', '🦋'];

export default function FloatingEmojis() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {EMOJIS.map((emoji, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 200 + 100,
            opacity: 0.3,
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 600 - 300,
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute text-4xl"
          style={{
            left: `${10 + index * 10}%`,
            top: `${20 + index * 12}%`,
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}
