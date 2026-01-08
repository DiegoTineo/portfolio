import DecryptedText from '@/shared/shadcn/DecryptedText'

interface SectionTitleProps {
    title: string
}

const CHARACTERS = "▖■▎▃▄▇█❚▀▙▚▛▜▟▞▂▬▔"
export const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <div className='min-h-15 mt-5 flex items-center gap-2'>
      <span className='text-2xl font-extrabold text-sky-500'>♦ </span>
      <DecryptedText 
        encryptedClassName='text-2xl font-extrabold text-sky-500 dark:text-indigo-650' 
        className='text-shadow-xs dark:text-shadow-blue-50/5 text-5xl font-extrabold' 
        text={title} 
        animateOn="view"
        sequential 
        characters={CHARACTERS} 
        speed={60} 
      />
    </div>
  )
}
