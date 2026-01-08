import { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { themeStore, toggleTheme } from '../stores/themeStore';
import { Button } from '../shadcn/ui/button';
import { RiMoonClearFill } from "react-icons/ri";
import { LuSun } from "react-icons/lu";
import { CgSpinner } from "react-icons/cg";

export const ThemeToggleButton = () => {
  const theme = useStore(themeStore);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = async () => {
    if (
      !ref.current ||
      //@ts-ignore
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      toggleTheme();
      return;
    }

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    //@ts-ignore
    const transition = document.startViewTransition(() => {
      // 1. Cambiamos la clase del DOM inmediatamente para que la API capture el estado nuevo sin demora
      const currentTheme = themeStore.get();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      
      // 2. Actualizamos el store (esto es asíncrono respecto a la captura de pantalla)
      themeStore.set(newTheme);
      localStorage.setItem('theme', newTheme);
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 250,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  return (
    <Button
      onClick={handleToggle}
      ref={ref}
      id="theme-toggle"
      variant="ghost"
      className="bg-muted/50 rounded-full cursor-pointer active:scale-95 transition-transform duration-200 hover:scale-110"
      size="icon"
    >
      {/* Solo se muestra el icono cuando el componente se ha montado en el cliente */}
      {mounted && (
        theme === 'dark' ? (
          <LuSun key="sun" className="text-xl animate-[spin_0.6s_ease-in-out] scale-110" />
        ) : (
          <RiMoonClearFill key="moon" className="text-xl animate-[spin_0.6s_ease-in-out] text-blue-500 scale-110" />
        )
      )}
      {!mounted && <CgSpinner key="spinner" className="text-xl animate-spin" />}
    </Button>
  );
};
