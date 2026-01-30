'use client';

import { motion } from 'framer-motion';

const FloatingEmoji = ({ emoji, delay, duration, x, y }: any) => (
  <motion.div
    className="absolute text-4xl md:text-5xl pointer-events-none"
    animate={{
      x: [x, x + 20, x - 20, x],
      y: [y, y - 30, y + 30, y],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: 'easeInOut',
    }}
  >
    {emoji}
  </motion.div>
);

export default function FloatingElements() {
  const emojis = [
    { emoji: '✨', x: '10%', y: '20%', delay: 0, duration: 8 },
    { emoji: '💖', x: '80%', y: '15%', delay: 0.5, duration: 10 },
    { emoji: '🎀', x: '20%', y: '60%', delay: 1, duration: 9 },
    { emoji: '⭐', x: '75%', y: '70%', delay: 0.3, duration: 11 },
    { emoji: '💝', x: '15%', y: '80%', delay: 0.8, duration: 9.5 },
    { emoji: '🌸', x: '85%', y: '40%', delay: 0.2, duration: 10.5 },
    { emoji: '💫', x: '50%', y: '25%', delay: 1.2, duration: 8.5 },
    { emoji: '🎈', x: '30%', y: '45%', delay: 0.6, duration: 12 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {emojis.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl md:text-5xl"
          style={{
            left: item.x,
            top: item.y,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Floating clouds */}
      <motion.div
        className="absolute text-6xl md:text-8xl opacity-40"
        style={{ left: '5%', top: '10%' }}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute text-6xl md:text-7xl opacity-30"
        style={{ right: '5%', top: '30%' }}
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
      >
        ☁️
      </motion.div>
    </div>
  );
}
