import { treatmentsPopular } from '@/lib/imports-photos'

import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function TreatmentsCarousel() {
  const photosTreatments = treatmentsPopular

  return (
    <div className="mx-8 p-4 md:mx-10 lg:mx-20 ">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          skipSnaps: true,
        }}
        className="container "
      >
        <CarouselContent>
          {photosTreatments.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2   md:pl-4  lg:basis-1/3 "
            >
              <div className="mx-auto">
                <Card className="flex h-full flex-col space-y-1 overflow-hidden  bg-muted p-0 hover:cursor-grab active:cursor-grabbing">
                  <AspectRatio
                    ratio={14 / 10}
                    className="  w-full overflow-hidden border-muted"
                  >
                    <img
                      src={item}
                      alt="foto tratamento"
                      className="h-full max-h-[300px]  w-full object-cover object-center p-0 "
                    />
                  </AspectRatio>
                  <CardContent className="container p-0">
                    <div className="mt-2 pb-4 text-foreground  lg:mt-6">
                      <div className="ml-4">
                        <p className="text-sm font-normal">Estética</p>
                        <h3 className="mb-5 line-clamp-2 w-full overflow-clip text-base">
                          Preenchimento e Lifting Facial
                        </h3>
                      </div>
                      <Button
                        variant={'secondary'}
                        size={'sm'}
                        className="ml-4 h-7 bg-primary/50 text-xs font-medium"
                        type="button"
                        asChild
                      >
                        <a href="/tratamento">SAIBA MAIS</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={'ghost'}
          className="ml-10 hover:bg-transparent"
        />
        <CarouselNext
          variant={'ghost'}
          className="mr-10 hover:bg-transparent"
        />
      </Carousel>
    </div>
  )
}
