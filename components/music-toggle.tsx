'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Create a simple sweet music data URL (using a short beep pattern)
  const sweetMusicUrl = 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==';

  // Fallback: Use a royalty-free audio service or embedded audio
  const musicUrl =
    'https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleAudioPlay = () => setIsPlaying(true);
    const handleAudioPause = () => setIsPlaying(false);
    const handleAudioEnded = () => {
      setIsPlaying(false);
      // Auto-play again for continuous background music
      audio.currentTime = 0;
      audio.play().catch(() => console.log('Autoplay prevented'));
    };

    audio.addEventListener('play', handleAudioPlay);
    audio.addEventListener('pause', handleAudioPause);
    audio.addEventListener('ended', handleAudioEnded);

    return () => {
      audio.removeEventListener('play', handleAudioPlay);
      audio.removeEventListener('pause', handleAudioPause);
      audio.removeEventListener('ended', handleAudioEnded);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.log('Autoplay prevented:', error);
        setIsPlaying(true);
      });
    }
  };

  return (
    <>
      {/* Floating music button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed top-8 right-8 z-50 bg-gradient-to-br from-pink-400 to-purple-400 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {isPlaying ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            🎵
          </motion.span>
        ) : (
          <span>🔊</span>
        )}
      </motion.button>

      {/* Audio element with crossOrigin for CORS compatibility */}
      <audio ref={audioRef} loop crossOrigin="anonymous" preload="auto">
        <source src={musicUrl} type="audio/mpeg" />
        <source src={sweetMusicUrl} type="audio/wav" />
      </audio>

      {/* Music playing indicator */}
      {isPlaying && (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
            className="text-3xl"
          >
            ♪
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
            className="text-3xl"
          >
            ♫
          </motion.div>
        </div>
      )}
    </>
  );
}
