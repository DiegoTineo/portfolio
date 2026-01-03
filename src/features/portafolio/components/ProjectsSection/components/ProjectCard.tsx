
import { AppCarousel } from '@/shared/components/AppCarousel/AppCarousel';
import { cn } from '@/shared/lib/utils';
import { useRef } from 'react';


export interface ProjectCardProps {
  title: string;
  description: React.ReactNode[];
  mainImage: string;
  carousel?: React.ReactNode[];
  tech: Array<{
    name: string;
    icon: React.ReactNode;
    color: string;
  }>;
}

export const ProjectCard = ({
  title,
  description,
  mainImage,
  carousel,
  tech
}: ProjectCardProps) => {

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef} className='flex flex-col w-full max-w-xs rounded-md border-b-4 border-b-blue-500 border overflow-hidden shadow-2xl shadow-blue-500/15'
    >

      {/* CAROUSEL */}
      <div className='transition-all'>
        <AppCarousel items={carousel || []} />
      </div>

      {/* DESCRIPCION */}
      <div className='justify-between flex flex-col h-full'>
        {/* TITULO Y DESCRIPCION */}
        <div className='mb-4 p-4 pb-0 '>
          <h3 className='text-xl font-bold mb-2'>
            {title}
          </h3>
          <div className='text-xs text-foreground/75 gap-2 flex flex-col w-full'>
            {description}
          </div>
        </div>

        {/* FOOTER - TECH STACK */}
        <div className='p-4  w-full bg-muted/40 flex flex-wrap gap-2 min-h-18'>
          {tech.map((t, idx) => (
            <div key={idx} className='flex items-center gap-1 text-xs' title={t.name}>
              <span className={cn(t.color, 'flex items-center gap-1')}>{t.icon} {t.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
