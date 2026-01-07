import { FiExternalLink } from "react-icons/fi";

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
        <div className="z-10 flex items-center gap-4 mx-1 p-1 rounded-2xl">

          <div>
            <img src={logo} alt={company} height={80} width={80} className="w-12 h-12 rounded-full border-white border-2 bg-white overflow-hidden flex items-center justify-center shadow-md object-contain" />
          </div>

          <div className=''>
            <h3 className="font-bold text-2xl">{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-sky-500 hover:underline flex items-center gap-2"
            >
              <FiExternalLink className="inline " />
              <span>{company}</span>
            </a>
            <p className="text-base text-green-300/80">{duration}</p>
          </div>

        </div>

        <div className="flex px-7 ml-4">
          <div className="w-full md:w-1/2 px-1 my-5">
            <ul className="space-y-3 text-sm leading-relaxed flex flex-col gap-2">
              {(items ? items : []).map((item, index) => (
                <li key={index} className="">
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