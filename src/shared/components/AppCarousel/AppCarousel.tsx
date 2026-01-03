import { cn } from "@/shared/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/shadcn/ui/carousel";
import type { ReactNode } from "react";

interface AppCarouselProps {
  items: ReactNode | ReactNode[];
}

export function AppCarousel({ items }: AppCarouselProps) {
  // Convertir a array si es un solo item
  const itemsArray = Array.isArray(items) ? items : [items];

  return (
    <Carousel>
      <CarouselContent className="h-48">
        {itemsArray.map((item, index) => (
          <CarouselItem key={index} className={cn("h-full")}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"default"} className="translate-x-15 translate-y-12 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white cursor-pointer active:brightness-110 transition-transform duration-150"  />
      <CarouselNext variant={"default"} className="-translate-x-15 translate-y-12 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white cursor-pointer active:brightness-110 transition-transform duration-150" />
    </Carousel>
  )
}
