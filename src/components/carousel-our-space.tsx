import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { clinicOurSpacePhotos } from '@/lib/imports-photos'

export function CarouselOurSpacePhotos() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: 'center',
        loop: true,
        skipSnaps: true,
      }}
    >
      <CarouselContent>
        {clinicOurSpacePhotos.map((photo, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="container flex items-center justify-center p-0 ">
                <CardContent className="flex items-center justify-center  bg-foreground/65 p-2.5 ">
                  <img
                    srcSet={photo}
                    alt={`photo our space ${index + 1}`}
                    className="w-full border border-foreground"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={'ghost'} />
      <CarouselNext variant={'ghost'} />
    </Carousel>
  )
}
