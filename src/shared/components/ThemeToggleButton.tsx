import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { themeStore, toggleTheme } from '../stores/themeStore';
import { Button } from '../shadcn/ui/button';
import { RiMoonClearFill } from "react-icons/ri";
import { LuSun } from "react-icons/lu";

export const ThemeToggleButton = () => {
  const theme = useStore(themeStore);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onClick={toggleTheme}
      id="theme-toggle"
      variant="ghost"
      className="bg-muted/50 rounded-full cursor-pointer active:scale-95 transition-transform duration-200 hover:scale-110"
      size="icon"
    >
      {/* Solo se muestra el icono cuando el componente se ha montado en el cliente */}
      {mounted && (
        theme === 'dark' ? <LuSun className='animate-[spin_0.2s_ease-in-out_1]'/> : <RiMoonClearFill className='animate-[spin_0.2s_ease-in-out_1] text-blue-500' />
      )}
    </Button>
  );
};
