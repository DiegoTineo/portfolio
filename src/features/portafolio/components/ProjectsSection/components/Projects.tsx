
import { SiNextdotjs, SiNestjs, SiZod, SiApollographql, SiFlask, SiJinja, SiVite, SiReacthookform, SiTypeorm, SiMui, SiSwagger, SiJsonwebtokens } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { SiTypescript } from "react-icons/si";
import { ProjectCard, type ProjectCardProps } from "./ProjectCard";

const TECH = {
  NEXT: { name: "Next.js", icon: <SiNextdotjs className='text-foreground' />, color: 'text-foreground' },
  VITE: { name: "Vite", icon: <SiVite className='text-yellow-400' />, color: 'text-yellow-400' },
  REACT: { name: "React", icon: <FaReact className='text-sky-400' />, color: 'text-sky-400' },
  REACT_HOOK_FORM: { name: "React Hook Form", icon: <SiReacthookform className='text-pink-400' />, color: 'text-pink-400' },
  TAILWIND: { name: "Tailwind", icon: <RiTailwindCssFill className='text-sky-300' />, color: 'text-sky-300' },
  MUI: { name: "Material-UI", icon: <SiMui className='text-sky-500' />, color: 'text-sky-500' },
  ZOD: { name: "Zod", icon: <SiZod className='text-indigo-400' />, color: 'text-indigo-400' },
  NEST: { name: "Nest.js", icon: <SiNestjs className='text-red-400' />, color: 'text-red-400' },
  NODE: { name: "Node.js", icon: <FaNodeJs className='text-green-500' />, color: 'text-green-500' },
  TYPESCRIPT: { name: "TypeScript", icon: <SiTypescript className='text-sky-300' />, color: 'text-sky-300' },
  TYPEORM: { name: "TypeORM", icon: <SiTypeorm className='text-orange-500' />, color: 'text-orange-500' },
  APOLLO: { name: "Apollo", icon: <SiApollographql className='text-pink-400' />, color: 'text-pink-400' },
  GRAPHQL: { name: "GraphQL", icon: <GrGraphQl className='text-pink-500' />, color: 'text-pink-500' },
  SWAGGER: { name: "Swagger", icon: <SiSwagger className='text-lime-400' />, color: 'text-lime-400' },
  PYTHON: { name: "Python", icon: <FaPython className='text-green-500' />, color: 'text-green-500' },
  FLASK: { name: "Flask", icon: <SiFlask className='text-foreground' />, color: 'text-foreground' },
  JINJA: { name: "Jinja", icon: <SiJinja className='text-red-400' />, color: 'text-red-400' },
  GOLANG: { name: "Golang", icon: <FaGolang className='text-sky-400' />, color: 'text-sky-400' },
  MYSQL: { name: "MySQL", icon: <GrMysql className='text-sky-500' />, color: 'text-sky-500' },
  POSTGRESQL: { name: "PostgreSQL", icon: <BiLogoPostgresql className='text-sky-200' />, color: 'text-sky-200' },
  SQLSERVER: { name: "SQL Server", icon: <DiMsqlServer className='text-red-400' />, color: 'text-red-400' },
  DOCKER: { name: "Docker", icon: <FaDocker className='text-sky-500' />, color: 'text-sky-500' },
  // TYPEORM: { name: "TypeORM", icon: <SiNextdotjs className='text-foreground' /> }
  // ZUSTAND: { name: "Zustand", icon: <SiNextdotjs className='text-foreground' /> }
  GOOGLE: { name: "Google", icon: <FcGoogle className='text-foreground' />, color: 'text-foreground' },
  JWT: { name: "JWT", icon: <SiJsonwebtokens className='text-yellow-400' />, color: 'text-yellow-400' },
}



const PROJECTS: ProjectCardProps[] = [
  {
    title: "WMS - Warehouse Management System",
    description: [
      <p key={0}>
        <b className="font-bold text-sky-400">El Reto:</b> Garantizar la <b className="font-bold text-sky-400">trazabilidad total de activos</b> en almacenes de alta rotación, eliminando discrepancias entre el stock físico y el digital.
      </p>,
      <p key={1}>
        <b className="font-bold text-sky-400">La Solución:</b> Sistema integral para la gestión de transferencias, despachos y mermas con auditoría en tiempo real. Implementado bajo una arquitectura que prioriza la consistencia de datos en operaciones logísticas complejas.
      </p>
    ],
    mainImage: "/images/projects/wms.png",
    carousel: [
      <div className='relative h-full' key={0}>
        <img src={"/images/projects/wms.png"} alt={"WMS - Cover"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
      <div className='relative h-full' key={1}>
        {/* <Image src={"/images/projects/pmvalidator.png"} alt={"Conciliación de pagos - Dashboard"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" /> */}
        {/* <video
          src={'/videos/wms.mp4'}
          autoPlay
          loop
          muted
          playsInline
          className='-z-20 absolute inset-0 w-full h-full object-cover object-center brightness-80'
        /> */}
      </div>
    ],
    tech: [
      TECH.NEXT,
      TECH.REACT,
      TECH.TAILWIND,
      TECH.DOCKER,
      TECH.GRAPHQL,
      TECH.APOLLO,
      TECH.TYPESCRIPT,
    ]
  },
  {
    title: "Modern POS & Facturación Offline-First",
    description: [
      <p key={0}><b className="font-bold text-sky-400">El Reto:</b> Garantizar la continuidad operativa de sistemas de ventas en entornos con conectividad inestable, donde una caída de internet significa pérdida de ventas.</p>,
      <p key={1}><b className="font-bold text-sky-400">La Solución:</b> Desarrollo de una <b className="font-bold text-sky-400">PWA asíncrona</b> con gestión de base de datos local y sincronización diferida para permitir facturar sin conexión y garantizar la integridad de los datos, priorizando la consistencia de datos.</p>
    ],
    mainImage: "/images/projects/posreact.png",
    carousel: [
      <div className='relative h-full' key={0}>
        <img src={"/images/projects/posreact.png"} alt={"Conciliación de pagos - Cover"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
      // <div className='relative h-full' key={1}>
      //   {/* <Image src={"/images/projects/pmvalidator.png"} alt={"Conciliación de pagos - Dashboard"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" /> */}
      //   <video
      //     src={'/videos/pos.mp4'}
      //     autoPlay
      //     loop
      //     muted
      //     playsInline
      //     className='-z-20 absolute inset-0 w-full h-full object-cover object-center brightness-80'
      //   />
      // </div>
    ],
    tech: [
      TECH.REACT,
      TECH.MUI,
      TECH.REACT_HOOK_FORM,
      TECH.ZOD,
      TECH.GRAPHQL,
      TECH.APOLLO,
      TECH.VITE,
    ]
  },
  {
    title: "Conciliación de Pagos & Auditoría Bancaria",
    description: [
      <p key={0}><b className="font-bold text-sky-400">El Reto:</b> Permitir la verificación de transacciones financieras (Pago Móvil) a personal operativo sin comprometer la seguridad de las credenciales bancarias de la empresa.</p>,
      <p key={1}><b className="font-bold text-sky-400">La Solución:</b> Plataforma de abstracción financiera que centraliza reportes y agiliza la conciliación mediante APIs bancarias. Diseñada con validaciones estrictas para prevenir errores de registro y duplicidad de pagos.</p>
    ],
    mainImage: "/images/projects/pmvalidator.png",
    carousel: [
      <div className='relative h-full' key={0}>
        <img src={"/images/projects/pmvalidator.png"} alt={"Conciliación de pagos - Cover"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
      <div className='relative h-full' key={1}>
        <img src={"/images/projects/aftimpm1.png"} alt={"Conciliación de pagos - Dashboard"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
      <div className='relative h-full' key={2}>
        <img src={"/images/projects/aftimpm2.png"} alt={"Conciliación de pagos - Reportes"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
    ],
    tech: [
      TECH.NEXT,
      TECH.REACT,
      TECH.TAILWIND,
      TECH.ZOD,
      TECH.REACT_HOOK_FORM,
      TECH.NEST,
      // TECH.POSTGRESQL,
      // TECH.MYSQL,
      TECH.DOCKER,
    ]
  },
  {
    title: "Estandarización de Impresoras Fiscales (Python API)",
    description: [
      <p key={0}><b className="font-bold text-sky-400">El Reto:</b> La fragmentación de protocolos en hardware fiscal legacy que dificulta la integración con sistemas modernos.</p>,
      <p key={1}><b className="font-bold text-sky-400">La Solución:</b> Capa de abstracción (Middleware) que unifica la comunicación con diversos modelos de impresoras fiscales mediante una API REST. Resuelve la complejidad de protocolos seriales y garantiza la emisión de documentos legales de forma estandarizada y segura.</p>
    ],
    mainImage: "/images/projects/pyapi.png",

    tech: [
      TECH.PYTHON,
      TECH.FLASK,
      TECH.JINJA,
      TECH.DOCKER,
      TECH.SWAGGER,
    ],
    carousel: [
      <div className='relative h-full' key={0}>
        <img src={"/images/projects/pyapi.png"} alt={"Conciliación de pagos - Cover"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
      <div className='relative h-full' key={2}>
        <img src={"/images/projects/pyapiconfig.png"} alt={"Conciliación de pagos - Reportes"} height={1200} width={1200} className="absolute inset-0 w-full h-full object-contain" />
      </div>,
      // <div className='relative h-full' key={1}>
      //   <video
      //     src={'/videos/impresoras.mp4'}
      //     autoPlay
      //     loop
      //     muted
      //     playsInline
      //     className='-z-20 absolute inset-0 w-full h-full object-cover object-center brightness-80'
      //   />
      // </div>,
    ]
  }
]

export function Projects() {
  return (

    <div className='flex flex-wrap justify-center gap-10 w-full'>
      {PROJECTS.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  )
}
