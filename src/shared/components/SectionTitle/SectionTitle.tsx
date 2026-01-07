import DecryptedText from '@/shared/shadcn/DecryptedText'

interface SectionTitleProps {
    title: string
}

const CHARACTERS = "▖■▎▃▄▇█❚▀▙▚▛▜▟▞▂▬▔"
export const SectionTitle = ({title}: SectionTitleProps) => {
  return (
    <div className='min-h-15 mt-5 flex items-center gap-2'>
      <span className='text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-400 to-blue-400 dark:via-blue-500 dark:to-indigo-500'>♦ </span>
      <DecryptedText 
        encryptedClassName='text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-400 to-blue-400 dark:via-blue-500 dark:to-indigo-500' 
        className='text-5xl font-extrabold' 
        text={title} 
        animateOn="view"
        sequential 
        characters={CHARACTERS} 
        speed={60} 

      />
    </div>
  )
}
