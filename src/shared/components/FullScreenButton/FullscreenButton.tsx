"use client";


import { Button } from '@/shared/shadcn/ui/button';
import { useState, useEffect } from 'react';
import { RiFullscreenExitFill, RiFullscreenFill } from 'react-icons/ri';

const KEYS = {
  F11: 'F11',
  ESCAPE: 'Escape',
};

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KEYS.F11) {
        event.preventDefault();
        document.documentElement.requestFullscreen();
        setIsFullscreen(!isFullscreen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return { isFullscreen };
};

export const FullscreenButton = () => {

  const { isFullscreen } = useFullscreen();
  // Función de prueba, puedes eliminarla una vez que veas que funciona.
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen({ navigationUI: 'hide' });
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <Button
      size="icon"
      variant="ghost"
      className="bg-muted/50 rounded-full cursor-pointer active:scale-95 transition-transform duration-200 hover:scale-110"
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
    >
      {isFullscreen ? (
        <RiFullscreenExitFill className="text-2xl text-pink-500" />
      ) : (
        <RiFullscreenFill className="text-2xl text-emerald-500" />
      )}
    </Button>
  );
};