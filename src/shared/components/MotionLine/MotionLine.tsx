"use client"

import { cn } from '@/shared/lib/utils'
import { motion, useScroll, useTransform } from 'motion/react'
import React, { useRef } from 'react'

export const MotionLine = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform the 0-1 value to a percentage string
  // el segundo parametro es un array que define el rango de valores: [start, end] ese rango quiere decir que el valor de scrollYProgress se transformara en un rango de valores: [0%, 190%]
  const height = useTransform(scrollYProgress, [.3, .8], ["0%", "180%"])


  return (
    <div ref={containerRef} className="flex flex-col w-1 justify-start bg-foreground/5 dark:bg-muted/30 rounded-full">
      <motion.div
        className={cn("rounded-b-full bg-linear-to-b from-blue-400/20 dark:from-purple-500/20 via-indgo-500 dark:via-blue-950 to-blue-500 dark:to-purple-500 shadow-2xl shadow-purple-500")}
        style={{
          height: height,
          scaleX: scrollYProgress
        }}
      >
        {/* {scrollYProgress} */}
      </motion.div>
    </div>
  )
}
