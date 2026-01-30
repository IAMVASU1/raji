'use client';

import { motion } from 'framer-motion';

export default function BirthdayHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const heartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="text-center pt-20 pb-10 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated hearts around title */}
      <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
        <motion.div variants={heartVariants} className="text-5xl md:text-7xl">
          💖
        </motion.div>
        <motion.div variants={heartVariants} className="text-5xl md:text-7xl">
          🎀
        </motion.div>
        <motion.div variants={heartVariants} className="text-5xl md:text-7xl">
          💖
        </motion.div>
      </div>

      {/* Main heading */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text mb-4 drop-shadow-lg"
      >
        Happy Birthday!
      </motion.h1>

      {/* Subheading with emojis */}
      <motion.div variants={itemVariants} className="flex justify-center gap-2 flex-wrap mb-8">
        <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0s' }}>
          🎂
        </span>
        <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>
          ✨
        </span>
        <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>
          🎉
        </span>
        <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>
          🥹
        </span>
        <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.8s' }}>
          💗
        </span>
      </motion.div>

      {/* Sparkly subtitle */}
      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl text-pink-600 font-medium mb-6"
      >
        Wishing you a day filled with love, joy, and endless sparkles!
      </motion.p>

      {/* Animated decoration line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
      />
    </motion.div>
  );
}
