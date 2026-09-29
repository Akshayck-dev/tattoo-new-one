import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div className="flex flex-col items-center gap-5">
        <motion.div
          className="relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="1" opacity="0.25" />
            <circle cx="30" cy="30" r="20" stroke="white" strokeWidth="0.5" opacity="0.12" />
            <motion.path
              d="M30 10 L30 50"
              stroke="white"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.path
              d="M18 20 Q30 35 42 20"
              stroke="#c3a475"
              strokeWidth="1.25"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="loading-logo"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          INKWELL
        </motion.div>

        <motion.div
          className="w-20 h-px bg-white/10 overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
