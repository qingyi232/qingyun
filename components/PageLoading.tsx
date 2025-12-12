'use client'

import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

export function PageLoading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-cream-50 dark:bg-moss-900 flex items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-moss-500"
      >
        <Leaf className="w-12 h-12" />
      </motion.div>
    </motion.div>
  )
}
