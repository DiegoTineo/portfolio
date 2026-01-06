import { useRef } from 'react'
import { MotionLine } from '@/shared/components/MotionLine/MotionLine';
import { TimelineStep } from './components/TimelineStep';
import { cn } from '@/shared/lib/utils';

const EXPERIENCE_ITEMS = [
  {
    id: 1,
    logo: "/logos/aftim.png",
    title: "Desarrollador Full Stack",
    company: "Somos Sistemas (AFTIM)",
    duration: "Enero 2022 - Actualidad",
    link: "https://aftim.com",
    items: [
      {
        text: <span><b className='font-bold text-sky-400'>• Ingeniería de Producto:</b> Lideré el desarrollo y mantenimiento de ecosistemas empresariales <b className='font-bold text-sky-400'>(ERP, POS, CRM, WMS)</b> bajo arquitecturas de microservicios, priorizando la integridad de datos transaccionales y la escalabilidad del sistema.</span>
      },
      {
        text: <span><b className='font-bold text-sky-400'>• Comunicaciones en Tiempo Real:</b> Implementé flujos de datos bidireccionales mediante <b className='font-bold text-sky-400'>WebSockets</b> y <b className='font-bold text-sky-400'>GraphQL</b>, optimizando la actualización de inventarios y ventas en tiempo real para entornos de alta transaccionalidad (Restaurantes/POS).</span>
      },
      {
        text: <span><b className='font-bold text-sky-400'>• Infraestructura y Resiliencia:</b> Diseñé una arquitectura de despliegue basada en <b className='font-bold text-sky-400'>Docker</b> y <b className='font-bold text-sky-400'>GHCR</b>, gestionando <b className='font-bold text-sky-400'>VPS Linux</b> con configuraciones de <b className='font-bold text-sky-400'>Reverse Proxy</b>, <b className='font-bold text-sky-400'>SSL</b> y <b className='font-bold text-sky-400'>pipelines de automatización</b> con <b className='font-bold text-sky-400'>GitHub Actions</b> (CI/CD).</span>
      },
    ]
  },
  {
    id: 2,
    logo: "/logos/scav.png",
    title: "Desarrollador Backend",
    company: "SCAV Parking",
    duration: "Enero 2022 - Marzo 2024",
    link: "https://scavparking.com",
    items: [
      {
        text: <span><b className='font-bold text-sky-400'>Lógica de Control de Acceso:</b> Diseñé y desarrollé el núcleo del sistema (Python/Flask) para la automatización de barreras (balancines), integrando la validación de <b className='font-bold text-sky-400'>hardware</b> con la lógica de negocio en <b className='font-bold text-sky-400'>tiempo real</b>.</span>
      },
      {
        text: <span><b className='font-bold text-sky-400'>Gestión de Transacciones Críticas:</b> Implementé el módulo de verificación de pagos y recarga de tarjetas, asegurando la consistencia de los saldos y la integridad de los datos transaccionales.</span>
      },
      {
        text: <span><b className='font-bold text-sky-400'>Resiliencia Operativa:</b> Optimicé el backend para garantizar un funcionamiento autónomo y de baja latencia, permitiendo el procesamiento de pagos sin dependencia crítica de conectividad constante.</span>
      },
      {
        text: <span><b className='font-bold text-sky-400'>Estandarización:</b> Dockericé el entorno de ejecución para asegurar <b className='font-bold text-sky-400'>despliegues rápidos y uniformes</b> en los servidores locales de cada sede a nivel nacional.</span>
      },
    ]
  }
]

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex">
      <div className='flex translate-x-8'>
        <MotionLine />
      </div>

      <div ref={containerRef} className='flex flex-col'>
        {EXPERIENCE_ITEMS.map((experience, index) => (
          <div key={experience.id} className={cn(index > 0 ? 'mt-4' : '')}>
            <TimelineStep
              logo={experience.logo}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              link={experience.link}
              items={experience.items}
            />
          </div>
        ))}
      </div>
    </div>
  )
}