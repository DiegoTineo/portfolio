import { motion } from "motion/react";

export function AnimatedWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Estado inicial (invisible y abajo)
      whileInView={{ opacity: 1, y: 0 }} // Estado al estar en pantalla
      viewport={{ once: true }} // Animación ocurre solo una vez
      transition={{ duration: 1 }} // Duración de la animación
    >
      <h2>¡Hola! Aparecí al hacer scroll.</h2>
    </motion.div>
  );
}
