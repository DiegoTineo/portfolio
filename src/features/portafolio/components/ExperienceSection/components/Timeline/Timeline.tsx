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
        title: "Ingeniería de Producto y Microservicios:",
        description: "Desarrollo de sistemas <b>ERP, POS, CRM y WMS</b> multitenant con <b>Node.js y Python</b> integrando modulos bidireccionales en tiempo real <b>(WebSockets, GraphQL)</b>."
      },
      {
        title: "Modernización y Coexistencia Legacy:",
        description: "Extensión de funcionalidades de un ERP core <b>(PHP 5.6)</b> mediante microservicios y tokens <b>JWT</b>, implementando subdominios y el patrón <b>Strangler Fig</b>."
      },
      {
        title: "Estrategia Offline-First y PWAs:",
        description: "Diseño de interfaces resilientes con <b>React y Next.js</b>, eliminando la dependencia de conectividad y garantizando la continuidad operativa."
      },
      {
        title: "Infraestructura y DevOps:",
        description: "Orquestación de contenedores con <b>Docker compose</b> y automatización de pipelines (CI/CD) mediante <b>GitHub Actions</b>, garantizando despliegues resilientes y alta disponibilidad."
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
        title: "Control de Acceso - Soluciones IoT:",
        description: "Desarrollo de <b>API REST</b> (Python/Flask) para el control de acceso vehicular, logrando la convergencia entre <b>software</b> y <b>hardware</b> en <b>tiempo real</b>."
      },
      {
        title: "Gestión de Transacciones Financieras:",
        description: "Implementación de módulos críticos para verificación de pagos y recarga de tarjetas, garantizando la consistencia de saldos y auditoría de datos en <b>DBs SQL</b>."
      },
      {
        title: "Infraestructura y Estándarización:",
        description: "Despliegue de <b>contenedores (Docker)</b> en servidores locales a nivel nacional, asegurando uniformidad operativa independiente de entorno."
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
              itemTitleClassName="lg:ml-10 text-sky-500 dark:text-sky-400 text-md lg:text-xl mb-1 font-semibold"
              itemDescriptionClassName="lg:ml-10 text-foreground/95 text-sm lg:text-base"
            />
          </div>
        ))}
      </div>
    </div>
  )
}