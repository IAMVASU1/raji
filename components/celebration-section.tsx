'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CelebrationCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const cards: CelebrationCard[] = [
  {
    id: 1,
    icon: '💝',
    title: 'Wrapped in Love',
    description: 'You deserve all the love in the world today and every day!',
    color: 'from-pink-300 to-pink-200',
  },
  {
    id: 2,
    icon: '🌟',
    title: 'Shining Bright',
    description: 'Your light brightens everyone\'s world in the most beautiful way.',
    color: 'from-purple-300 to-purple-200',
  },
  {
    id: 3,
    icon: '🎊',
    title: 'Pure Joy',
    description: 'May every moment be filled with sparkles, laughter, and happiness!',
    color: 'from-pink-400 to-rose-300',
  },
  {
    id: 4,
    icon: '✨',
    title: 'Magical You',
    description: 'You make the world more beautiful just by being in it.',
    color: 'from-purple-400 to-pink-300',
  },
];

export default function CelebrationSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-4">
          A Day Filled With...
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div
              className={`relative h-full bg-gradient-to-br ${card.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/50 overflow-hidden`}
            >
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              {/* Card content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-4"
                  animate={hoveredCard === card.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{card.title}</h3>

                {/* Description */}
                <p className="text-white/90 font-medium drop-shadow-md text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Animated border on hover */}
              {hoveredCard === card.id && (
                <motion.div
                  className="absolute inset-0 border-2 border-white rounded-3xl"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom celebration message */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.div
          className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border-2 border-pink-300 shadow-xl"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-3">
            Celebrating YOU Today! 🎉
          </p>
          <motion.p
            className="text-lg text-purple-600 font-semibold"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Thank you for being the amazing person you are 💖✨
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="mt-12 flex justify-center gap-4 flex-wrap text-4xl md:text-5xl">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block"
        >
          🎀
        </motion.span>
        <motion.span
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block"
        >
          🥹
        </motion.span>
        <motion.span
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block"
        >
          💝
        </motion.span>
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block twinkle"
        >
          ✨
        </motion.span>
      </div>
    </section>
  );
}
