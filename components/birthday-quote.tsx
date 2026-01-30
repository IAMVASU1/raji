'use client';

import { motion } from 'framer-motion';

export default function BirthdayQuote() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="py-16 px-4 md:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Opening emoji */}
          <motion.div variants={itemVariants} className="text-4xl mb-6">
            💻✨
          </motion.div>

          {/* Quote text */}
          <motion.div className="space-y-4">
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-pink-600 font-semibold">
              Like a powerful processor running at peak performance,
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-purple-600 font-medium"
            >
              your mind is brilliantly architected—processing moments with grace, logic, and creativity.
            </motion.p>

            <motion.div variants={itemVariants} className="h-1 w-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto my-4" />

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-pink-700 font-medium"
            >
              And like the healing energy of Ayurveda and nature's gentle wisdom,
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-purple-600 font-semibold"
            >
              your soul brings balance, warmth, and wellness to everyone around you. 🌿💚
            </motion.p>
          </motion.div>

          {/* Closing emojis */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 mt-8 text-3xl md:text-4xl flex-wrap"
          >
            <span className="twinkle">💫</span>
            <span className="twinkle" style={{ animationDelay: '0.3s' }}>
              🥹
            </span>
            <span className="twinkle" style={{ animationDelay: '0.6s' }}>
              💗
            </span>
            <span className="twinkle" style={{ animationDelay: '0.9s' }}>
              🌟
            </span>
          </motion.div>

          {/* Beautiful closing line */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-pink-600 font-bold text-lg md:text-xl"
          >
            May your day be as magical as you are! ✨🎂💖
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
