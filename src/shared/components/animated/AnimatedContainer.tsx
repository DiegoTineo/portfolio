"use client";

import { motion } from "motion/react";
import { type ReactNode, useState } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
  transitionDuration?: number;
  moveFrom?: "left" | "right" | "up" | "down";
  fade?: boolean;
  delay?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  trigger?: "always" | "scrolldown";
}

export const AnimatedContainer = ({
  children,
  transitionDuration = 0.6,
  moveFrom,
  fade = true,
  delay = 0,
  className = "",
  distance = 30,
  once = true,
  trigger = "always",
}: AnimatedContainerProps) => {
  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
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

  const handleViewportEnter = (entry: IntersectionObserverEntry | null) => {
    if (trigger === "scrolldown" && entry) {
      // Si el top es negativo al entrar, es que el elemento ya pasó (el usuario está subiendo)
      const isComingFromTop = entry.boundingClientRect.top < 0;
      setShouldAnimate(!isComingFromTop);
    } else {
      setShouldAnimate(true);
    }
    setIsInView(true);
  };

  const handleViewportLeave = () => {
    if (!once) {
      setIsInView(false);
    }
  };

  return (
    <motion.div
      initial={initial}
      animate={isInView ? animate : initial}
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      viewport={{ once }}
      transition={{
        duration: shouldAnimate ? transitionDuration : 0,
        delay: shouldAnimate ? delay : 0,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
