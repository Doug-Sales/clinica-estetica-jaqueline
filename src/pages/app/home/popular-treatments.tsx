import { TreatmentsCarousel } from '@/components/carousel-treatments'

export function PopularTreatmentsCarousel() {
  return (
    <div className=" container bg-muted-foreground py-6 text-muted lg:py-10">
      <div className="px-4">
        <h2 className="mt-10 text-3xl font-light tracking-tight">
          Tratamentos
        </h2>
        <p className="mb-5 pl-4 text-base font-light tracking-tight">
          / Mais procurados
        </p>
      </div>
      <TreatmentsCarousel />
    </div>
  )
}
