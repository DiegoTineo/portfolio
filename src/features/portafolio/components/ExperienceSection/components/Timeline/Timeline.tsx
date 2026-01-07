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
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Ingeniería de Producto y Microservicios: </h4>
            <p>
              {/* Desarrollo de sistemas ERP, POS y WMS multitenant con <b>Node.js</b> y <b>Python</b>. Integración de flujos en tiempo real (WebSockets, GraphQL) y garantía de la integridad de datos en <b>DBs SQL</b>. */}
              Desarrollo de sistemas <b>ERP, POS, CRM y WMS</b> multitenant con <b>Node.js y Python</b> integrando modulos bidireccionales en tiempo real <b>(WebSockets, GraphQL)</b>.
            </p>
          </span>
      },
      // {
      //   text:
      //     <span className='flex flex-col'>
      //       <h4 className='font-bold text-sky-400'>• Sistemas de Tiempo Real: </h4>
      //       <p>
      //         Implementación de flujos bidireccionales <b>(WebSockets, GraphQL)</b> en entornos concurrentes.
      //       </p>
      //     </span>
      // },
      {
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Modernización y Coexistencia Legacy: </h4>
            <p>
              Extensión de funcionalidades de un ERP core <b>(PHP 5.6)</b> mediante microservicios y tokens <b>JWT</b>, implementando subdominios y el patrón <b>Strangler Fig</b>.
            </p>
          </span>
      },
      {
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Estrategia Offline-First y PWAs: </h4>
            <p>
              Diseño de interfaces resilientes con <b>React y Next.js</b>, eliminando la dependencia de conectividad y garantizando la continuidad operativa.
            </p>
          </span>
      },
      {
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Infraestructura y DevOps:</h4>
            <p>
              Orquestación de contenedores con <b>Docker</b> y automatización de pipelines (CI/CD) mediante <b>GitHub Actions</b>, garantizando despliegues resilientes y alta disponibilidad.
            </p>
          </span>
      },

    ]
  },
  {
    id: 2,
    logo: "/logos/scav.png",
    title: "Desarrollador Backend",
    company: "SCAV Parking - Alianza AFTIM",
    duration: "Enero 2022 - Marzo 2024",
    link: "https://scavparking.com",
    items: [
      {
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Control de Acceso - Soluciones IoT:</h4>
            <p>
              Desarrollo de <b>API REST</b> (Python/Flask) para el control de acceso vehicular, logrando la convergencia entre <b>software</b> y <b>hardware</b> en <b>tiempo real</b>.
            </p>
          </span>
      },
      {
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Gestión de Transacciones Financieras:</h4>
            <p>
              Implementación de módulos críticos para verificación de pagos y recarga de tarjetas, garantizando la consistencia de saldos y auditoría de datos en <b>DBs SQL</b>.
            </p>
          </span>
      },
      {
        text:
          <span className='flex flex-col'>
            <h4 className='font-bold text-sky-400'>• Infraestructura y Estándarización:</h4>
            <p>
              Despliegue de <b>contenedores (Docker)</b> en servidores locales a nivel nacional, asegurando uniformidad operativa independiente de entorno.
            </p>
          </span>
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