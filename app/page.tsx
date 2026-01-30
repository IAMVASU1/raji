'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingElements from '@/components/floating-elements';
import MusicToggle from '@/components/music-toggle'; // Import MusicToggle component

const RANDOM_MESSAGES = [
  'Keep shining bright!',
  'You are amazing!',
  'Stay wonderful!',
  'Keep being awesome!',
  'You light up the world!',
  'Sparkle like the stars!',
  'You are truly special!',
  'Never stop shining!',
  'You deserve all the love!',
  'Be your best self!',
  'Radiate positivity!',
  'You make it beautiful!',
  'Keep dreaming big!',
  'You are magical!',
  'Believe in yourself!',
  'Shine on, beautiful soul!',
];

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [showMessage, setShowMessage] = useState(false);
  const [usedMessages, setUsedMessages] = useState<string[]>([]);

  const handleMagicClick = () => {
    const availableMessages = RANDOM_MESSAGES.filter(msg => !usedMessages.includes(msg));

    if (availableMessages.length === 0) {
      setUsedMessages([]);
      availableMessages.push(...RANDOM_MESSAGES);
    }

    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const newMessage = availableMessages[randomIndex];

    setUsedMessages(prev => [...prev, newMessage]);
    setShowMessage(false);

    setTimeout(() => {
      setCurrentMessage(newMessage);
      setShowMessage(true);
    }, 100);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 relative overflow-hidden">
      <FloatingElements /> {/* Use MusicToggle component */}

      <div className="relative z-10 pt-8 px-4">
        {/* Header with cake and emojis */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center gap-8 mb-6">
            <motion.span
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-6xl"
            >
              🎂
            </motion.span>
            <motion.span
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.2,
              }}
              className="text-6xl"
            >
              💖
            </motion.span>
            <motion.span
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0.4,
              }}
              className="text-6xl"
            >
              🎂
            </motion.span>
          </div>

          <h1 className="text-7xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Happy Birthday Raji 💕
          </h1>
          <p className="text-3xl text-pink-600 mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
            My Beautiful Birthday Girl 💕
          </p>
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 px-4"
        >
          <div className="bg-white/95 rounded-3xl p-8 shadow-xl border-4 border-pink-200">
            <div className="text-center mb-6">
              <span className="text-4xl">💖</span>
            </div>

            <p className="text-gray-700 italic text-lg mb-6 leading-relaxed text-center">
              "Your mind is like a powerful computer - solving problems with grace and keeping memories safe in your heart.
            </p>

            <p className="text-pink-500 font-semibold mb-3 flex items-center justify-center gap-2 text-lg">
              💻 Your thinking is so clear and beautiful;
            </p>
            <p className="text-orange-400 font-semibold mb-6 flex items-center justify-center gap-2 text-lg">
              🌿 Your heart heals everyone around you.
            </p>

            <p className="text-gray-700 italic text-lg leading-relaxed text-center">
              You are kindness, you are healing, and you bring people together with love."
            </p>

            <div className="flex justify-center gap-3 mt-6 text-2xl">
              <span>⭐</span>
              <span>💙</span>
              <span>🌸</span>
              <span>😘</span>
              <span>⭐</span>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12 px-4"
        >
          <h2 className="text-5xl font-bold text-pink-500 text-center mb-8" style={{ fontFamily: 'Caveat, cursive' }}>
            The Birthday Queen 👑💕
          </h2>

          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-3xl p-4 shadow-2xl border-8 border-pink-100 w-72 h-96 flex items-center justify-center transform -rotate-2">
              <img
                src="/assets/birthday-girl.jpeg"
                alt="Birthday girl"
                className="w-full h-full object-cover rounded-2xl"
              />

            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: './assets/image1.jpeg', caption: 'Sparkling like the stars' },
              { img: './assets/image2.jpeg', caption: 'Grace & elegance' },
              { img: './assets/image3.jpeg', caption: 'Cozy & adorable' },
              { img: './assets/image4.jpeg', caption: 'Simply beautiful' },
            ]
              .map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="bg-white rounded-3xl p-3 shadow-xl border-6 border-pink-100 cursor-pointer transform hover:-rotate-1"
                >
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.caption}
                    className="w-full h-40 object-cover rounded-2xl mb-3"
                  />
                  <p className="text-sm text-gray-700 text-center font-semibold" style={{ fontFamily: 'Caveat, cursive' }}>
                    {item.caption}
                  </p>
                </motion.div>
              ))}
          </div>
        </motion.div>


      </div>
    </main>
  );
}
