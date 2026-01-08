"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
  transitionDuration?: number;
  moveFrom?: "left" | "right" | "up" | "down";
  fade?: boolean;
  delay?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

export const AnimatedContainer = ({
  children,
  transitionDuration = 0.5,
  moveFrom,
  fade = true,
  delay = 0,
  className = "",
  distance = 30,
  once = true,
}: AnimatedContainerProps) => {
  // Configuración inicial (donde empieza el elemento)
  const initial: any = {};
  
  if (fade) {
    initial.opacity = 0;
  }

  if (moveFrom) {
    switch (moveFrom) {
      case "left":
        initial.x = -distance;
        break;
      case "right":
        initial.x = distance;
        break;
      case "up":
        initial.y = -distance;
        break;
      case "down":
        initial.y = distance;
        break;
    }
  }

  // Configuración de destino (donde termina el elemento)
  const animate: any = {};
  
  if (fade) {
    animate.opacity = 1;
  }

  if (moveFrom) {
    if (moveFrom === "left" || moveFrom === "right") {
      animate.x = 0;
    } else {
      animate.y = 0;
    }
  }

  // Si transitionDuration es 0, desactivamos la animación
  if (transitionDuration === 0) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{
        duration: transitionDuration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
