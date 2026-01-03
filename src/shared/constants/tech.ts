
import { SiNextdotjs, SiNestjs, SiZod, SiApollographql, SiFlask, SiJinja, SiVite, SiReacthookform, SiTypeorm, SiMui, SiSwagger, SiJsonwebtokens } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { GrMysql, GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { SiTypescript } from "react-icons/si";

export const TECH = {
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