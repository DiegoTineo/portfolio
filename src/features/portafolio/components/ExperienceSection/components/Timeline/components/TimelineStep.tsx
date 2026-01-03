
interface TimelineStepProps {
  logo: string;
  title: string;
  company: string;
  duration: string;
  link: string;
  items: Array<{ text: React.ReactNode }>;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  logo,
  title,
  company,
  duration,
  link,
  items
}) => {
  return (
    <>
      <div className='relative'>
        {/* <div className="z-10 flex items-center gap-4 px-2 sticky top-15"> */}
        <div className="z-10 flex items-center gap-4 mx-1 p-1 bg-linear-to-r from-transparent  via-blue-950/50 to-transparent rounded-bl-2xl rounded-r-full">

          <div>
            <img src={logo} alt={company} height={80} width={80} className="w-12 h-12 rounded-full border-white border-2 bg-white overflow-hidden flex items-center justify-center shadow-md object-contain" />
          </div>

          <div className=''>
            <h3 className="font-bold text-xl">{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-500 hover:underline"
            >
              {company}
            </a>
            <p className="text-sm text-green-200/70">{duration}</p>
          </div>

        </div>

        <div className="flex px-7 ml-4">
          <div className="w-full md:w-1/2 px-1 my-5">
            <ul className="space-y-3">
              {(items ? items : []).map((item, index) => (
                <li key={index} className="text-sm leading-relaxed">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}