import { FiExternalLink } from "react-icons/fi";
import { cn } from "@/shared/lib/utils";
import AnimatedContainer from "@/shared/components/animated/AnimatedContainer";


interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineStepProps {
  logo: string;
  title: string;
  company: string;
  duration: string;
  link: string;
  items: TimelineItem[];
  itemTitleClassName?: string;
  itemDescriptionClassName?: string;
}


export const TimelineStep: React.FC<TimelineStepProps> = ({
  logo,
  title,
  company,
  duration,
  link,
  items,
  itemTitleClassName,
  itemDescriptionClassName
}) => {
  return (
    <>
      <div className='relative'>
        {/* <div className="z-10 flex items-center gap-4 px-2 sticky top-15"> */}
        <AnimatedContainer moveFrom="left">
          <div className="z-10 flex items-center gap-4 mx-1 p-1 rounded-2xl">

            <img src={logo} alt={company} height={80} width={80} className="w-12 h-12 rounded-full border-muted dark:border-white border-2 bg-white overflow-hidden flex items-center justify-center shadow-md object-contain" />

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
              <p className="text-base text-green-600/80 dark:text-green-300/80">{duration}</p>
            </div>

          </div>
        </AnimatedContainer>

        <div className="flex px-7 pr-4 ml-4">
          <div className="w-full md:w-1/2 px-1 my-5">
            <ul className="space-y-3 text-sm leading-relaxed flex flex-col gap-2">
              {(items ? items : []).map((item, index) => (
                <AnimatedContainer key={index} once={false}>
                  <li className="flex flex-col">
                    <h4 className={cn("font-bold text-sky-400 text-xs", itemTitleClassName)}>
                      • {item.title}
                    </h4>
                    <p
                      className={cn("text-foreground/80", itemDescriptionClassName)}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </li>
                </AnimatedContainer>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}